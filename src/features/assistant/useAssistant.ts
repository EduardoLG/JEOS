import { useState } from 'react'
import {
  assistantFallback,
  assistantGreeting,
  assistantResponses,
} from '@/data/assistantResponses'

export interface ChatMessage {
  id: number
  role: 'user' | 'assistant'
  text: string
}

let messageId = 0
function nextId() {
  messageId += 1
  return messageId
}

const DIACRITICS_PATTERN = new RegExp('[\\u0300-\\u036f]', 'g')

function normalize(text: string) {
  return text.toLowerCase().normalize('NFD').replace(DIACRITICS_PATTERN, '')
}

function findAnswer(question: string): string {
  const normalized = normalize(question)
  const match = assistantResponses.find((entry) =>
    entry.keywords.some((keyword) => normalized.includes(normalize(keyword))),
  )
  return match?.answer ?? assistantFallback
}

export function useAssistant() {
  const [messages, setMessages] = useState<ChatMessage[]>(() => [
    { id: nextId(), role: 'assistant', text: assistantGreeting },
  ])
  const [input, setInput] = useState('')

  function send() {
    const question = input.trim()
    if (!question) return

    const answer = findAnswer(question)
    setMessages((prev) => [
      ...prev,
      { id: nextId(), role: 'user', text: question },
      { id: nextId(), role: 'assistant', text: answer },
    ])
    setInput('')
  }

  return { messages, input, setInput, send }
}
