'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Demo login - hardcoded for MVP
    if (email && password) {
      localStorage.setItem('user', JSON.stringify({ email }))
      router.push('/dashboard')
    } else {
      setError('Vul email en wachtwoord in')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-blue-900">GEZINSLIM</h1>
          <p className="text-gray-600 mt-2">Inloggen</p>
        </div>

        <form onSubmit={handleLogin} className="card space-y-4">
          {error && (
            <div className="bg-red-50 text-red-700 p-4 rounded-lg">
              {error}
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
              placeholder="je@email.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Wachtwoord
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
              placeholder="••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-900 text-white py-3 rounded-lg font-bold hover:bg-blue-800 transition"
          >
            Inloggen
          </button>
        </form>

        <p className="text-center mt-6 text-gray-600">
          Geen account?{' '}
          <Link href="/signup" className="text-blue-900 font-bold">
            Registreren
          </Link>
        </p>
      </div>
    </div>
  )
}
