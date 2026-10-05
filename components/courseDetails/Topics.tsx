import React, { useState } from "react";
import { GiDialPadlock } from "react-icons/gi";
import { LuStickyNote } from "react-icons/lu";
import QuestionModal from "./QuestionModal";

export type ItemType = "lesson" | "pdf" | "exam";

export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface WeekItem {
  id: string;
  type: ItemType;
  title: string;
  duration?: string;
  videoUrl?: string;
  fileSize?: string;
  downloadUrl?: string;
  completed?: boolean;
  questions?: Question[];
}

export interface Week {
  weekNumber: number;
  title: string;
  items: WeekItem[];
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Course {
  id: string;
  title: string;
  instructor: string;
  thumbnail: string;
  progress: number;
  overviewVideoUrl: string;
  description: string;
  weeks: Week[];
  faqs: FAQ[];
}

interface TopicsProps {
  weeksInfo: Week[];
  setVideo: (url: string) => void;
}
export default function Topics({ weeksInfo, setVideo }: TopicsProps) {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      {/* عنوان القسم */}
      <div className="mb-16">
        <h1 className="text-xl font-bold">Topics for this course</h1>
      </div>

      {/* شريط التقدم (ثابت كمظهر) */}
      <div className="mb-6 h-2 w-full rounded-full bg-gray-200">
        <div className="h-2 w-1/3 rounded-full bg-green-500"></div>
      </div>

      {/* عرض الأسابيع والدروس */}
      {weeksInfo?.map((week) => (
        <div
          key={week.title}
          className="mt-3 mb-6 rounded-xl border border-gray-300 p-5 shadow-sm"
        >
          <div className="mb-3">
            <p className="text-2xl font-bold">Week {week.title}</p>
            <p className="text-sm text-gray-400">this is week</p>
          </div>
          <hr className="text-gray-300" />

          <div className="text-gray-600">
            {week.items.map((lesson: WeekItem) => (
              <div key={lesson.id}>
                <div className="mt-3 mb-2 flex items-center justify-between rounded-lg p-2 transition-colors hover:bg-gray-100">
                  {/* عنوان الدرس مع الأيقونة */}
                  <div className="flex items-center gap-2">
                    <LuStickyNote className="text-gray-500" />
                    <span
                      className="cursor-pointer text-sm font-medium"
                      onClick={() => setVideo(lesson.videoUrl || "")}
                    >
                      {lesson.title}
                    </span>
                  </div>

                  {/* الـ Badges (أسئلة ووقته) أو القفل */}
                  {lesson.questions ? (
                    <div
                      className="flex gap-2"
                      onClick={() => setOpenModal(true)}
                    >
                      <span className="cursor-pointer rounded bg-green-100 px-2 py-1 text-xs font-semibold text-green-700">
                        {lesson?.questions.length} Question
                      </span>
                      <span className="rounded bg-red-100 px-2 py-1 text-xs font-semibold text-red-700">
                        10 Minutes
                      </span>
                    </div>
                  ) : (
                    <GiDialPadlock className="text-lg text-gray-400" />
                  )}
                </div>
                <hr className="text-gray-200" />
              </div>
            ))}
          </div>

          {openModal ? <QuestionModal setShowModal={setOpenModal} /> : ""}
        </div>
      ))}
    </div>
  );
}
