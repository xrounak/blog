'use client'

import Link from 'next/link';
import InteractionBar from '@/components/InteractionBar';

type BlogPost = {
  title: string
  date: string
  summary: string
  slug: string
  thumbnail?: string
}

type BlogCardProps = {
  posts: BlogPost[]
}

export default function BlogCard({ posts }: BlogCardProps) {
  return (
    <div className="grid gap-6">
      {posts.map(({ title, date, summary, slug, thumbnail }) => (
        <div>
        <Link
          key={slug}
          href={`/blog/${slug}`}
          className="block border rounded-lg p-4 hover:shadow-md transition"
        >
          {/* {thumbnail && (
            <img
              src={thumbnail}
              alt={title}
              className="w-full h-48 object-cover rounded mb-4"
            />
          )} */}
          <h2 className="text-xl font-semibold">{title}</h2>
          <p className="text-gray-500 text-sm mb-2">{date}</p>
          <p className="text-gray-700 line-clamp-2">{summary}</p>
        </Link>
        <InteractionBar slug={slug} />
        </div>
      ))}
      
    </div>
  )
}
