'use client'

import Link from 'next/link'
import { ArrowRight, TrendingUp, Users, Calendar, Zap } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navbar */}
      <nav className="border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-900">GEZINSLIM</h1>
          <Link href="/login" className="text-blue-900 font-medium">
            Inloggen
          </Link>
        </div>
      </nav>

      {/* Hero */}
      
