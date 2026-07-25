import { cn } from '@/lib/utils'
import type { ChatMessage } from '../useAssistant'

interface ChatBubbleProps {
  message: ChatMessage
}

export function ChatBubble({ message }: ChatBubbleProps) {
  const isUser = message.role === 'user'

  return (
    <div className={cn('flex', isUser ? 'justify-end' : 'justify-start')}>
      <div
        className={cn(
          'max-w-[85%] rounded-2xl px-3.5 py-2 text-sm leading-relaxed',
          isUser
            ? 'bg-primary text-primary-foreground'
            : 'bg-white/8 text-foreground/90 ring-1 ring-white/10',
        )}
      >
        {message.text}
      </div>
    </div>
  )
}
