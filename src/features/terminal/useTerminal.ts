import { useState } from 'react'
import { commands } from './commands'

export interface TerminalLine {
  id: number
  type: 'input' | 'output' | 'error'
  text: string
}

let lineId = 0
function nextId() {
  lineId += 1
  return lineId
}

const WELCOME_LINES = [
  'JEOS Terminal — escribe "help" para ver los comandos disponibles.',
]

export function useTerminal() {
  const [lines, setLines] = useState<TerminalLine[]>(() =>
    WELCOME_LINES.map((text) => ({ id: nextId(), type: 'output', text })),
  )
  const [input, setInput] = useState('')

  function runCommand(rawInput: string) {
    const trimmed = rawInput.trim()
    const inputLine: TerminalLine = {
      id: nextId(),
      type: 'input',
      text: rawInput,
    }

    if (trimmed === '') {
      setLines((prev) => [...prev, inputLine])
      return
    }

    if (trimmed.toLowerCase() === 'clear') {
      setLines([])
      return
    }

    const command = commands[trimmed.toLowerCase()]
    if (!command) {
      setLines((prev) => [
        ...prev,
        inputLine,
        {
          id: nextId(),
          type: 'error',
          text: `command not found: ${trimmed}. Escribe "help" para ver los comandos disponibles.`,
        },
      ])
      return
    }

    const output = command().map((text) => ({
      id: nextId(),
      type: 'output' as const,
      text,
    }))
    setLines((prev) => [...prev, inputLine, ...output])
  }

  function submit() {
    runCommand(input)
    setInput('')
  }

  return { lines, input, setInput, submit }
}
