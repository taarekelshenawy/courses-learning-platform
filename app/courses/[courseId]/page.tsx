import CoursePlayer from "@/components/courseDetails/CoursePlayer";
import BreadCrumb from "@/shared/BreadCrumb";
import Topics from "@/components/courseDetails/Topics";
export default function page() {
  return (
    <div>
      <div className="bg-custom-bg px-5 py-3 max-sm:fixed top-0  w-full max-sm:h-28 ">
        <BreadCrumb
          breadcrumbData={[
            { title: "Home", label: "/" },
            { title: "Courses", label: "/" },
            { title: "Course Details", label: "" },
          ]}
        />
        <div className="mt-4">
          <h1 className="text-3xl font-bold max-sm:text-xl">
            Modern React.js Frontend Development
          </h1>
        </div>
      </div>
      <main className="mt-6 mx-6 max-sm:mx-0 flex lg:flex-row gap-10 px-2  max-sm:flex-col sm:flex-col">
        <CoursePlayer />
           <div className="hidden md:block  ">
            <Topics />
          </div>  
      </main>
    </div>
  );
}
