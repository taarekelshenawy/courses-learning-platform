"use client";
import React, { useState, useEffect } from "react";

export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  pagenumber: number;
}

export default function QuestionModal({
  setShowModal,
  quizQuestions,
  weekNumber,
  onQuizComplete,
}: {
  setShowModal: (val: boolean) => void;
  quizQuestions: Question[];
  weekNumber: number;
  onQuizComplete: (weekNum: number, passed: boolean) => void;
}) {
  const [page, setPage] = useState(1);
  const [timeLeft, setTimeLeft] = useState(60);
  const [quizFinished, setQuizFinished] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<{
    [key: number]: number;
  }>({});
  const [score, setScore] = useState<number | null>(null);

  const Questionsdata = quizQuestions.filter(
    (item) => item.pagenumber === page
  );

  const handleSelect = (questionId: number, optionIndex: number) => {
    if (!quizFinished) {
      setSelectedOptions((prev) => ({ ...prev, [questionId]: optionIndex }));
    }
  };

  useEffect(() => {
    if (timeLeft <= 0) {
      handleFinishQuiz();
      return;
    }
    const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleFinishQuiz = () => {
    setQuizFinished(true);
    let calculatedScore = 0;

    quizQuestions.forEach((q) => {
      if (selectedOptions[q.id] === q.correctAnswer) {
        calculatedScore += 1;
      }
    });

    setScore(calculatedScore);

    // حساب هل نجح الطالب أم لا (مثلاً الشرط: الحصول على نصف الدرجة أو أكثر)
    const isPassed = calculatedScore >= Math.ceil(quizQuestions.length / 2);

    // إرسال النتيجة للمكون الأب لتحديث الـ Progress
    onQuizComplete(weekNumber, isPassed);
  };

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
        className="absolute top-1/2 left-1/2 mt-4 w-96 max-w-full -translate-x-1/2 -translate-y-1/2 transform rounded-2xl bg-blue-700 px-4 py-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mx-auto mb-3 max-w-52 rounded bg-amber-300 text-center text-xl font-bold text-white">
          {quizFinished ? "⏰ Time's up!" : `⏰ ${formatTime(timeLeft)}`}
        </div>

        {/* أزرار الصفحات */}
        <div className="mb-3 flex items-center justify-center gap-3 font-bold text-white">
          {Array.from({
            length: Math.max(...quizQuestions.map((q) => q.pagenumber || 1)),
          }).map((_, index) => (
            <button
              key={index}
              onClick={() => setPage(index + 1)}
              className={`h-10 w-10 cursor-pointer rounded-full border border-white transition-colors ${
                page === index + 1
                  ? "bg-white text-blue-700"
                  : "bg-blue-700 hover:bg-white hover:text-blue-700"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>

        <div className="rounded-3xl bg-white p-4">
          {quizFinished ? (
            <div className="py-6 text-center">
              <h2 className="mb-2 text-2xl font-bold text-blue-700">
                انتهى الاختبار!
              </h2>
              <p className="text-lg font-semibold text-gray-700">
                نتيجتك هي: {score} من {quizQuestions.length}
              </p>
              <p
                className={`mt-2 font-bold ${score! >= Math.ceil(quizQuestions.length / 2) ? "text-green-600" : "text-red-600"}`}
              >
                {score! >= Math.ceil(quizQuestions.length / 2)
                  ? "🎉 مبروك، لقد نجحت!"
                  : "❌ عذراً، لم تنجح في الاختبار"}
              </p>
              <button
                onClick={() => setShowModal(false)}
                className="mt-4 rounded-lg bg-blue-700 px-6 py-2 font-bold text-white"
              >
                إغلاق
              </button>
            </div>
          ) : (
            <>
              {Questionsdata.map((item) => (
                <div key={item.id} className="">
                  <p className="lg:text-md mb-3 font-bold">
                    {item.id}. {item.question}
                  </p>
                  <div className="mt-2">
                    {item.options.map((option, optionIndex) => (
                      <div
                        key={optionIndex}
                        onClick={() => handleSelect(item.id, optionIndex)}
                        className={`mb-3 flex w-full cursor-pointer items-center rounded-lg border px-3 py-2 transition-colors duration-300 ${
                          selectedOptions[item.id] === optionIndex
                            ? "bg-blue-600 text-white"
                            : "border-gray-300 bg-white text-black"
                        }`}
                      >
                        <p>{option}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              <button
                onClick={handleFinishQuiz}
                className="mt-4 w-full cursor-pointer rounded-lg bg-green-600 py-2 font-bold text-white transition-colors hover:bg-green-700"
              >
                إرسال الاختبار
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
