import React, { useState } from "react";
import { GiDialPadlock } from "react-icons/gi";
import { LuStickyNote } from "react-icons/lu";
import QuestionModal from "./QuestionModal";
import { Course, Week, Question, WeekItem, Comment } from "@/types/courseTypes";

interface TopicsProps {
  weeksInfo: Week[];
  setVideo: (url: string) => void;
  course: Course[];
  setCourse: React.Dispatch<React.SetStateAction<Course[]>>;
  setCurrentComments: React.Dispatch<React.SetStateAction<Comment[]>>;
}

export default function Topics({
  weeksInfo,
  setVideo,
  course,
  setCourse,
  setCurrentComments,
}: TopicsProps) {
  const [openModal, setOpenModal] = useState(false);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [activeQuizWeek, setActiveQuizWeek] = useState<number>(1);
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  const handleQuizComplete = (weekNumber: number, passed: boolean) => {
    if (!passed) return;

    const currentCourse = course?.[0];
    if (!currentCourse) return;

    const updatedWeeks =
      currentCourse.weeks?.map((week) => {
        if (week.weekNumber === weekNumber) {
          return {
            ...week,
            items: week.items.map((item) =>
              item.type === "exam" ? { ...item, completed: true } : item
            ),
          };
        }
        return week;
      }) || [];

    let totalItemsCount = 0;
    let completedItemsCount = 0;

    updatedWeeks.forEach((week) => {
      week.items.forEach((item) => {
        totalItemsCount += 1;
        if (item.completed) {
          completedItemsCount += 1;
        }
      });
    });

    const newProgress =
      totalItemsCount > 0
        ? Math.round((completedItemsCount / totalItemsCount) * 100)
        : 0;

    setCourse([
      {
        ...currentCourse,
        weeks: updatedWeeks,
        progress: newProgress,
      },
    ]);
  };

  const handleVideoClick = (
    weekNumber: number,
    itemId: string,
    videoUrl?: string,
    comments?: Comment[]
  ) => {
    if (videoUrl) {
      setVideo(videoUrl);
      setActiveVideoId(itemId);
      setCurrentComments(comments || []);
    }

    const currentCourse = course?.[0];
    if (!currentCourse) return;

    const updatedWeeks =
      currentCourse.weeks?.map((week) => {
        if (week.weekNumber === weekNumber) {
          return {
            ...week,
            items: week.items.map((item) =>
              item.id === itemId ? { ...item, completed: true } : item
            ),
          };
        }
        return week;
      }) || [];

    let totalItemsCount = 0;
    let completedItemsCount = 0;

    updatedWeeks.forEach((week) => {
      week.items.forEach((item) => {
        totalItemsCount += 1;
        if (item.completed) {
          completedItemsCount += 1;
        }
      });
    });

    const newProgress =
      totalItemsCount > 0
        ? Math.round((completedItemsCount / totalItemsCount) * 100)
        : 0;

    setCourse([
      {
        ...currentCourse,
        weeks: updatedWeeks,
        progress: newProgress,
      },
    ]);
  };

  return (
    <div>
      <div className="mb-16">
        <h1 className="text-xl font-bold">Topics for this course</h1>
      </div>

      <div className="mb-2 flex justify-between text-sm font-semibold text-gray-600">
        <span>Course Progress</span>
        <span>{course[0]?.progress || 0}%</span>
      </div>
      <div className="mb-6 h-2 w-full rounded-full bg-gray-200">
        <div
          className="h-2 rounded-full bg-green-500 transition-all duration-300"
          style={{ width: `${course[0]?.progress || 0}%` }}
        ></div>
      </div>

      {weeksInfo?.map((week) => (
        <div
          key={week.weekNumber}
          className="mt-3 mb-6 rounded-xl border border-gray-300 p-5 shadow-sm"
        >
          <div className="mb-3">
            <p className="text-2xl font-bold">
              Week {week.weekNumber}: {week.title}
            </p>
            <p className="text-sm text-gray-400">this is week</p>
          </div>
          <hr className="text-gray-300" />

          <div className="text-gray-600">
            {week.items.map((lesson: WeekItem) => {
              const currentItemState = course?.[0]?.weeks
                ?.find((w) => w.weekNumber === week.weekNumber)
                ?.items?.find((i) => i.id === lesson.id);

              const isCompleted = currentItemState?.completed;
              const isPlaying = activeVideoId === lesson.id;

              return (
                <div key={lesson.id}>
                  <div className="mt-3 mb-2 flex items-center justify-between rounded-lg p-2 transition-colors hover:bg-gray-100">
                    {lesson.type === "pdf" ? (
                      <div className="flex w-full items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-xl">📄</span>
                          <div>
                            <span className="block text-sm font-medium text-gray-800">
                              {lesson.title}
                            </span>
                            {lesson.fileSize && (
                              <span className="text-xs text-gray-400">
                                {lesson.fileSize}
                              </span>
                            )}
                          </div>
                        </div>

                        <a
                          href={lesson.downloadUrl}
                          download
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 rounded-lg bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-600 transition hover:bg-blue-100"
                        >
                          📥 تحميل PDF
                        </a>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <LuStickyNote className="text-gray-500" />
                        <span
                          className="cursor-pointer text-sm font-medium"
                          onClick={() =>
                            handleVideoClick(
                              week.weekNumber,
                              lesson.id,
                              lesson.videoUrl,
                              lesson.comments
                            )
                          }
                        >
                          {lesson.title}
                        </span>
                      </div>
                    )}

                    {lesson.type !== "pdf" && (
                      <div>
                        {lesson.questions ? (
                          <div
                            className="flex gap-2"
                            onClick={() => {
                              setOpenModal(true);
                              setQuestions(lesson.questions || []);
                              setActiveQuizWeek(week.weekNumber);
                            }}
                          >
                            <span className="cursor-pointer rounded bg-green-100 px-2 py-1 text-xs font-semibold text-green-700">
                              {lesson.questions.length} Question
                            </span>
                            <span className="rounded bg-red-100 px-2 py-1 text-xs font-semibold text-red-700">
                              10 Minutes
                            </span>
                          </div>
                        ) : isPlaying ? (
                          <span className="text-xs font-bold text-blue-600">
                            ▶ Playing
                          </span>
                        ) : isCompleted ? (
                          <span className="text-lg text-green-600">✅</span>
                        ) : (
                          <GiDialPadlock className="text-lg text-gray-400" />
                        )}
                      </div>
                    )}
                  </div>
                  <hr className="text-gray-200" />
                </div>
              );
            })}
          </div>

          {openModal && (
            <QuestionModal
              setShowModal={setOpenModal}
              quizQuestions={questions}
              weekNumber={activeQuizWeek}
              onQuizComplete={handleQuizComplete}
            />
          )}
        </div>
      ))}
    </div>
  );
}
