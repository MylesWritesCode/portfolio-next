export interface Project {
  title: string;
  description: {
    short: string;
    long?: string;
  };
  github?: string;
  imgs?: string[];
  code?: string[];
}
