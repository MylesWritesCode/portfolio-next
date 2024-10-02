export interface WorkExperience {
  company: string;
  position: string;
  location?: string;
  dates: {
    start: Date;
    end: Date | 'current';
  };
  description?: string;
  entries?: string[];
}
