export type ItemType = "lesson" | "pdf" | "exam";

export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface WeekItem {
  id: string;
  type: ItemType;
  title: string;
  duration?: string;
  videoUrl?: string;
  fileSize?: string;
  downloadUrl?: string;
  completed?: boolean;
  questions?: Question[];
}

export interface Week {
  weekNumber: number;
  title: string;
  items: WeekItem[];
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Course {
  id: string;
  title: string;
  instructor: string;
  thumbnail: string;
  progress: number;
  overviewVideoUrl: string;
  description: string;
  weeks: Week[];
  faqs: FAQ[];
}

export const coursesData: Course[] = [
  {
    id: "1",
    title: "Modern React.js Frontend Development",
    instructor: "Ahmed Ali",
    thumbnail:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=600&auto=format&fit=crop",
    progress: 40,
    overviewVideoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    description:
      "Learn to build modern, responsive web applications using React, Hooks, and State Management.",
    weeks: [
      {
        weekNumber: 1,
        title: "React Basics & Components",
        items: [
          {
            id: "w1-i1",
            type: "lesson",
            title: "Course Introduction & Project Structure",
            duration: "10:05",
            videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
            completed: true,
          },
          {
            id: "w1-i2",
            type: "lesson",
            title: "Understanding JSX and Props",
            duration: "15:30",
            videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
            completed: true,
          },
          {
            id: "w1-i3",
            type: "lesson",
            title: "Managing State with useState",
            duration: "22:10",
            videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
            completed: false,
          },
          {
            id: "w1-i4",
            type: "lesson",
            title: "Handling Events and User Input",
            duration: "14:45",
            videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
            completed: false,
          },
          {
            id: "w1-i5",
            type: "lesson",
            title: "Conditional Rendering in React",
            duration: "18:20",
            videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
            completed: false,
          },
          {
            id: "w1-i6",
            type: "pdf",
            title: "Week 1 Summary & Cheat Sheet",
            fileSize: "2.4 MB",
            downloadUrl: "#",
          },
          {
            id: "w1-i7",
            type: "exam",
            title: "Week 1 Assessment Quiz",
            completed: false,
            questions: [
              {
                id: 1,
                question: "What is used to pass data between React components?",
                options: ["Props", "HTML", "CSS", "SQL"],
                correctAnswer: 0,
              },
              {
                id: 2,
                question:
                  "Which hook is used for managing state in functional components?",
                options: ["useEffect", "useState", "useRef", "useMemo"],
                correctAnswer: 1,
              },
            ],
          },
        ],
      },
      {
        weekNumber: 2,
        title: "Advanced Hooks & Side Effects",
        items: [
          {
            id: "w2-i1",
            type: "lesson",
            title: "Using useEffect for Side Effects",
            duration: "18:45",
            videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
            completed: false,
          },
          {
            id: "w2-i2",
            type: "lesson",
            title: "Fetching APIs and Displaying Data",
            duration: "25:00",
            videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
            completed: false,
          },
          {
            id: "w2-i3",
            type: "lesson",
            title: "Custom Hooks Development",
            duration: "20:15",
            videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
            completed: false,
          },
          {
            id: "w2-i4",
            type: "lesson",
            title: "Performance Optimization with useMemo",
            duration: "16:30",
            videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
            completed: false,
          },
          {
            id: "w2-i5",
            type: "lesson",
            title: "Callback Optimization with useCallback",
            duration: "12:50",
            videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
            completed: false,
          },
          {
            id: "w2-i6",
            type: "pdf",
            title: "Advanced React Hooks Guide",
            fileSize: "4.1 MB",
            downloadUrl: "#",
          },
          {
            id: "w2-i7",
            type: "exam",
            title: "Week 2 Comprehensive Exam",
            completed: false,
            questions: [
              {
                id: 1,
                question:
                  "When does the callback passed to useEffect run by default?",
                options: [
                  "Only on mount",
                  "After every render",
                  "Before unmount",
                  "Never",
                ],
                correctAnswer: 1,
              },
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Do I need a background in JavaScript?",
        answer:
          "Yes, you should be familiar with modern JavaScript (ES6+) fundamentals.",
      },
      {
        question: "How do I get my certificate?",
        answer: "By completing all lessons and passing the course assessments.",
      },
    ],
  },
  {
    id: "2",
    title: "Mastering Next.js App Router & TypeScript",
    instructor: "Mohamed Ibrahim",
    thumbnail:
      "https://assets.vercel.com/image/upload/v1538361091/repositories/next-js/next-js.png",
    progress: 15,
    overviewVideoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    description:
      "Your ultimate guide to building fast, SEO-friendly web applications with Next.js 14+.",
    weeks: [
      {
        weekNumber: 1,
        title: "App Router Architecture",
        items: [
          {
            id: "c2-w1-1",
            type: "lesson",
            title: "Differences between Pages and App Router",
            duration: "12:00",
            videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
            completed: true,
          },
          {
            id: "c2-w1-2",
            type: "lesson",
            title: "Server Components vs Client Components",
            duration: "20:15",
            videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
            completed: false,
          },
          {
            id: "c2-w1-3",
            type: "lesson",
            title: "File-based Routing Deep Dive",
            duration: "15:00",
            videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
            completed: false,
          },
          {
            id: "c2-w1-4",
            type: "lesson",
            title: "Layouts and Templates",
            duration: "18:30",
            videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
            completed: false,
          },
          {
            id: "c2-w1-5",
            type: "lesson",
            title: "Dynamic Routes and Catch-all Segments",
            duration: "22:00",
            videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
            completed: false,
          },
          {
            id: "c2-w1-6",
            type: "pdf",
            title: "Next.js Routing Cheat Sheet",
            fileSize: "1.8 MB",
            downloadUrl: "#",
          },
          {
            id: "c2-w1-7",
            type: "exam",
            title: "App Router Quiz",
            completed: false,
            questions: [
              {
                id: 1,
                question:
                  "What is the default component type in Next.js App Router?",
                options: [
                  "Client Component",
                  "Server Component",
                  "Pure Component",
                  "Functional Component",
                ],
                correctAnswer: 1,
              },
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Is this course suitable for React beginners?",
        answer:
          "It is recommended to have intermediate React experience before starting Next.js.",
      },
    ],
  },
  {
    id: "3",
    title: "UI/UX Design & Implementation with Tailwind CSS",
    instructor: "Sara Mahmoud",
    thumbnail:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=600&auto=format&fit=crop",
    progress: 80,
    overviewVideoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    description:
      "Learn how to translate Figma designs into real, responsive interfaces quickly and efficiently.",
    weeks: [
      {
        weekNumber: 1,
        title: "Design Principles & Tailwind Setup",
        items: [
          {
            id: "c3-w1-1",
            type: "lesson",
            title: "Core UI/UX Principles",
            duration: "14:30",
            videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
            completed: true,
          },
          {
            id: "c3-w1-2",
            type: "lesson",
            title: "Mastering Flexbox and Grid in Tailwind",
            duration: "25:10",
            videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
            completed: true,
          },
          {
            id: "c3-w1-3",
            type: "lesson",
            title: "Responsive Design Breakpoints",
            duration: "19:00",
            videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
            completed: true,
          },
          {
            id: "c3-w1-4",
            type: "lesson",
            title: "Typography and Color Palettes",
            duration: "16:20",
            videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
            completed: true,
          },
          {
            id: "c3-w1-5",
            type: "lesson",
            title: "Building Custom Components",
            duration: "30:00",
            videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
            completed: false,
          },
          {
            id: "c3-w1-6",
            type: "pdf",
            title: "Tailwind CSS Quick Reference",
            fileSize: "3.5 MB",
            downloadUrl: "#",
          },
          {
            id: "c3-w1-7",
            type: "exam",
            title: "Tailwind UI Assessment",
            completed: false,
            questions: [
              {
                id: 1,
                question: "Which class represents flex display in Tailwind?",
                options: ["display-flex", "flex", "d-flex", "flexbox"],
                correctAnswer: 1,
              },
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Will I learn how to read Figma files?",
        answer: "Yes, we will practice extracting measurements precisely.",
      },
    ],
  },
  {
    id: "4",
    title: "Backend Development with Node.js & MongoDB",
    instructor: "Amr Khaled",
    thumbnail:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop",
    progress: 0,
    overviewVideoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    description:
      "Build robust servers, connect MongoDB databases, and create professional RESTful APIs.",
    weeks: [
      {
        weekNumber: 1,
        title: "Introduction to Node.js & Express",
        items: [
          {
            id: "c4-w1-1",
            type: "lesson",
            title: "How Node.js Works Behind the Scenes",
            duration: "16:00",
            videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
            completed: false,
          },
          {
            id: "c4-w1-2",
            type: "lesson",
            title: "Setting up Express Server",
            duration: "21:00",
            videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
            completed: false,
          },
          {
            id: "c4-w1-3",
            type: "lesson",
            title: "Routing and Middleware",
            duration: "24:30",
            videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
            completed: false,
          },
          {
            id: "c4-w1-4",
            type: "lesson",
            title: "Connecting MongoDB with Mongoose",
            duration: "28:15",
            videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
            completed: false,
          },
          {
            id: "c4-w1-5",
            type: "lesson",
            title: "Building REST Endpoints",
            duration: "32:00",
            videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
            completed: false,
          },
          {
            id: "c4-w1-6",
            type: "pdf",
            title: "Node.js Architecture Notes",
            fileSize: "2.1 MB",
            downloadUrl: "#",
          },
          {
            id: "c4-w1-7",
            type: "exam",
            title: "Backend Basics Quiz",
            completed: false,
            questions: [
              {
                id: 1,
                question: "What environment runs Node.js code?",
                options: ["V8 Engine", "JVM", "Python Runtime", "CLR"],
                correctAnswer: 0,
              },
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Will we learn database integration?",
        answer: "Yes, we will cover MongoDB and Mongoose in detail.",
      },
    ],
  },
  {
    id: "5",
    title: "Advanced State Management: Redux Toolkit & React Query",
    instructor: "Yasmine Abdullah",
    thumbnail:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600&auto=format&fit=crop",
    progress: 50,
    overviewVideoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    description:
      "Master global state management and server state efficiently with minimal boilerplate.",
    weeks: [
      {
        weekNumber: 1,
        title: "Redux vs React Query Comparison",
        items: [
          {
            id: "c5-w1-1",
            type: "lesson",
            title: "When to use Redux vs Server State?",
            duration: "11:20",
            videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
            completed: true,
          },
          {
            id: "c5-w1-2",
            type: "lesson",
            title: "Setting up Redux Toolkit Slices",
            duration: "22:00",
            videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
            completed: true,
          },
          {
            id: "c5-w1-3",
            type: "lesson",
            title: "Async Thunks and API Calls",
            duration: "26:10",
            videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
            completed: false,
          },
          {
            id: "c5-w1-4",
            type: "lesson",
            title: "Introduction to React Query Caching",
            duration: "19:40",
            videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
            completed: false,
          },
          {
            id: "c5-w1-5",
            type: "lesson",
            title: "Optimistic Updates & Mutations",
            duration: "31:00",
            videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
            completed: false,
          },
          {
            id: "c5-w1-6",
            type: "pdf",
            title: "State Management Decision Tree PDF",
            fileSize: "1.5 MB",
            downloadUrl: "#",
          },
          {
            id: "c5-w1-7",
            type: "exam",
            title: "State Management Quiz",
            completed: false,
            questions: [
              {
                id: 1,
                question: "What is React Query primarily designed for?",
                options: [
                  "Global UI Theme",
                  "Server State Caching",
                  "Local Form State",
                  "Routing",
                ],
                correctAnswer: 1,
              },
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Is this course practical?",
        answer:
          "Includes hands-on projects and real-world examples for each tool.",
      },
    ],
  },
  {
    id: "6",
    title: "Data Structures & Algorithms in JavaScript",
    instructor: "Kareem Abdelrahman",
    thumbnail:
      "https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=600&auto=format&fit=crop",
    progress: 10,
    overviewVideoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    description:
      "Sharpen your algorithmic thinking and ace top tech company interviews successfully.",
    weeks: [
      {
        weekNumber: 1,
        title: "Big O Notation & Arrays",
        items: [
          {
            id: "c6-w1-1",
            type: "lesson",
            title: "Understanding Big O Complexity",
            duration: "19:30",
            videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
            completed: true,
          },
          {
            id: "c6-w1-2",
            type: "lesson",
            title: "Array Operations and Memory",
            duration: "23:00",
            videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
            completed: false,
          },
          {
            id: "c6-w1-3",
            type: "lesson",
            title: "Two Pointers Technique",
            duration: "27:15",
            videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
            completed: false,
          },
          {
            id: "c6-w1-4",
            type: "lesson",
            title: "Sliding Window Pattern",
            duration: "25:40",
            videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
            completed: false,
          },
          {
            id: "c6-w1-5",
            type: "lesson",
            title: "Hash Maps and Frequency Counters",
            duration: "29:10",
            videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
            completed: false,
          },
          {
            id: "c6-w1-6",
            type: "pdf",
            title: "Common Algorithmic Patterns PDF",
            fileSize: "3.0 MB",
            downloadUrl: "#",
          },
          {
            id: "c6-w1-7",
            type: "exam",
            title: "DSA Week 1 Assessment",
            completed: false,
            questions: [
              {
                id: 1,
                question:
                  "What is the time complexity of binary search on a sorted array?",
                options: ["O(n)", "O(log n)", "O(n^2)", "O(1)"],
                correctAnswer: 1,
              },
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Are these problems useful for interviews?",
        answer:
          "Absolutely, these are the core topics required in technical interviews.",
      },
    ],
  },
];
