import type { WorkExperience } from '@/interfaces/work-experience';

export const EXTRAS: WorkExperience[] = [
  {
    company: 'AWS Certified Cloud Practitioner',
    position: '',
    dates: {
      start: new Date(2024, 9),
      end: new Date(2024, 9),
    },

    // 'By the time I took this class, I had been working on Aolytix, an app that focuses on visualizing an AWS infrastructure, for 2 years.',
    // 'This class provided a structured, fundamental education on the basics of AWS, including how to manage your account and navigate the various services offered.',
    // 'The outcome of the class is a certification in AWS Cloud Foundations.',
    description: [
      'Amazon describes the AWS Certified Cloud Practitioner as an entry-level certification.',
      'Earners of this certification have a fundamental understanding of IT services and their uses in the AWS Cloud.',
      'They demonstrated cloud fluency and foundational AWS knowledge.',
      'Badge owners are able to identify essential AWS services necessary to set up AWS-focused projects.',
    ].join(' '),
    links: [
      {
        type: 'website',
        title: 'credly',
        uri: 'https://www.credly.com/badges/84101299-e9a1-4147-9077-0a09c6fc40d5/public_url',
      },
    ],
  },
  {
    company: 'Bravo13 Hackathon',
    position: 'Frontend Developer',
    dates: {
      start: new Date(2024, 1),
      end: new Date(2024, 1),
    },
    description: [
      'The Bravo13 Hackathon is a DoD-sponsored event, centered around finding use-cases and implementing proof-of-concept projects',
      'I was recruited by my company (Intellibridge) to join the team as a frontend engineer.',
      'The team had a week to implement, then present, a project that would be judged by a panel of DoD officials.',
    ].join(' '),
    entries: [
      'Interfaced with the rest of the team on estimating what we could accomplish in a week, given a non-classified dataset',
      'In the interest of moving fast, the frontend was based off an pre-built repo the company had been using for some time',
      'Using a combination of React, TypeScript, and Material UI, we implemented a dashboard and map visualization using MapboxGL',
    ],
  },
];
