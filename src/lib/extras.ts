import type { WorkExperience } from '@/interfaces/work-experience';

export const EXTRAS: WorkExperience[] = [
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
