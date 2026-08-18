'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { LogOut, TrendingUp, Target, Zap } from 'lucide-react'

export default function Dashboard() {
  const [user, setUser] = useState<any>(null)
  const [familyData, setFamilyData] = useState<any>(null)
  const router = useRouter()

  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    const storedData = localStorage.getItem('familyData')
    
    if (!storedUser) {
      router.push('/login')
      return
    }
    
    setUser(JSON.parse(storedUser))
    if (storedData) setFamilyData(JSON.parse(storedData))
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem('user')
    localStorage.removeItem('familyData')
    router.push('/')
  }

  if (!user) return <div>Loading...</div>

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-900">GEZINSLIM</h1>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
          >
            <LogOut size={20} />
            Uitloggen
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Welcome */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            Goedendag, {user.name}! 👋
          </h2>
          <p className="text-gray-600 mt-2">Dit is je financiële overzicht</p>
        </div>

        {/* Main Card - This Month */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="card md:col-span-2">
            <h3 className="text-sm font-medium text-gray-600 mb-6">
              Deze Maand
            </h3>
            <div className="grid grid-cols-3 gap-6">
              <div>
                <p className="text-gray-600 text-sm mb-2">Inkomen</p>
                <p className="text-3xl font-bold text-gray-900">
                  €{familyData?.income || '3.500'}
                </p>
              </div>
              <div>
                <p className="text-gray-600 text-sm mb-2">Uitgaven</p>
                <p className="text-3xl font-bold text-gray-900">€2.850</p>
              </div>
              <div>
                <p className="text-gray-600 text-sm mb-2">Over</p>
                <p className="text-3xl font-bold text-green-600">
                  €{parseInt(familyData?.income || '3500') - 2850}
                </p>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mt-8">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-600">Begroting voortgang</span>
                <span className="font-medium">81%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-green-600 h-2 rounded-full"
                  style={{ width: '81%' }}
                ></div>
              </div>
            </div>
          </div>

          {/* Your Money */}
          <div className="card">
            <h3 className="text-sm font-medium text-gray-600 mb-4">
              Je Geld
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Sparen</span>
                <span className="font-bold">€250</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Beleggingen</span>
                <span className="font-bold">€100</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Vrij te besteden</span>
                <span className="font-bold text-blue-900">€500</span>
              </div>
            </div>
          </div>
        </div>

        {/* AI Tip */}
        <div className="bg-blue-50 border-l-4 border-blue-900 p-6 rounded-lg mb-8">
          <div className="flex items-start gap-4">
            <Zap className="text-yellow-500 mt-1" size={24} />
            <div>
              <h4 className="font-bold text-gray-900 mb-2">💡 AI Tip van de dag</h4>
              <p className="text-gray-700">
                Je zou dit maand ongeveer €127 kunnen besparen door je abonnementen te controleren.
              </p>
              <button className="text-blue-900 font-bold mt-3 hover:underline">
                Hoe → 
              </button>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="card">
            <h3 className="font-bold text-gray-900 mb-4">🎯 Deze week</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <input type="checkbox" className="w-5 h-5" />
                <span>Boodschappenlijst maken</span>
              </li>
              <li className="flex items-center gap-3">
                <input type="checkbox" className="w-5 h-5" />
                <span>Verjaardag kind voorbereiden</span>
              </li>
              <li className="flex items-center gap-3">
                <input type="checkbox" className="w-5 h-5" />
                <span>Goedkoper alternatief gevonden</span>
              </li>
            </ul>
          </div>

          {/* Goals */}
          <div className="card">
            <h3 className="font-bold text-gray-900 mb-4">🏆 Je doelen</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Vakantie</span>
                  <span className="font-medium">€1.200 / €2.000</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-green-600 h-2 rounded-full"
                    style={{ width: '60%' }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Noodfonds</span>
                  <span className="font-medium">€4.500 / €6.000</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: '75%' }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="grid md:grid-cols-4 gap-4">
          <a
            href="/dashboard/budget"
            className="card text-center hover:shadow-lg transition"
          >
            <TrendingUp className="mx-auto mb-3 text-blue-900" size={28} />
            <h4 className="font-bold">💰 Budget</h4>
          </a>
          <a
            href="/dashboard/expenses"
            className="card text-center hover:shadow-lg transition"
          >
            <TrendingUp className="mx-auto mb-3 text-green-600" size={28} />
            <h4 className="font-bold">📊 Uitgaven</h4>
          </a>
          <a
            href="/dashboard/savings"
            className="card text-center hover:shadow-lg transition"
          >
            <Target className="mx-auto mb-3 text-purple-600" size={28} />
            <h4 className="font-bold">🎯 Sparen</h4>
          </a>
          <a
            href="/dashboard/ai"
            className="card text-center hover:shadow-lg transition"
          >
            <Zap className="mx-auto mb-3 text-yellow-600" size={28} />
            <h4 className="font-bold">✨ AI</h4>
          </a>
        </div>
      </main>
    </div>
  )
}
