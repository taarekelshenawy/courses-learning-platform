import Link from "next/link";
import Image from "next/image";

export default function Courses() {

  const course = {
    id: "1",
    title: "Next.js 15 & React Complete Masterclass",
    instructor: "Eng. Tarek",
    thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=600&auto=format&fit=crop",
    progress: 45,
    description: "Learn modern web development from scratch, build production-ready full-stack applications with App Router and TypeScript.",
  };

  return (
    <>
    <div className="grid  gap-7 md:grid-cols-3 sm:grid-cols-2">
            <div className="group overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-all hover:shadow-md">
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
          <h3 className="mb-1 text-lg font-bold text-gray-900 transition-colors hover:text-blue-600 line-clamp-1">
            {course.title}
          </h3>
        </Link>

        {/* 3. Instructor */}
        <p className="mb-3 text-sm text-gray-500">By {course.instructor}</p>

        {/* 4. Description */}
        <p className="mb-4 text-xs text-gray-600 line-clamp-2">
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
             <div className="group overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-all hover:shadow-md">
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
          <h3 className="mb-1 text-lg font-bold text-gray-900 transition-colors hover:text-blue-600 line-clamp-1">
            {course.title}
          </h3>
        </Link>

        {/* 3. Instructor */}
        <p className="mb-3 text-sm text-gray-500">By {course.instructor}</p>

        {/* 4. Description */}
        <p className="mb-4 text-xs text-gray-600 line-clamp-2">
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
             <div className="group overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-all hover:shadow-md">
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
          <h3 className="mb-1 text-lg font-bold text-gray-900 transition-colors hover:text-blue-600 line-clamp-1">
            {course.title}
          </h3>
        </Link>

        {/* 3. Instructor */}
        <p className="mb-3 text-sm text-gray-500">By {course.instructor}</p>

        {/* 4. Description */}
        <p className="mb-4 text-xs text-gray-600 line-clamp-2">
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

    </div>
  
    </>
  
  );
  
  
}
