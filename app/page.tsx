import { link } from 'fs';
import React from 'react';
import Link from 'next/link';
import AuthForm from '@/components/authForm';

const LandingPage = () => {
  return (
    
    <div>
      <Link href="/blog">Read Blog</Link>
      <AuthForm />   
    </div>
  )
}

export default LandingPage;
