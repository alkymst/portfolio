import { type Metadata } from 'next'

import { SimpleLayout } from '@/components/SimpleLayout'

export const metadata: Metadata = {
  title: 'Contact Success',
  description: 'Thanks for contacting me.',
}

export default function ThankYou() {
  return (
    <SimpleLayout
      title="Thanks for contacting me."
      intro="I’ll send you a response as soon as I can. You can unsubscribe at any time, no hard feelings."
    />
  )
}
