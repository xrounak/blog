import fs from 'fs'
import path from 'path'
import { getPostBySlug } from '@/lib/getPostBySlug'
import BlogCard from '@/components/blogcard';

const BLOG_DIR = path.join(process.cwd(), 'content/blog')

export default async function HomePage() {
  // 1. Read all blog slugs from the folder
  const slugs = fs
    .readdirSync(BLOG_DIR)
    .filter(file => file.endsWith('.mdx'))
    .map(file => file.replace(/\.mdx$/, ''))

  // 2. Get all posts using getPostBySlug
  const posts = await Promise.all(slugs.map(slug => getPostBySlug(slug)))

  // 3. Send only required props to BlogCard
  const cardData = posts.map(post => ({
    title: post.frontmatter.title,
    date: post.frontmatter.date,
    summary: post.frontmatter.summary,
    slug: post.slug,
    thumbnail: post.frontmatter.thumbnail,
  }))


  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">All Blog Posts</h1>
      <BlogCard posts={cardData} />
    </main>
  )
}
