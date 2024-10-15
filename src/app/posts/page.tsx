import { HeroPost } from '@/app/_components/posts/hero-post';
import { MoreStories } from '@/app/_components/posts/more-stories';
import Container from '@/components/container';
import { getAllPosts } from '@/lib/api';

export default function Index() {
  const allPosts = getAllPosts();
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);

  return (
    <main>
      <Container>
        <h1 className='my-16 w-full text-left font-bold text-5xl uppercase leading-none tracking-tighter md:text-8xl'>
          Articles.
        </h1>
        <HeroPost
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          date={heroPost.date}
          author={heroPost.author}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
        />
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </main>
  );
}
