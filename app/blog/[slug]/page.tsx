import { getPostBySlug } from '@/lib/getPostBySlug';
import ReadBlog from '@/components/readBlog';
import InteractionBar from '@/components/InteractionBar';

// This function generates static parameters for dynamic routes in the blog, 
// allowing Next.js to pre-render pages for the specified slugs.
export async function generateStaticParams() {
  return [
    { slug: 'first-post' },
    { slug: 'second-post' },
  ]
}

export default async function BlogPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);

    const title = post.frontmatter.title;
    const date = post.frontmatter.date;
    const summary = post.frontmatter.summary;
    const slug = params.slug;

  return (
    <div>
      <ReadBlog title={title} date={date} summary={summary} />
      <InteractionBar slug={slug} />
    </div>
  )
}
