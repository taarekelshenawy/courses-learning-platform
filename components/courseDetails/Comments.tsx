import React from "react";
import Image from "next/image";
import { useState } from "react";
import { Comment } from "@/types/courseTypes";

type commentProps = {
  commentsData: Comment[];
  onAddComment: (newComment: Comment) => void;
};

export const Comments = ({ commentsData, onAddComment }: commentProps) => {
  const [commentText, setCommentText] = useState("");

  function AddComment(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!commentText.trim()) return;
    const newComment: Comment = {
      name: "Tarek Elshenawy",
      date: "Just now",
      avatar: "https://github.com/shadcn.png",
      description: commentText,
    };

    if (onAddComment) {
      onAddComment(newComment);
    }

    setCommentText("");
  }
  return (
    <div className="commentpage mt-12 flex flex-col gap-8 rounded-2xl bg-[#F5F9FA] px-6 py-10">
      <h1 className="mb-4 text-4xl font-bold text-gray-800">Comments</h1>

      <div className="flex flex-col gap-8">
        {commentsData && commentsData.length > 0 ? (
          commentsData.map(({ name, description, date, avatar }, index) => (
            <div
              key={index}
              className="flex gap-6 rounded-2xl bg-white p-5 shadow-md transition-shadow hover:shadow-lg"
            >
              <Image
                src={avatar}
                alt={`${name} comment`}
                width={80}
                height={80}
                className="h-20 w-20 rounded-full object-cover"
              />
              <div className="text-gray-700">
                <div className="mb-3">
                  <p className="text-2xl font-semibold text-gray-900">{name}</p>
                  <p className="text-sm text-gray-500">{date}</p>
                </div>
                <p className="text-base leading-relaxed">{description}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No comments on this lesson yet.</p>
        )}
      </div>

      <div className="mt-10 flex flex-col gap-4">
        <form onSubmit={AddComment}>
          <textarea
            rows={6}
            placeholder="Write your comment..."
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            className="w-full max-w-3xl rounded-xl border border-gray-200 bg-white p-4 shadow-[0_0_10px_rgba(0,0,0,0.05)] transition-all focus:ring-2 focus:ring-green-500 focus:outline-none"
          ></textarea>

          <button
            className="w-48 rounded bg-[#0B9586] py-3 text-lg font-semibold text-white shadow-md transition-colors hover:bg-[#097b6f]"
            type="submit"
          >
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
};
