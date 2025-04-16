'use client';

import { useState } from 'react';
import { FaHeart, FaRegHeart, FaComment, FaShareAlt, FaBookmark, FaRegBookmark, FaArchive } from 'react-icons/fa';

type Props = {
  slug: string;
};

const InteractionBar = ({ slug }: Props) => {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
    console.log('Like clicked for:', slug);
    // Add DB/API logic here
  };

  const handleComment = () => {
    console.log('Comment clicked for:', slug);
    // Open comment section or modal
  };

  const handleShare = () => {
    const url = `${window.location.origin}/blog/${slug}`;
    navigator.clipboard.writeText(url);
    alert('Link copied to clipboard!');
  };

  const handleSave = () => {
    setSaved(!saved);
    console.log('Save clicked for:', slug);
    // Add DB/API logic here
  };

  const handleArchive = () => {
    console.log('Archive clicked for:', slug);
    // DB logic for archiving this post
  };

  return (
    <div className="flex gap-4 py-2 border-t border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300">
      <button onClick={handleLike}>{liked ? <FaHeart className="text-red-500" /> : <FaRegHeart />}</button>
      <button onClick={handleComment}><FaComment /></button>
      <button onClick={handleShare}><FaShareAlt /></button>
      <button onClick={handleSave}>{saved ? <FaBookmark /> : <FaRegBookmark />}</button>
      <button onClick={handleArchive}><FaArchive /></button>
    </div>
  );
};

export default InteractionBar;
