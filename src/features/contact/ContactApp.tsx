import { contactLinks } from '@/data/contact'
import { ContactRow } from './components/ContactRow'

export function ContactApp() {
  return (
    <div className="flex h-full flex-col justify-center gap-1 p-4">
      {contactLinks.map((link) => (
        <ContactRow key={link.id} link={link} />
      ))}
    </div>
  )
}
