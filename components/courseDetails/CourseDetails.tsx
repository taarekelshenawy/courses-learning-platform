import Image from "next/image";
import Curriculum_icon from "../../components/images/cv.png";
import comment_icon from "../../components/images/speech-bubble.png";
import Ask_question from "../../components/images/question-mark.png";
import leaderboard from "../../components/images/podium.png";
import CourseMaterial from "./CourseMaterial";
import Topics from "./Topics";
import { Comments } from "./Comments";

export default function CourseDetails() {
  return (
    <>
      <div className="flex gap-10 max-sm:mt-24 max-sm:flex-col sm:flex-col lg:flex-row">
        <div>
          <div className="top-0 max-sm:sticky">
            <iframe
              className="w-full max-sm:h-64"
              height="410"
              src="https://www.youtube.com/embed/WYSt5e7fLWU"
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
            <Topics />
          </div>
          <Comments />
        </div>
        <div className="hidden px-2 lg:block">
          <Topics />
        </div>
      </div>
    </>
  );
}
