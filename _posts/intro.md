---
title: "An intro, I guess"
excerpt: "
I've been meaning to get something out on my _brand spankin' new_ portfolio for
a couple of weeks now. At some point I just have to do it. I'm not a technical 
writer by any means, but I've been wanting to write some technical-ish ideas, 
as suggested to me by friends and coworkers alike. It just makes sense that the
first this on my portfolio is a blog post, right?
"
coverImage: "/assets/blog/preview/cover.jpg"
date: "2024-10-14T12:56:35.761Z"
author:
  name: Myles Berueda
  picture: "/assets/blog/authors/myles.jpg"
ogImage:
  url: "/assets/blog/preview/cover.jpg"
---

I've been meaning to get something out on my _brand spankin' new_ portfolio for
a couple of weeks now. At some point I just have to do it. I'm not a technical
writer by any means, but I've been wanting to write some technical-ish ideas,
as suggested to me by friends and coworkers alike. It just makes sense that the
first post on my portfolio is an intro/why and how I built this portfolio,
right?

## A few things about me

As you may have gleaned from the portfolio itself, I'm a software engineer. I
spend a bit of time on the frontend, but I've also been known to work on
backend services and dev tooling. I've got a passion for learning new things,
and won't let pesky ideas like "it's too hard" get in the way of growth.

In my spare time, I'm either spending time with my family and friends, working
in my garden, or tinkering with one of my toy projects. While a repository
count of 118 may not seem like a lot for someone who loves tinkering, I can
tell you now - many of my projects are deliberate moves towards an idea or
learning something new. While a monorepo of every single single Rust language
feature I wanted to get my head around may not seem valuable to a potential
employer, I can tell you that it's immensely valuable to me, and my growth.

I'm a pretty private person, so I don't share a lot of my personal info online.
You'd be hard-pressed to find me on social media, though I do have a [linkedin]
and a [mstdn] - and I get notifications from both - I just don't post a lot on
any platform.

[linkedin]: https://linkedin.com/in/myles-berueda
[mstdn]: https://mstdn.social/@mylesberueda

## Why a _brand spankin' new_ portfolio?

Well, my old portfolio just wasn't doing it for me anymore. I'll be honest, I
built it when I was still brand new to industry. I used several technologies
that I no longer use - though to be fair, I'm pretty sure I built my last
portfolio to learn more about [Framer Motion] and [Chakra UI]. While powerful
tech, these aren't really libraries I use in my day-to-day as an engineer.
Instead, I gave myself the challenge: **_build out a new portfolio in a
week_**. I'm a professional, right? Surely this can be done.

[Framer Motion]: https://www.framer.com/motion
[Chakra UI]: https://chakra-ui.com

Welp, it turns out that it _can_ be done; and the hardest part wasn't getting
the portfolio built out or getting it deployed. No. The hardest part was
actually looking at the content I had before and seeing if any of it was
useable. You see, my last portfolio had things like "excellent parallel parker"
under my achievements. I certainly couldn't items like that anymore. I had to
take a good hard look at what I wanted on a page that was basically going to be
my resume moving forward. (Including an idea for a future project, implementing
a probably already existing tool to convert the main page into my actual
resume.)

So what of the blog? Well, you've probably already noticed that my posts are
most likely going to have a conversational tone. While I don't doubt that
someone reading this may be a potential employer, I will concede that if you're
reading this, you're already doing a _deep_ dive into who I am as a person.
There will be the occasional swear word, and I'll probably write (what's
considered) inappropriate or informal content. I'm okay conceding this, because
well, that's how I speak, write, and think. I hope you'll concede that this
isn't a press release; and while I did some media training, what I write here
isn't a reflection of my professional self, the companies I've worked for, or
the companies that I will work for, found, and more.

## Building the portfolio

So, I have myself a goal: build out a portfolio in a week. While the normal
shiny-object-syndrome would've basically hamstrung me into a cycle of "ooh nice
I want to learn that", this time constraint really helped out with forcing
myself to make decisions, and make them quick.

The eagle-eyed among you (or maybe just frontend-/React-focused) may notice
that this portfolio is built with [NextJS]. Some of you may even notice that
this is literally their [blog example], with a few major tweaks. Welp, when
trying to get up and running, you take all the concessions you can get. Styling
isn't really an issue for me - I just used a combination of [Tailwind] and
[DaisyUI] and made it look like something I could be proud of. I'm not a
designer, but after looking at other portfolios, I think I can get away with
minimal styling.

[NextJS]: https://nextjs.org
[blog example]: https://github.com/vercel/next.js/tree/canary/examples/blog-starter
[Tailwind]: https://tailwindcss.com
[DaisyUI]: https://daisyui.com

> _We're about to get into some of the architecture decisions I made; some of
> you may want to see the code. All of this is public on my [github], so feel
> free to peruse._

[github]: https://github.com/MylesWritesCode/portfolio-next

