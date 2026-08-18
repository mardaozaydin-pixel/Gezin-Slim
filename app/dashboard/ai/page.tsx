'use client'

import Link from 'next/link'
import { ArrowLeft, Send } from 'lucide-react'
import { useState } from 'react'

export default function AI() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'assistant',
      text: 'Hallo! Ik ben je GEZINSLIM AI assistent. Hoe kan ik je vandaag helpen? 💬',
    },
  ])
  const [input, setInput] = useState('')

  const handleSend = () => {
    if (!input.trim()) return

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      type: 'user',
      text: input,
    }

    setMessages([...messages, userMessage])

    // Simulate AI response
    setTimeout(() => {
      const responses: { [key: string]: string } = {
        'sparen': 'Je kunt ongeveer €127 per maand besparen door je abonnementen te checken. Netflix, Spotify en Fitbit kosten samen €49.97/maand.',
        'budget': 'Je budget voor deze maand is 81% gebruikt. Je hebt nog ongeveer €650 over.',
        'boodschappen': 'Voor een gezin van 4 personen kunnen we een weekmenu maken onder €120. Wat zijn je voorkeuren?',
        'vakantie': 'Om €2000 voor vakantie te bereiken tegen juli 2024, moet je €250/maand sparen. Je zit op schema!',
        'default': 'Dat is een goeie vraag! Ik kan je helpen met budgetten, sparen, maaltijdplanning en meer. Wat wil je weten?',
      }

      const key = Object.keys(responses).find(k =>
        input.toLowerCase().includes(k)
      ) || 'default'

      const aiMessage = {
        id: messages.length + 2,
        type: 'assistant',
        text: responses[key],
      }

      setMessages((prev) => [...prev, aiMessage])
    }, 500)

    setInput('')
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <Link href="/dashboard" className="text-gray-600 hover:text-gray-900">
            <ArrowLeft size={24} />
          </Link>
          <h1 className="text-2xl font-bold text-blue-900">AI Assistent</h1>
        </div>
      </header>

      {/* Chat Area */}
      <main className="flex-1 container mx-auto px-4 py-8 flex flex-col">
        <div className="flex-1 space-y-4 mb-6">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.type === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              <div
                className={`max-w-xs lg:max-w-md px-4 py-3 rounded-lg ${
                  message.type === 'user'
                    ? 'bg-blue-900 text-white'
                    : 'bg-gray-200 text-gray-900'
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Suggestions */}
        <div className="mb-6 space-y-2">
          <p className="text-sm text-gray-600 font-medium">Veelgestelde vragen:</p>
          <div className="flex flex-wrap gap-2">
            {[
              'Hoe spaar ik €200?',
              'Boodschappenlijst',
              'Weekmenu',
              'Budgettips',
            ].map((suggestion) => (
              <button
                key={suggestion}
                onClick={() => setInput(suggestion)}
                className="px-3 py-2 bg-gray-200 hover:bg-gray-300 text-gray-900 rounded-full text-sm font-medium transition"
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>

        {/* Input */}
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Stel een vraag..."
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
          />
          <button
            onClick={handleSend}
            className="bg-blue-900 text-white p-3 rounded-lg hover:bg-blue-800 transition"
          >
            <Send size={20} />
          </button>
        </div>
      </main>
    </div>
  )
}
