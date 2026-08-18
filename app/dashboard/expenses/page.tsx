'use client'

import Link from 'next/link'
import { ArrowLeft, Plus } from 'lucide-react'
import { useState } from 'react'

export default function Expenses() {
  const [expenses] = useState([
    { id: 1, name: 'Albert Heijn', amount: 87.50, category: 'Boodschappen', date: '2024-01-15' },
    { id: 2, name: 'Spotify', amount: 12.99, category: 'Abonnementen', date: '2024-01-14' },
    { id: 3, name: 'Elektriciteit', amount: 145.00, category: 'Energie', date: '2024-01-10' },
    { id: 4, name: 'Jumbo', amount: 63.20, category: 'Boodschappen', date: '2024-01-12' },
    { id: 5, name: 'Sportschool', amount: 49.99, category: 'Sport', date: '2024-01-08' },
  ])

  const categoryTotals = {
    'Boodschappen': 150.70,
    'Wonen': 1350,
    'Auto': 380,
    'Kinderen': 250,
    'Overig': 310,
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <Link href="/dashboard" className="text-gray-600 hover:text-gray-900">
            <ArrowLeft size={24} />
          </Link>
          <h1 className="text-2xl font-bold text-blue-900">Uitgaven</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Chart Summary */}
        <div className="card mb-8">
          <h3 className="font-bold text-gray-900 mb-6">Uitgaven per categorie</h3>
          <div className="space-y-4">
            {Object.entries(categoryTotals).map(([category, amount]) => {
              const total = Object.values(categoryTotals).reduce((a: number, b: number) => a + b, 0)
              const percentage = (amount / total) * 100

              return (
                <div key={category}>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-medium">{category}</span>
                    <span className="text-gray-600">€{amount}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-900 h-2 rounded-full"
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Recent Expenses */}
        <div className="card mb-8">
          <h3 className="font-bold text-gray-900 mb-4">Recente uitgaven</h3>
          <div className="space-y-3">
            {expenses.map((expense) => (
              <div key={expense.id} className="flex justify-between items-center pb-3 border-b border-gray-100 last:border-b-0">
                <div>
                  <p className="font-medium text-gray-900">{expense.name}</p>
                  <p className="text-sm text-gray-600">{expense.category}</p>
                </div>
                <p className="font-bold">€{expense.amount.toFixed(2)}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Add Button */}
        <button className="w-full bg-blue-900 text-white py-3 rounded-lg font-bold hover:bg-blue-800 flex items-center justify-center gap-2">
          <Plus size={20} />
          Uitgave toevoegen
        </button>
      </main>
    </div>
  )
}
