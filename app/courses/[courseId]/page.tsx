import CourseDetails from "@/components/courseDetails/CourseDetails";
import BreadCrumb from "@/shared/BreadCrumb";
import { coursesData } from "@/data/coursesData";

export default async function page({
  params,
}: {
  params: { courseId: string };
}) {
  
  const resolvedParams = await params;
  const courseId = resolvedParams?.courseId;

 
  const currentCourse =
    coursesData.find((c) => c.id === courseId) || coursesData[0];
  return (
    <div>
      <div className="bg-custom-bg top-0 w-full px-5 py-3 max-sm:fixed max-sm:h-28">
        <BreadCrumb
          breadcrumbData={[
            { title: "Home", label: "/" },
            { title: "Courses", label: "/" },
            { title: "Course Details", label: "" },
          ]}
        />
        <div className="mt-4">
          <h1 className="text-3xl font-bold max-sm:text-xl">
            {currentCourse.title}
          </h1>
        </div>
      </div>
      <main className="mx-6 mt-6 flex gap-10 max-sm:mx-0 max-sm:flex-col sm:flex-col lg:flex-row">
        <CourseDetails />
      </main>
    </div>
  );
}
