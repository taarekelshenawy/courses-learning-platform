"use client";
import React, { useState } from "react";

type ModalProps = {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function AskQuestionModal({
  showModal,
  setShowModal,
}: ModalProps) {
  const [question, setQuestion] = useState(
    localStorage.getItem("question") || ""
  );

  localStorage.setItem("question", question);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return alert("اكتب سؤالك أولاً ");
    setQuestion(question);
    setShowModal(false);
  };

  return (
    <div className="mt-10 text-center">
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="relative w-full max-w-sm rounded-lg bg-white p-6 shadow-lg">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-3 cursor-pointer text-xl text-gray-500 hover:text-gray-700"
            >
              ×
            </button>

            <h2 className="mb-4 text-center text-lg font-bold">
              Ask a Question
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <textarea
                placeholder="اكتب سؤالك هنا..."
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                className="h-28 resize-none rounded-lg border border-gray-300 p-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-lg bg-blue-600 py-2 text-white transition hover:bg-blue-700"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
