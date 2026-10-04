import React from "react";
import { GiDialPadlock } from "react-icons/gi";
import { LuStickyNote } from "react-icons/lu";

export default function Topics() {
  // بيانات تجريبية ثابتة للعرض فقط
  const weeks = [
    {
      weekNumber: 1,
      description: "Advanced storytelling techniques for writers: Personas, Characters & Plots",
      lessons: [
        { id: 1, title: "Introduction", hasMeta: false },
        { id: 2, title: "Course Review", hasMeta: false },
        { id: 3, title: "Course Review", hasMeta: true }, // دي اللي عليها تفاصيل الأسئلة والوقت
        { id: 4, title: "Course Exercise / Reference Files", hasMeta: false },
        { id: 5, title: "Code Editor Installation", hasMeta: false },
      ],
    },
    {
      weekNumber: 2,
      description: "Core programming concepts and syntax fundamentals",
      lessons: [
        { id: 6, title: "Defining Functions", hasMeta: false },
        { id: 7, title: "Function Parameters", hasMeta: false },
        { id: 8, title: "Return values from function", hasMeta: true },
        { id: 9, title: "Global variable and Scope", hasMeta: false },
        { id: 10, title: "Newer way of creating a Constant", hasMeta: false },
      ],
    },
  ];

  return (
    <div >
      {/* عنوان القسم */}
      <div className="mb-16">
        <h1 className="font-bold text-xl">Topics for this course</h1>
      </div>

      {/* شريط التقدم (ثابت كمظهر) */}
      <div className="w-full bg-gray-200 h-2 rounded-full mb-6">
        <div className="bg-green-500 h-2 rounded-full w-1/3"></div>
      </div>

      {/* عرض الأسابيع والدروس */}
      {weeks.map((week) => (
        <div
          key={week.weekNumber}
          className="mt-3 border border-gray-300 p-5 rounded-xl shadow-sm mb-6"
        >
          <div className="mb-3">
            <p className="font-bold text-2xl">Week {week.weekNumber}</p>
            <p className="text-gray-400 text-sm">{week.description}</p>
          </div>
          <hr className="text-gray-300" />

          <div className="text-gray-600">
            {week.lessons.map((lesson, i) => (
              <div key={lesson.id}>
                <div className="flex justify-between items-center mt-3 mb-2 p-2 rounded-lg hover:bg-gray-100 transition-colors">
                  
                  {/* عنوان الدرس مع الأيقونة */}
                  <div className="flex items-center gap-2">
                    <LuStickyNote className="text-gray-500" />
                    <span className="text-sm font-medium">{lesson.title}</span>
                  </div>

                  {/* الـ Badges (أسئلة ووقته) أو القفل */}
                  {lesson.hasMeta ? (
                    <div className="flex gap-2">
                      <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-semibold cursor-pointer">
                        0 Question
                      </span>
                      <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-xs font-semibold">
                        10 Minutes
                      </span>
                    </div>
                  ) : (
                    <GiDialPadlock className="text-gray-400 text-lg" />
                  )}

                </div>
                <hr className="text-gray-200" />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}