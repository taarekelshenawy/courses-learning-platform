import { Week } from "@/types/courseTypes";
import { Course } from "@/types/courseTypes";
import { Dispatch, SetStateAction } from "react";

export const updateCourseProgress = (
  course: Course[],
  setCourse: Dispatch<SetStateAction<Course[]>>,
  updaterFn: (week: Week) => Week
) => {
  const currentCourse = course?.[0];
  if (!currentCourse) return;

  const updatedWeeks =
    currentCourse.weeks?.map((week: Week) => updaterFn(week)) || [];

  // حساب العدادات
  let totalItemsCount = 0;
  let completedItemsCount = 0;

  updatedWeeks.forEach((week: Week) => {
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

  // تحديث الحالة العامة
  setCourse([
    {
      ...currentCourse,
      weeks: updatedWeeks,
      progress: newProgress,
    },
  ]);
};
