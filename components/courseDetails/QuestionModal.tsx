"use client";
import React, { useState, useEffect } from "react";

export default function QuestionModal({
  setShowModal,
}: {
  setShowModal: (val: boolean) => void;
}) {
  const [page, setPage] = useState(1);
  const [timeLeft, setTimeLeft] = useState(60);
  const [quizFinished, setQuizFinished] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<{
    [key: number]: number;
  }>({});

  const quizQuestions = [
    {
      id: 1,
      question: "Which language is used to style web pages?",
      options: ["JavaScript", "CSS", "Python", "HTML"],
      correctAnswer: "CSS",
      pagenumber: 1,
    },
    {
      id: 2,
      question:
        "Which of the following is used to add interactivity to web pages?",
      options: ["HTML", "CSS", "JavaScript", "SQL"],
      correctAnswer: "JavaScript",
      pagenumber: 2,
    },
    {
      id: 3,
      question: "Which HTML tag is used to display an image?",
      options: ["<img>", "<picture>", "<image>", "<src>"],
      correctAnswer: "<img>",
      pagenumber: 3,
    },
    {
      id: 4,
      question: "Which CSS property is used to change the background color?",
      options: ["color", "background-color", "bg-color", "background"],
      correctAnswer: "background-color",
      pagenumber: 4,
    },
  ];

  const Questionsdata = quizQuestions.filter(
    (item) => item.pagenumber === page
  );

  const handleSelect = (questionIndex: number, optionIndex: number) => {
    if (!quizFinished) {
      setSelectedOptions((prev) => ({ ...prev, [questionIndex]: optionIndex }));
    }
  };

  useEffect(() => {
    if (timeLeft <= 0) {
      setQuizFinished(true);
      return;
    }
    const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-[rgba(128,128,128,0.5)]"
      onClick={() => setShowModal(false)}
    >
      <div
        className="absolute top-1/2 left-1/2 mt-4 -translate-x-1/2 -translate-y-1/2 transform rounded-2xl bg-blue-700 px-4 py-2"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mx-auto mb-3 max-w-52 rounded bg-amber-300 text-center text-xl font-bold text-white">
          {quizFinished ? "⏰ Time's up!" : `⏰ ${formatTime(timeLeft)}`}
        </div>

        <div className="mb-3 flex items-center justify-center gap-3 font-bold text-white">
          {[1, 2, 3, 4].map((num) => (
            <button
              key={num}
              onClick={() => setPage(num)}
              className={`h-12 w-12 cursor-pointer rounded-full border border-white transition-colors ${page === num ? "bg-white text-blue-700" : "bg-blue-700 hover:bg-white hover:text-blue-700"}`}
            >
              {num}
            </button>
          ))}
        </div>

        <div className="rounded-3xl bg-white p-3">
          {Questionsdata.map((item, questionIndex) => (
            <div key={item.id} className="">
              <p className="lg:text-md font-bold">
                {item.id}. {item.question}
              </p>
              <div className="mt-2">
                {item.options.map((option, optionIndex) => (
                  <div
                    key={optionIndex}
                    onClick={() => handleSelect(questionIndex, optionIndex)}
                    className={`mb-3 flex w-full cursor-pointer items-center rounded-lg border px-3 py-1 transition-colors duration-300 ${selectedOptions[questionIndex] === optionIndex ? "bg-blue-600 text-white" : "bg-white text-black"} `}
                  >
                    <p>{option}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
