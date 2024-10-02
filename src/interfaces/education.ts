export interface Education {
  school: string;
  degree: string;
  gpa?: string;
  dates: {
    start: Date;
    end: Date | 'current';
  };
  description?: string;
  entries?: string[];
}
