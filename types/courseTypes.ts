export type ItemType = "lesson" | "pdf" | "exam";

export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  pagenumber: number;
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
  comments?: Comment[];
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

export type Comment = {
  name: string;
  description: string;
  date: string;
  avatar: string;
};
