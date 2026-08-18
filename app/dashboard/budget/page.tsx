'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Plus } from 'lucide-react'

export default function Budget() {
  const [categories, setCategories] = useState([
    { name: 'Wonen', budget: 1500, spent: 1350, color: 'bg-blue-600' },
    { name: 'Boodschappen', budget: 600, spent: 520, color: 'bg-green-600' },
    { name: 'Auto', budget: 400, spent: 380, color: 'bg-yellow-600' },
    { name: 'Kinderen', budget: 300, spent: 250, color: 'bg-purple-600' },
    { name: 'Vermaak', budget: 200, spent: 120, color: 'bg-pink-600' },
  ])

  const totalBudget = categories.reduce((sum, cat) => sum + cat.budget, 0)
  const totalSpent = categories.reduce((sum, cat) => sum + cat.spent, 0)
  const remaining = totalBudget - totalSpent

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <Link href="/dashboard" className="text-gray-600 hover:text-gray-900">
            <ArrowLeft size={24} />
          </Link>
          <h1 className="text-2xl font-bold text-blue-900">Budget</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Summary */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="card">
            <p className="text-gray-600 text-sm mb-2">Totaal Budget</p>
            <p className="text-3xl font-bold text-gray-900">€{totalBudget}</p>
          </div>
          <div className="card">
            <p className="text-gray-600 text-sm mb-2">Uitgegeven</p>
            <p className="text-3xl font-bold text-gray-900">€{totalSpent}</p>
          </div>
          <div className="card">
            <p className="text-gray-600 text-sm mb-2">Over</p>
            <p className="text-3xl font-bold text-green-600">€{remaining}</p>
          </div>
        </div>

        {/* Categories */}
        <div className="space-y-4 mb-8">
          {categories.map((category, index) => {
            const percentage = (category.spent / category.budget) * 100
            const isOver = category.spent > category.budget

            return (
              <div key={index} className="card">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-bold text-gray-900">{category.name}</h3>
                  <span
                    className={`text-sm font-medium ${
                      isOver ? 'text-red-600' : 'text-green-600'
                    }`}
                  >
                    €{category.spent} / €{category.budget}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className={`${category.color} h-3 rounded-full`}
                    style={{
                      width: `${Math.min(percentage, 100)}%`,
                    }}
                  ></div>
                </div>
                {isOver && (
                  <p className="text-red-600 text-sm mt-2">
                    ⚠️ Budget overschreden met €{category.spent - category.budget}
                  </p>
                )}
              </div>
            )
          })}
        </div>

        {/* Add Budget Button */}
        <button className="w-full bg-blue-900 text-white py-3 rounded-lg font-bold hover:bg-blue-800 flex items-center justify-center gap-2">
          <Plus size={20} />
          Nieuwe categorie toevoegen
        </button>
      </main>
    </div>
  )
}
