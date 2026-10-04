import React from "react";
import Image from "next/image";
import user_1 from "../../components/Images/user1-image.webp";
import user_2 from "../../components/Images/user2-image.webp";
import user_3 from "../../components/Images/user3-image.webp";

const commentsData = [
  {
    id: 1,
    name: "Mustafa Fathi",
    date: "Oct 10, 2021",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: user_1,
  },
  {
    id: 2,
    name: "Sara Ahmed",
    date: "Nov 2, 2021",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: user_2,
  },
  {
    id: 3,
    name: "Ali Mohamed",
    date: "Dec 15, 2021",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: user_3,
  },
];

export const Comments = () => {
  return (
    <div className="commentpage mt-12 flex flex-col gap-8 rounded-2xl bg-[#F5F9FA] px-6 py-10">
      <h1 className="mb-4 text-4xl font-bold text-gray-800">Comments</h1>

      <div className="flex flex-col gap-8">
        {commentsData.map(({ id, name, date, text, image }) => (
          <div
            key={id}
            className="flex gap-6 rounded-2xl bg-white p-5 shadow-md transition-shadow hover:shadow-lg"
          >
            <Image
              src={image}
              alt={`${name} comment`}
              className="h-20 w-20 rounded-full object-cover"
            />
            <div className="text-gray-700">
              <div className="mb-3">
                <p className="text-2xl font-semibold text-gray-900">{name}</p>
                <p className="text-sm text-gray-500">{date}</p>
              </div>
              <p className="text-base leading-relaxed">{text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 flex flex-col gap-4">
        <textarea
          rows={6}
          placeholder="Write your comment..."
          className="w-full max-w-3xl rounded-xl border border-gray-200 bg-white p-4 shadow-[0_0_10px_rgba(0,0,0,0.05)] transition-all focus:ring-2 focus:ring-green-500 focus:outline-none"
        ></textarea>

        <button className="w-48 rounded bg-[#0B9586] py-3 text-lg font-semibold text-white shadow-md transition-colors hover:bg-[#0B9586]">
          Submit Review
        </button>
      </div>
    </div>
  );
};
