'use client';

import React from 'react';

interface BlogPostProps {
  title: string;
  date: string;
  summary: string;
}

const ReadBlog: React.FC<BlogPostProps> = ({ title, date, summary }) => {
  return (
    <div className="bg-zinc-900 text-zinc-100 border border-zinc-700 p-6 md:p-8 rounded-2xl my-5 shadow-lg transition-all duration-300 ease-in-out">
      <h2 className="text-2xl md:text-3xl font-semibold mb-3 text-yellow-400">{title}</h2>
      <p className="text-sm text-zinc-400 mb-5">{date}</p>
      <p className="text-base leading-relaxed">{summary}</p>
    </div>
  );
};

export default ReadBlog;
