import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center text-center px-4">
      <h2 className="text-6xl font-bold mb-4 text-primary">404</h2>
      <p className="text-xl font-medium mb-2">Seite nicht gefunden</p>
      <p className="text-muted-foreground mb-8 max-w-md">
        Entschuldigung, die von dir aufgerufene Seite existiert leider nicht oder wurde verschoben.
      </p>
      <Link
        href="/"
        className='underline '
      >
        Zurück zur Startseite
      </Link>
    </main>
  )
}