import { Send } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { ChatBubble } from './components/ChatBubble'
import { useAssistant } from './useAssistant'

export function AssistantApp() {
  const { messages, input, setInput, send } = useAssistant()
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: 'smooth',
    })
  }, [messages])

  return (
    <div className="flex h-full flex-col">
      <div ref={scrollRef} className="flex-1 space-y-2 overflow-y-auto p-4">
        {messages.map((message) => (
          <ChatBubble key={message.id} message={message} />
        ))}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          send()
        }}
        className="flex items-center gap-2 border-t border-white/10 p-3"
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Pregunta sobre Eduardo..."
          aria-label="Pregunta para el asistente"
          autoComplete="off"
          className="flex-1 rounded-full bg-white/8 px-3.5 py-2 text-sm text-foreground outline-none ring-1 ring-white/10 placeholder:text-muted-foreground"
        />
        <Button type="submit" size="icon" aria-label="Enviar">
          <Send className="size-4" />
        </Button>
      </form>
    </div>
  )
}
