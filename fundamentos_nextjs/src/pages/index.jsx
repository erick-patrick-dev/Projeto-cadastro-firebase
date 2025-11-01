import Link from "next/link"

export default function Inicio() {
  return (
    <div>
      <Link href="/estiloso">Estiloso</Link>
      <Link href="/exemplo">Ir para exemplo</Link>
      <Link href="/jsx">JSX</Link>
      <Link href="/api/hello">Teste API</Link>
    </div>
  )
}