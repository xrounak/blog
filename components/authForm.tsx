'use client'

import { useState } from 'react'
import { signIn, signUp } from '@/lib/auth'

export default function AuthForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [mode, setMode] = useState<'login' | 'signup'>('signup')

  const handleSubmit = async () => {
    if (mode === 'signup') {
      const { data, error } = await signUp(email, password)
      if (error) {
        console.error('Signup error:', error.message)
        alert(error.message) 
      } else {
        console.log('Signed up successfully:', data)
      }
    } else {
      const { data, error } = await signIn(email, password)
      if (error) {
        console.error('Login error:', error.message)
        alert(error.message)
      } else {
        console.log('Logged in:', data)
    }
  }
}
  

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <div className="bg-zinc-900 p-8 rounded-2xl shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">
          {mode === 'signup' ? 'Create Account' : 'Welcome Back'}
        </h2>
  
        <input
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full p-3 mb-4 bg-zinc-800 text-white placeholder-gray-400 border border-zinc-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
  
        <input
          value={password}
          onChange={e => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-6 bg-zinc-800 text-white placeholder-gray-400 border border-zinc-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
  
        <button
          onClick={() => {
            console.log('Submitting form', email, password)
            handleSubmit()
          }}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition-all"
        >
          {mode === 'signup' ? 'Sign Up' : 'Login'}
        </button>
  
        <p
          onClick={() => setMode(mode === 'signup' ? 'login' : 'signup')}
          className="mt-4 text-sm text-blue-400 hover:underline text-center cursor-pointer"
        >
          {mode === 'signup'
            ? 'Already have an account? Login'
            : 'No account? Sign up'}
        </p>
      </div>
    </div>
  )
  
}  