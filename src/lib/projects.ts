import type { Project } from '@/interfaces/project';

export const PROJECTS: Project[] = [
  {
    title: 'rust-cli-starter',
    description: {
      short: 'My go-to starter CLI project',
      long: 'This is probably my most used template. I use it any time I need to automate anything, including CLI and web servers.',
    },
    github: 'https://github.com/MylesWritesCode/rust-cli-starter',
    imgs: ['/assets/projects/rust-cli-starter/main.png'],
  },
  {
    title: 'rust-wasm',
    description: {
      short: 'Exploratory test WASM for large-scale data transforms',
      long: [
        'This project started as a test to figure out if performing data transforms in WASM is faster than just using JS.',
        "If you're curious, WASM is pretty fast, but JS is still faster for smaller data structures.",
        "The moral of the story is, you'll have to try it for your use-case.",
      ].join(' '),
    },
    github: 'https://github.com/MylesWritesCode/rust-wasm',
    imgs: [
      '/assets/projects/rust-wasm/pre-run.png',
      '/assets/projects/rust-wasm/fetch.png',
      '/assets/projects/rust-wasm/finish.png',
    ],
  },
  {
    title: 'TODO',
    description: {
      short:
        "It looks like a bunch of my old projects no longer work, and I don't want to just pull them from my last portfolio, so I'm going to have to build this out again.",
    },
  },
];
