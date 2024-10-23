interface Link {
  type: 'website' | 'github' | 'linkedin';
  title: string;
  uri: string;
}

export interface WorkExperience {
  company: string;
  position?: string;
  location?: string;
  dates: {
    start: Date;
    end: Date | 'current';
  };
  description?: string;
  entries?: string[];
  links?: Link[];
}
