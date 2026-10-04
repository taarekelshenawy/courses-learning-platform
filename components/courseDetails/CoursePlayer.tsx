import Image from "next/image"
import Curriculum_icon from "../../components/images/cv.png";
import comment_icon from "../../components/images/speech-bubble.png";
import Ask_question from "../../components/images/question-mark.png";
import leaderboard from "../../components/images/podium.png";
import CourseMaterial from "./CourseMaterial";
import Topics from "./Topics";
import { Comments } from "./Comments";

export default function CoursePlayer() {
  return (
    <>
      <div className="flex lg:flex-row gap-10  max-sm:flex-col sm:flex-col max-sm:mt-24">
        <div >
                 <div className="max-sm:sticky top-28">
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

        <div className="px-8 mt-4">
          <ul className="flex gap-3 items-center">
            <li>
              <Image
                className="w-12 h-12 rounded-full p-2 hover:bg-gray-400 hover:border-2 cursor-pointer"
                src={Curriculum_icon}
                alt="curriculum icon"
              />
            </li>

            <li>
              <Image
                className="w-12 h-12 rounded-full p-2 hover:bg-gray-400 hover:border-2 cursor-pointer"
                src={comment_icon}
                alt="comment icon"
              />
            </li>

            <li>
              <Image
                className="w-12 h-12 rounded-full p-2 hover:bg-gray-400 hover:border-2 cursor-pointer"
                src={Ask_question}
                alt="ask question"
              />
            </li>

            <li>
              <Image
                className="w-12 h-12 rounded-full p-2 hover:bg-gray-400 hover:border-2 cursor-pointer"
                src={leaderboard}
                alt="leaderboard"
              />
            </li>
          </ul>
        </div>

        <CourseMaterial/>
           <div className="block md:hidden mt-5 ">
        <Topics />
      </div>
      <Comments />
      

        </div>

       
   
        
      </div>
    </>
  );
}

