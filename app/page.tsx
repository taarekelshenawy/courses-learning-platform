import Courses from "@/components/courses/Courses";

export default function Home() {
  return (
    <div>
      <div className="bg-custom-bg flex flex-col items-center p-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold max-sm:text-2xl">Explore Our Courses</h1>
          <p className="text-gray-400">
            Enhance your skills with our professional online courses and
            hands-on projects.
          </p>
        </div>
      </div>
      <main className="mx-4 mt-12">
        <Courses />
      </main>
    </div>
  );
}
