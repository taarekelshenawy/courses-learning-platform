"use client";

import Image from "next/image";
import Curriculum_icon from "../../components/images/cv.png";
import comment_icon from "../../components/images/speech-bubble.png";
import Ask_question from "../../components/images/question-mark.png";
import leaderboard from "../../components/images/podium.png";
import CourseMaterial from "./CourseMaterial";
import Topics from "./Topics";
import { Comments } from "./Comments";
import { coursesData } from "@/data/coursesData";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

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

export default function CourseDetails() {
  const [course, setCourse] = useState<Course[]>([]);
  const { courseId } = useParams();

  const [videoUpdated, setVideoUpdated] = useState("");

  useEffect(() => {
    const courseInfo = coursesData.filter((item) => item.id === courseId);
    setCourse(courseInfo);
  }, [courseId]);



  return (
    <>
      <div className="flex gap-10 max-sm:mt-24 max-sm:flex-col sm:flex-col lg:flex-row">
        <div>
          <div className="top-0 max-sm:sticky">
            <iframe
            key={videoUpdated ? videoUpdated : course[0]?.weeks[0]?.items[0]?.videoUrl}
              className="w-full max-sm:h-64"
              height="410"
              src={
                videoUpdated
                  ? videoUpdated
                  : course[0]?.weeks[0]?.items[0]?.videoUrl
              }
              title="Frontend Performance - #1 Introduction بالعربي"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>

          <div className="mt-4 px-8">
            <ul className="flex items-center gap-3">
              <li>
                <Image
                  className="h-12 w-12 cursor-pointer rounded-full p-2 hover:border-2 hover:bg-gray-400"
                  src={Curriculum_icon}
                  alt="curriculum icon"
                />
              </li>

              <li>
                <Image
                  className="h-12 w-12 cursor-pointer rounded-full p-2 hover:border-2 hover:bg-gray-400"
                  src={comment_icon}
                  alt="comment icon"
                />
              </li>

              <li>
                <Image
                  className="h-12 w-12 cursor-pointer rounded-full p-2 hover:border-2 hover:bg-gray-400"
                  src={Ask_question}
                  alt="ask question"
                />
              </li>

              <li>
                <Image
                  className="h-12 w-12 cursor-pointer rounded-full p-2 hover:border-2 hover:bg-gray-400"
                  src={leaderboard}
                  alt="leaderboard"
                />
              </li>
            </ul>
          </div>

          <CourseMaterial />
          <div className="mt-5 block px-2 lg:hidden">
            <Topics weeksInfo={course[0]?.weeks} setVideo={setVideoUpdated}  course={course} setCourse={setCourse} />
          </div>
          <Comments />
        </div>
        <div className="hidden px-2 lg:block">
          <Topics weeksInfo={course[0]?.weeks} setVideo={setVideoUpdated} course={course} setCourse={setCourse} />
        </div>
      </div>
    </>
  );
}
