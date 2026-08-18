'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ChevronRight } from 'lucide-react'

export default function Onboarding() {
  const [step, setStep] = useState(1)
  const [familySize, setFamilySize] = useState('')
  const [income, setIncome] = useState('')
  const [goal, setGoal] = useState('')
  const router = useRouter()

  const nextStep = () => {
    if (step < 5) {
      setStep(step + 1)
    }
  }

  const finish = () => {
    localStorage.setItem('onboardingStep', '5')
    localStorage.setItem('familyData', JSON.stringify({
      familySize,
      income,
      goal,
    }))
    router.push('/dashboard')
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Progress */}
        <div className="mb-8">
          <div className="flex gap-2 mb-4">
            {[1, 2, 3, 4, 5].map((s) => (
              <div
                key={s}
                className={`h-2 flex-1 rounded-full ${
                  s <= step ? 'bg-blue-900' : 'bg-gray-200'
                }`}
              />
            ))}
          </div>
          <p className="text-sm text-gray-600">Stap {step} van 5</p>
        </div>

        {/* Step 1 */}
        {step === 1 && (
          <div className="card">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Hoe groot is je gezin?
            </h2>
            <div className="space-y-3">
              {['1-2 personen', '3-4 personen', '5+ personen'].map((option) => (
                <button
                  key={option}
                  onClick={() => setFamilySize(option)}
                  className={`w-full p-4 rounded-lg border-2 font-medium transition ${
                    familySize === option
                      ? 'border-blue-900 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
            <button
              onClick={nextStep}
              disabled={!familySize}
              className="w-full mt-8 bg-blue-900 text-white py-3 rounded-lg font-bold hover:bg-blue-800 disabled:opacity-50"
            >
              Volgende
            </button>
          </div>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <div className="card">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Maandelijks huishoudinkomen
            </h2>
            <input
              type="number"
              value={income}
              onChange={(e) => setIncome(e.target.value)}
              placeholder="€ 3.500"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-blue-900"
            />
            <button
              onClick={nextStep}
              disabled={!income}
              className="w-full bg-blue-900 text-white py-3 rounded-lg font-bold hover:bg-blue-800 disabled:opacity-50"
            >
              Volgende
            </button>
          </div>
        )}

        {/* Step 3 */}
        {step === 3 && (
          <div className="card">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Waar wil je dit jaar voor sparen?
            </h2>
            <div className="space-y-3">
              {['Vakantie', 'Noodfonds', 'Auto', 'Huisrenovatie', 'Ander'].map(
                (option) => (
                  <button
                    key={option}
                    onClick={() => setGoal(option)}
                    className={`w-full p-4 rounded-lg border-2 font-medium transition ${
                      goal === option
                        ? 'border-blue-900 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    {option}
                  </button>
                )
              )}
            </div>
            <button
              onClick={nextStep}
              disabled={!goal}
              className="w-full mt-8 bg-blue-900 text-white py-3 rounded-lg font-bold hover:bg-blue-800 disabled:opacity-50"
            >
              Volgende
            </button>
          </div>
        )}

        {/* Step 4 */}
        {step === 4 && (
          <div className="card">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Bijna klaar!
            </h2>
            <p className="text-gray-600 mb-6">
              We creëren je persoonlijke plan...
            </p>
            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <p className="text-sm text-gray-600">
                ✅ Gezinsgrootte: <strong>{familySize}</strong>
              </p>
              <p className="text-sm text-gray-600 mt-2">
                ✅ Inkomen: <strong>€{income}</strong>
              </p>
              <p className="text-sm text-gray-600 mt-2">
                ✅ Doel: <strong>{goal}</strong>
              </p>
            </div>
            <button
              onClick={nextStep}
              className="w-full bg-blue-900 text-white py-3 rounded-lg font-bold hover:bg-blue-800"
            >
              Starten
            </button>
          </div>
        )}

        {/* Step 5 */}
        {step === 5 && (
          <div className="card text-center">
            <div className="text-5xl mb-4">🎉</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Welkom in GEZINSLIM!
            </h2>
            <p className="text-gray-600 mb-8">
              Je account is klaar. Laten we beginnen!
            </p>
            <button
              onClick={finish}
              className="w-full bg-green-600 text-white py-3 rounded-lg font-bold hover:bg-green-700"
            >
              Naar je dashboard
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
