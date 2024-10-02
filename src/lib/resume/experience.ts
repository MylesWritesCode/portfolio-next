import type { WorkExperience } from '@/interfaces/work-experience';

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Intellibridge',
    position: 'Software Engineer III',
    location: 'REMOTE (Honolulu, HI)',
    dates: {
      start: new Date(2022, 7),
      end: 'current',
    },
    description: [
      'I joined Intellibridge on the R&D team, where I was responsible for implementing features on a new product called Aolytix - an infrastructure visualization tool.',
      'My responsibilities included mentoring other devs - especially in the context of frontend development, and interfacing with users to gather feedback.',
    ].join(' '),
    entries: [
      'Bootstrapped the frontend for Aolytix, using Create React App and Craco',
      'Increased performance of canvas graph library, increasing throughput by ~70%, allowing for larger datasets',
      'Decreased first-paint time ~80% by optimizing graph data transforms, reducing first-paint from over 150ms to under 30ms',
      'Spearheaded different deployments of Aolytix, including a CLI deployment and the desktop app for Windows and Mac',
      'Planned and oversaw critical refactor from a commercial graphing library to Cytoscape, an open-source library',
      'Implemented keygen and licensing system',
      'Implemented OAUTH login with Okta, allowing for SSO and user management',
      'Mentored other developers on frontend best practices, including React, TypeScript, and CSS',
    ],
  },
  {
    company: 'Govalo',
    location: 'REMOTE (Redlands, CA)',
    position: 'Junior Software Engineer',
    dates: {
      start: new Date(2021, 8),
      end: new Date(2022, 7),
    },
    description: [
      'Govalo is a startup that specializes in creating a platform for gift giving on Shopify.',
      'I joined as a junior software engineer, responsible for interfacing with clients and developing new features.',
    ].join(' '),
    entries: [
      'Implemented the Shopify plugin, using Svelte and TypeScript',
      'Interfaced with owners of Shopify stores, often adding custom implementations to their stores',
      'Debugged and fixed issues with the plugin, often requiring quick turnarounds to keep stores online',
      'Guided developers on implementation tips and tricks, regarding both the plugin and the Shopify API',
    ],
  },
  {
    company: 'Residential Choices',
    position: 'Software Engineer',
    location: 'Honolulu, HI',
    dates: {
      start: new Date(2019, 8),
      end: new Date(2021, 8),
    },
    description: [
      'Once I graduated from SNHU, I started working on building a simple webapp in my free time to target some inefficiency I observed in the office.',
      'The app quickly gained traction and was adopted by the company.',
      'It ran on an Express API connected to a Postgres DB with a React frontend, and was deployed to an on-prem server.',
    ].join(' '),
    entries: [
      'Converted Excel-based workflow to a webapp, which allowed for better UI/UX and custom data validation',
      'Prototyped out full-stack app in about a month, targeting ~20 users',
      'Increased metric visibility by adding a custom dashboard displaying key deadline-related metrics',
      'Expanded the application by further learning and implementing d3 for custom reports',
      "Implemented alerting and notification features, resulting in an increase in the company's collection rate",
    ],
  },
  {
    company: 'Residential Choices',
    position: 'IT Support',
    location: 'Honolulu, HI',
    dates: {
      start: new Date(2011, 8),
      end: new Date(2019, 8),
    },
    description: [
      'Residential Choices is a case management agency.',
      'While I wore many hats, my primary job description was IT support for the staff.',
      'I was a driver for the movement from paper to electronic records in the office.',
    ].join(' '),
    entries: [
      'Setup initial file system and computer security systems for the office staff and outpost employees',
      'Performed general tasks such as maintenance, upgrades, and software installation',
      'Served as the primary point-of-contact for vendors within the context of IT, including ISPs and software vendors',
      'Completed security audits and implemented security measures to protect sensitive client data',
      'Generated quarterly IT budgets, including the cost of upgrades, replacements, and new tech',
    ],
  },
];
