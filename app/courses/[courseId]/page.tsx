import CourseDetails from "@/components/courseDetails/CourseDetails";
import BreadCrumb from "@/shared/BreadCrumb";
export default function page() {
  return (
    <div>
      <div className="bg-custom-bg px-5 py-3">
        <BreadCrumb
          breadcrumbData={[
            { title: "Home", label: "/" },
            { title: "Courses", label: "/" },
            { title: "Course Details", label: "" },
          ]}
        />
        <div className="mt-4">
          <h1 className="text-3xl font-bold max-sm:text-2xl">
            Modern React.js Frontend Development
          </h1>
        </div>
      </div>
      <main className="mt-6 mx-6">
        <CourseDetails />
      </main>
    </div>
  );
}
