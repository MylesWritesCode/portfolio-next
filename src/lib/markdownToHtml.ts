import rehypeExternalLinks from 'rehype-external-links';
import rehypeStringify from 'rehype-stringify';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeInferReadingTime from 'rehype-infer-reading-time-meta';
import { unified } from 'unified';

export default async function markdownToHtml(markdown: string) {
  const file = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeExternalLinks, { target: '_blank', rel: ['noopener', 'noreferrer'] })
    .use(rehypePrettyCode, {
      theme: {
        dark: 'catppuccin-frappe',
        light: 'github-light-default',
      },
      keepBackground: false, // Background is handled by theme
      transformers: [],
    })
    .use(rehypeStringify)
    .use(rehypeInferReadingTime)
    .process(markdown);

  let time = file.data.meta?.readingTime;
  if (Array.isArray(time)) {
    if (time.length === 1) {
      time = time[0];
    } else {
      time = time[1];
    }
  }

  return { contents: String(file), time: time || 5 };
}
