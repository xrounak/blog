import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'

const BLOG_DIR = path.join(process.cwd(), 'content/blog')

export async function getPostBySlug(slug: string) {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`)
  const raw = fs.readFileSync(filePath, 'utf8')

  const { content, data } = matter(raw)
  const mdxSource = await serialize(content)

  return {
    slug,
    frontmatter: data,
    mdxSource,
  }
}
