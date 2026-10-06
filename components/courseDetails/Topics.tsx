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
  pagenumber: number;
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
  course: Course[];
  setCourse: React.Dispatch<React.SetStateAction<Course[]>>;
}

export default function Topics({ weeksInfo, setVideo, course, setCourse }: TopicsProps) {
  const [openModal, setOpenModal] = useState(false);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [activeQuizWeek, setActiveQuizWeek] = useState<number>(1);


  const handleQuizComplete = (weekNumber: number, passed: boolean) => {
const currentCourse = course?.[0];
    if (passed) {
   
  const updatedWeeks = course?.[0]?.weeks.map((week) => {
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

      const totalWeeks = updatedWeeks.length;
   
      const completedExamsCount = updatedWeeks.filter((week) =>
        week.items.some((item) => item.type === "exam" && item.completed)
      ).length;

      const newProgress = Math.round((completedExamsCount / totalWeeks) * 100);

    
     setCourse([
      {
        ...currentCourse,
        weeks: updatedWeeks,
        progress: newProgress,
      },
    ]);
    }
  };

  return (
    <div>
      {/* عنوان القسم */}
      <div className="mb-16">
        <h1 className="text-xl font-bold">Topics for this course</h1>
      </div>

      {/* شريط التقدم الديناميكي الحقيقي */}
      <div className="mb-2 flex justify-between text-sm font-semibold text-gray-600">
        <span>Course Progress</span>
        <span>{course[0]?.progress}%</span>
      </div>
      <div className="mb-6 h-2 w-full rounded-full bg-gray-200">
        <div 
          className="h-2 rounded-full bg-green-500 transition-all duration-300"
          style={{ width: `${course[0]?.progress}%` }}
        ></div>
      </div>

      {/* عرض الأسابيع والدروس */}
      {weeksInfo?.map((week) => (
        <div
          key={week.weekNumber}
          className="mt-3 mb-6 rounded-xl border border-gray-300 p-5 shadow-sm"
        >
          <div className="mb-3">
            <p className="text-2xl font-bold">Week {week.weekNumber}: {week.title}</p>
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

                  {/* الـ Badges للأسئلة أو القفل */}
                  {lesson.questions ? (
                    <div
                      className="flex gap-2"
                      onClick={() => {
                        setOpenModal(true);
                        setQuestions(lesson.questions || []);
                        setActiveQuizWeek(week.weekNumber); // حفظ رقم الأسبوع الحالي للاختبار
                      }}
                    >
                      <span className="cursor-pointer rounded bg-green-100 px-2 py-1 text-xs font-semibold text-green-700">
                        {lesson.questions.length} Question
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

// import React, { useState } from "react";
// import { GiDialPadlock } from "react-icons/gi";
// import { LuStickyNote } from "react-icons/lu";
// import QuestionModal from "./QuestionModal";

// export type ItemType = "lesson" | "pdf" | "exam";

// export interface Question {
//   id: number;
//   question: string;
//   options: string[];
//   correctAnswer: number;
//   pagenumber: number;
// }

// export interface WeekItem {
//   id: string;
//   type: ItemType;
//   title: string;
//   duration?: string;
//   videoUrl?: string;
//   fileSize?: string;
//   downloadUrl?: string;
//   completed?: boolean;
//   questions?: Question[];
// }

// export interface Week {
//   weekNumber: number;
//   title: string;
//   items: WeekItem[];
// }

// export interface FAQ {
//   question: string;
//   answer: string;
// }

// export interface Course {
//   id: string;
//   title: string;
//   instructor: string;
//   thumbnail: string;
//   progress: number;
//   overviewVideoUrl: string;
//   description: string;
//   weeks: Week[];
//   faqs: FAQ[];
// }

// interface TopicsProps {
//   weeksInfo: Week[];
//   setVideo: (url: string) => void;
// }
// export default function Topics({ weeksInfo, setVideo }: TopicsProps) {
//   const [openModal, setOpenModal] = useState(false);
//   const [questions, setQuestions] = useState<Question[]>([]);

//   const [course, setCourse] = useState<Course>(initialCourse);
//   const [activeQuizWeek, setActiveQuizWeek] = useState<number>(1);
//   const [currentQuizQuestions, setCurrentQuizQuestions] = useState([]);

//   const handleQuizComplete = (weekNumber: number, passed: boolean) => {
//     if (passed) {
//       // 1. تحديث حالة الأسبوع ليصبح الامتحات فيه مكتمل (completed: true)
//       const updatedWeeks = course.weeks.map((week) => {
//         if (week.weekNumber === weekNumber) {
//           return {
//             ...week,
//             items: week.items.map((item) =>
//               item.type === "exam" ? { ...item, completed: true } : item
//             ),
//           };
//         }
//         return week;
//       });

//       // 2. حساب نسبة الـ Progress الجديدة بناءً على عدد الأسابيع التي تم اجتياز امتحاناتها
//       const totalWeeks = updatedWeeks.length;
//       const completedExamsCount = updatedWeeks.filter((week) =>
//         week.items.some((item) => item.type === "exam" && item.completed)
//       ).length;

//       const newProgress = Math.round((completedExamsCount / totalWeeks) * 100);

//       // 3. تحديث الكورس بالكامل بالقيم الجديدة
//       setCourse({
//         ...course,
//         weeks: updatedWeeks,
//         progress: newProgress,
//       });
//     }
//   };
//   return (
//     <div>
//       {/* عنوان القسم */}
//       <div className="mb-16">
//         <h1 className="text-xl font-bold">Topics for this course</h1>
//       </div>

//       {/* شريط التقدم (ثابت كمظهر) */}
//       <div className="mb-6 h-2 w-full rounded-full bg-gray-200">
//         <div className="h-2 w-1/3 rounded-full bg-green-500"></div>
//       </div>

//       {/* عرض الأسابيع والدروس */}
//       {weeksInfo?.map((week) => (
//         <div
//           key={week.title}
//           className="mt-3 mb-6 rounded-xl border border-gray-300 p-5 shadow-sm"
//         >
//           <div className="mb-3">
//             <p className="text-2xl font-bold">Week {week.title}</p>
//             <p className="text-sm text-gray-400">this is week</p>
//           </div>
//           <hr className="text-gray-300" />

//           <div className="text-gray-600">
//             {week.items.map((lesson: WeekItem) => (
//               <div key={lesson.id}>
//                 <div className="mt-3 mb-2 flex items-center justify-between rounded-lg p-2 transition-colors hover:bg-gray-100">
//                   {/* عنوان الدرس مع الأيقونة */}
//                   <div className="flex items-center gap-2">
//                     <LuStickyNote className="text-gray-500" />
//                     <span
//                       className="cursor-pointer text-sm font-medium"
//                       onClick={() => setVideo(lesson.videoUrl || "")}
//                     >
//                       {lesson.title}
//                     </span>
//                   </div>

//                   {/* الـ Badges (أسئلة ووقته) أو القفل */}
//                   {lesson.questions ? (
//                     <div
//                       className="flex gap-2"
//                       onClick={() => (
//                         setOpenModal(true),
//                         setQuestions(lesson.questions || [])
//                       )}
//                     >
//                       <span className="cursor-pointer rounded bg-green-100 px-2 py-1 text-xs font-semibold text-green-700">
//                         {lesson?.questions.length} Question
//                       </span>
//                       <span className="rounded bg-red-100 px-2 py-1 text-xs font-semibold text-red-700">
//                         10 Minutes
//                       </span>
//                     </div>
//                   ) : (
//                     <GiDialPadlock className="text-lg text-gray-400" />
//                   )}
//                 </div>
//                 <hr className="text-gray-200" />
//               </div>
//             ))}
//           </div>

//           {openModal ? (
//             <QuestionModal
//               setShowModal={setOpenModal}
//               quizQuestions={questions}
//             />
//           ) : (
//             ""
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }
