import Link from "next/link";
import arrowIcon from "../components/images/arrowIcon.png";
import Image from "next/image";

type breadcrumbDataProps = {
  breadcrumbData: {
    title: string;
    label: string;
  }[];
};

export default function BreadCrumb({ breadcrumbData }: breadcrumbDataProps) {
  return (
    <div className="flex items-center gap-2">
      {breadcrumbData.map((item, index) => {
        const isLast = index === breadcrumbData.length - 1;
        return (
          <div key={item.title} className="flex items-center gap-2">
            {isLast ? (
              <p className="font-bold text-gray-600">{item.title}</p>
            ) : (
              <Link
                href={item.label || "#"}
                className="font-bold text-gray-600 hover:underline"
              >
                {item.title}
              </Link>
            )}
            {isLast ? (
              ""
            ) : (
              <Image
                src={arrowIcon}
                alt="arrowIcon"
                className="h-2 w-2"
              ></Image>
            )}
          </div>
        );
      })}
    </div>
  );
}
