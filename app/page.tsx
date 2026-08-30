import Link from 'next/link'
import { ChessboardCTA } from '@/src/components/primitives'

export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6">
      <Link href="/register" aria-label="Get started with KK's WarRoom">
        <ChessboardCTA size="lg" sfxKey="ui.click">
          Get Started
        </ChessboardCTA>
      </Link>
    </main>
  )
}