It might not come as a surprise, but turns out that portfolios need content.
Ah, the bane of my existence. Lorem ipsum text can only go so far (even getting
an email about how it's a bad look, lol _but also I agree_) so it was time to
model out some data.

My [last portfolio] had a little data modeling - in that I created components
for each item (project, work experience, etc.), writing each item out in the
section component diligently. This time, I opted to use what the blog starter
had already laid out for posts.

[last portfolio]: https://github.com/MylesWritesCode/portfolio

You see, a problem I had with my last portfolio was that I had to dive deep
into each section that I wanted to update; the data was kept in `const`
declarations on each section's component. While - sure - it's fine and easy to
update that, with _this_ portfolio, I wanted to have a proper separation of
concerns. I don't really care to open the component file when all I want to do
is update some lines in my resume. To start, I created several interfaces for
each resume item. As an example:

```ts
// interface/work-experience.ts
export interface WorkExperience {
  company: string;
  position: string;
  location?: string;
  dates: {
    start: Date;
    end: Date | "current";
  };
  description?: string;
  entries?: string[];
}
```

Awesome, good interface. With the type defined, I can now write out my work
experience in it's own file; importantly, this file is separate from my
component:

```ts
// lib/resume/experience.ts
export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: "Intellibridge",
    position: "Software Engineer III",
    location: "REMOTE (Honolulu, HI)",
    // ...rest of Intellibridge
  },
  // ...rest of my work experience
];
```

And finally, I can import this data into my component, whose only
responsibility is the display mechanics of the portfolio:

```tsx
// resume.tsx
import { WORK_EXPERIENCE } from "@/lib/resume/experience";
// ...other imports

export function Resume() {
  /// ...state and other functions
  return (
    // ...bunch of layout stuff
    <div className="grid w-full grid-cols-1 gap-4">
      {WORK_EXPERIENCE.map((experience) => (
        <ResumeWorkExperience
          key={experience.company}
          experience={experience}
        />
      ))}
    </div>
    // ...closing layout stuff
  );
}
```

There's a few other knick-knacks in the component itself. But here's the
kicker: the component only deals with the display of the data. So if I wanted
to update styling, I go to one file; and importantly, if I want to update my
resume, I go to another, much less noisy file.

## Deploying

I had a portfolio...well, on `localhost`, but still, I had a portfolio. Now,
where to deploy... Setting up an EC2 seemed a bit much for a page which is
completely static - including the blog. I opted to look at [Github Pages] and
[Vercel], since those seemed the easiest to set up. My initial portfolio was
set up on [Netlify], but if I wasn't going to learn anything new with this
portfolio, I was going to learn how to deploy to a new platform.

[Github Pages]: https://pages.github.com
[Vercel]: https://vercel.com
[Netlify]: https://www.netlify.com

Deploying to Github Pages was easy enough - you just build NextJS as a static
website and grab the output, then serve that output. Simple, right? Well, there
was one issue: I already had a Github Pages site, which means that the
portfolio deploys to `myleswritescode.github.io/portfolio-next`. That's not quite
ideal, considering when trying to `CNAME` something, having paths is not the
play. After messing about with this for an hour or so, I decided to look at
another service. Vercel was always there, in case I completely gave up - but
honestly, it seems a bit much for a simple, static website.

My domains are all hosted through [Cloudflare]. I'd spent some time messing
about on Cloudflare, trying to get my `CNAME` to work on a domain with a
slash - which causes headaches all on it's own (images and styles, for example,
were not the greatest...or even loading at some points). Turns out
[Cloudflare Pages] exists, and it's pretty simple to set up.

[Cloudflare]: https://cloudflare.com
[Cloudflare Pages]: https://pages.cloudflare.com

![cloudflare-setup](/assets/blog/intro/cloudflare-setup.png)

I hit this page and, while the second option would be reminiscent of FTPing
files to a server, I opted to just connect to Github. Honestly, Cloudflare did
the rest for me - all I had to do was tell them where the static files would
be output (./out, for those wondering) and they did the rest. With a NextJS
project, though, you need to make sure the following settings are set:

```ts
// next.config.js
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  // Super important for static sites
  output: "export",

  // This kinda matters, test out both on your provider
  images: { unoptimized: true },

  // These don't really matter
  trailingSlash: false,
  skipTrailingSlashRedirect: true,

  // Optional: Change the output directory `out` -> `dist`
  // distDir: 'dist',
};

module.exports = nextConfig;
```

Importantly, the `output` setting is set to `"export"`, where the default
output is generated in `./out`. I also did some things with disabling image
optimization, as NextJS handles images in a special way - which I don't want on
my static site.

Finally, with my DNS being handled by Cloudflare, I simply created a `CNAME`
entry that pointed to where they told me my site was hosted. And that's it.
Portfolio deployed.

## Final thoughts

Well, we got there in the end. I've got a new portfolio, perhaps I'll continue
writing out some thoughts and ideas I have in the future. And considering I did
some work just to get the styles and blockquotes _just the way I like em_, I
just may keep writing.
