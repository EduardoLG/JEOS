import { useEffect, useRef } from 'react'
import { useTerminal } from './useTerminal'

const PROMPT = 'eduardo@jeos ~ %'

export function TerminalApp() {
  const { lines, input, setInput, submit } = useTerminal()
  const scrollRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight })
  }, [lines])

  return (
    <div
      className="flex h-full flex-col bg-black/40 p-4 font-mono text-[13px]"
      onClick={() => inputRef.current?.focus()}
    >
      <div ref={scrollRef} className="flex-1 space-y-1 overflow-y-auto">
        {lines.map((line) => (
          <div
            key={line.id}
            className={
              line.type === 'error'
                ? 'text-red-400'
                : line.type === 'input'
                  ? 'text-foreground'
                  : 'whitespace-pre-wrap text-foreground/70'
            }
          >
            {line.type === 'input' ? `${PROMPT} ${line.text}` : line.text}
          </div>
        ))}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          submit()
        }}
        className="mt-2 flex items-center gap-2"
      >
        <span className="shrink-0 text-primary">{PROMPT}</span>
        <input
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          aria-label="Comando de terminal"
          autoFocus
          spellCheck={false}
          autoComplete="off"
          className="flex-1 bg-transparent text-foreground caret-primary outline-none"
        />
      </form>
    </div>
  )
}
