'use client'

import Link from 'next/link'
import { ArrowLeft, Plus } from 'lucide-react'
import { useState } from 'react'

export default function Savings() {
  const [goals] = useState([
    {
      id: 1,
      name: 'Vakantie',
      target: 2000,
      current: 1200,
      deadline: '2024-07-01',
      color: 'bg-green-600',
    },
    {
      id: 2,
      name: 'Noodfonds',
      target: 6000,
      current: 4500,
      deadline: '2024-12-31',
      color: 'bg-blue-600',
    },
    {
      id: 3,
      name: 'Nieuwe auto',
      target: 10000,
      current: 2800,
      deadline: '2025-06-01',
      color: 'bg-purple-600',
    },
  ])

  const calculateMonthly = (target: number, current: number, deadline: string) => {
    const now = new Date()
    const end = new Date(deadline)
    const months = Math.ceil((end.getTime() - now.getTime()) / (1000 * 60 * 60 * 24 * 30))
    const remaining = target - current
    return months > 0 ? Math.ceil(remaining / months) : 0
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <Link href="/dashboard" className="text-gray-600 hover:text-gray-900">
            <ArrowLeft size={24} />
          </Link>
          <h1 className="text-2xl font-bold text-blue-900">Spaarplannen</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Goals */}
        <div className="space-y-6 mb-8">
          {goals.map((goal) => {
            const percentage = (goal.current / goal.target) * 100
            const monthlyAmount = calculateMonthly(
              goal.target,
              goal.current,
              goal.deadline
            )

            return (
              <div key={goal.id} className="card">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-bold text-gray-900">
                    🎯 {goal.name}
                  </h3>
                  <span className="text-sm text-gray-600">
                    €{goal.current} / €{goal.target}
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className={`${goal.color} h-3 rounded-full`}
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    {percentage.toFixed(0)}% bereikt
                  </p>
                </div>

                {/* Info */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                  <div>
                    <p className="text-xs text-gray-600 mb-1">Tot deadline</p>
                    <p className="font-bold text-gray-900">
                      {goal.deadline}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 mb-1">Spaar per maand</p>
                    <p className="font-bold text-green-600">€{monthlyAmount}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Add Button */}
        <button className="w-full bg-blue-900 text-white py-3 rounded-lg font-bold hover:bg-blue-800 flex items-center justify-center gap-2">
          <Plus size={20} />
          Nieuw spaarplan
        </button>
      </main>
    </div>
  )
}
