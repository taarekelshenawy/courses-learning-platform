import Image from "next/image";
import dur_icon from "../../components/images/clock.png";
import lesson_icon from "../../components/images/study.png";
import enrolled_icon from "../../components/images/license.png";
import languages_icon from "../../components/images/language.png";

export default function CourseMaterial() {
  return (
    <div className="Coursematerial mt-10 w-full px-5">
      <div>
        <h1 className="text-3xl font-bold">Course Materials</h1>
      </div>

      <div className="mt-4 flex flex-wrap gap-10 border border-white bg-white p-5 shadow-[0_0_10px_rgba(0,0,0,0.1)]">
        {/* First Column */}

        <div className="mt-8 flex-1 basis-[45%]">
          <div className="flex flex-col font-bold text-gray-500">
            <div className="flex justify-between">
              <p className="mb-3 flex items-center gap-2">
                <Image src={dur_icon} alt="duration_icon" width={20} />
                Duration
              </p>
              <p>3 week</p>
            </div>
            <hr className="text-gray-400" />

            <div className="mt-3 flex justify-between gap-8">
              <p className="mb-3 flex items-center gap-2">
                <Image src={lesson_icon} alt="lesson_icon" width={20} />
                Lessons
              </p>
              <p>8</p>
            </div>
            <hr className="text-gray-400" />

            <div className="mt-3 flex justify-between gap-8">
              <p className="mb-3 flex items-center gap-2">
                <Image src={enrolled_icon} alt="enrolled_icon" width={20} />
                Enrolled
              </p>
              <p>65 Student</p>
            </div>
            <hr className="text-gray-400" />

            <div className="mt-3 flex justify-between gap-8">
              <p className="mb-3 flex items-center gap-2">
                <Image src={languages_icon} alt="language_icon" width={20} />
                Languages
              </p>
              <p>English</p>
            </div>
            <hr className="text-gray-400" />
          </div>
        </div>
      </div>
    </div>
  );
}
