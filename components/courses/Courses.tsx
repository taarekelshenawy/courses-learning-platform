import Link from "next/link";
import Image from "next/image";
import { coursesData } from "@/data/coursesData";

export default function Courses() {
  return (
    <>
      <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-3">
        {coursesData.map((course) => {
          return (
            <div
              key={course.id}
              className="group overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-all hover:shadow-md"
            >
              {/* 1. Thumbnail */}
              <Link href={`/courses/${course.id}`}>
                <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                  <Image
                    width={500}
                    height={500}
                    src={course.thumbnail}
                    alt={course.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </Link>

              <div className="p-5">
                {/* 2. Title */}
                <Link href={`/courses/${course.id}`}>
                  <h3 className="mb-1 line-clamp-1 text-lg font-bold text-gray-900 transition-colors hover:text-blue-600">
                    {course.title}
                  </h3>
                </Link>

                {/* 3. Instructor */}
                <p className="mb-3 text-sm text-gray-500">
                  By {course.instructor}
                </p>

                {/* 4. Description */}
                <p className="mb-4 line-clamp-2 text-xs text-gray-600">
                  {course.description}
                </p>

                {/* 5. Progress Bar */}
                <div className="mb-4">
                  <div className="mb-1 flex justify-between text-xs font-medium text-gray-600">
                    <span>Progress</span>
                    <span>{course.progress}%</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-gray-100">
                    <div
                      className="h-full rounded-full bg-blue-600 transition-all duration-500"
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                </div>

                {/* 6. Action Button */}
                <Link
                  href={`/courses/${course.id}`}
                  className="block w-full rounded-lg bg-blue-600 px-4 py-2 text-center text-sm font-medium text-white transition-colors hover:bg-blue-700"
                >
                  View Course
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
