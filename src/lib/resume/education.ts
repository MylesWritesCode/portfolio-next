import type { Education } from '@/interfaces/education';

export const EDUCATION: Education[] = [
  {
    school: 'Southern New Hampshire University',
    degree: 'Bachelor of Science in Computer Science',
    gpa: '4.0',
    description: [
      'The computer science program with a concentration in software engineering provided a great base for where I am today.',
      'In addition to learning the fundamentals of computer science, I focused on several electives on data analytics and statistics.',
    ].join(' '),
    entries: [
      'DSA project: MovieDB sorting with Python',
      '3D project: 3D rendering with OpenGL',
      'Capstone project: Web-app visualizing public flight data (incoming, outgoing) on airline flights',
    ],
    dates: {
      start: new Date(2016, 7),
      end: new Date(2019, 7),
    },
  },
  {
    school: 'Honolulu Community College',
    degree: 'AWS Cloud Foundations',
    description: [
      'By the time I took this class, I had been working on Aolytix, an app that focuses on visualizing an AWS infrastructure, for 2 years.',
      'This class provided a structured, fundamental education on the basics of AWS, including how to manage your account and navigate the various services offered.',
      'The outcome of the class is a certification in AWS Cloud Foundations.',
    ].join(' '),
    entries: [
      'Worked through labs on EC2, S3, RDS, and more',
      'Deployed a simple web app on an EC2 instance, routed through Route 53',
      'Completed several knowledge checks on various AWS services',
    ],
    dates: {
      start: new Date(2024, 8),
      end: new Date(2024, 9),
    },
  },
];
