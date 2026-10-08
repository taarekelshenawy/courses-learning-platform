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
import AskQuestionModal from "./AskQuesitonModal";
import LeaderboardModal from "./LeaderboardModal";
import { Course, Comment } from "@/types/courseTypes";

export default function CourseDetails() {
  const [course, setCourse] = useState<Course[]>([]);
  const { courseId } = useParams();
  const [currentComments, setCurrentComments] = useState(
    course[0]?.weeks[0]?.items[0]?.comments || []
  );

  const [openQuestionModal, setOpenQuestionModal] = useState(false);
  const [openLeaderboardModal, setOpenLeaderboardModal] = useState(false);

  const [videoUpdated, setVideoUpdated] = useState("");

  useEffect(() => {
    const courseInfo = coursesData.filter((item) => item.id === courseId);
    setCourse(courseInfo);
  }, [courseId]);

  const handleAddCommentToLesson = (newComment: Comment) => {
    setCurrentComments((prevComments) => [...prevComments, newComment]);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <div className="flex w-full gap-10 max-sm:mt-24 max-sm:flex-col sm:flex-col lg:flex-row">
        <div className="flex-2">
          <div className="top-0 max-sm:sticky">
            <iframe
              key={videoUpdated ? videoUpdated : course[0]?.overviewVideoUrl}
              className="w-full max-sm:h-64"
              height="410"
              src={videoUpdated ? videoUpdated : course[0]?.overviewVideoUrl}
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
                  onClick={() => scrollToSection("curriculum-section")}
                  className="h-12 w-12 cursor-pointer rounded-full p-2 hover:border-2 hover:bg-gray-400"
                  src={Curriculum_icon}
                  alt="curriculum icon"
                />
              </li>

              <li>
                <Image
                  onClick={() => scrollToSection("comments-section")}
                  className="h-12 w-12 cursor-pointer rounded-full p-2 hover:border-2 hover:bg-gray-400"
                  src={comment_icon}
                  alt="comment icon"
                />
              </li>

              <li>
                <Image
                  onClick={() => setOpenQuestionModal(true)}
                  className="h-12 w-12 cursor-pointer rounded-full p-2 hover:border-2 hover:bg-gray-400"
                  src={Ask_question}
                  alt="ask question"
                />
              </li>

              <li>
                <Image
                  onClick={() => setOpenLeaderboardModal(true)}
                  className="h-12 w-12 cursor-pointer rounded-full p-2 hover:border-2 hover:bg-gray-400"
                  src={leaderboard}
                  alt="leaderboard"
                />
              </li>
            </ul>
          </div>

          <CourseMaterial />

          <div id="curriculum-section" className="mt-5 block px-2 lg:hidden">
            <Topics
              weeksInfo={course[0]?.weeks}
              setVideo={setVideoUpdated}
              course={course}
              setCourse={setCourse}
              setCurrentComments={setCurrentComments}
            />
          </div>

          <div id="comments-section">
            <Comments
              commentsData={currentComments}
              onAddComment={handleAddCommentToLesson}
            />
          </div>
        </div>

        <div id="curriculum-section-lg" className="hidden flex-1 px-2 lg:block">
          <Topics
            weeksInfo={course[0]?.weeks}
            setVideo={setVideoUpdated}
            course={course}
            setCourse={setCourse}
            setCurrentComments={setCurrentComments}
          />
        </div>
        {openQuestionModal ? (
          <AskQuestionModal
            showModal={openQuestionModal}
            setShowModal={setOpenQuestionModal}
          />
        ) : (
          ""
        )}
        {openLeaderboardModal ? (
          <LeaderboardModal
            open={openLeaderboardModal}
            setOpen={setOpenLeaderboardModal}
          />
        ) : (
          ""
        )}
      </div>
    </>
  );
}
