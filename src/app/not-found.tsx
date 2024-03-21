import Link from 'next/link'

export const metadata = {
  title: '404... Repito, 404. Não encontrado!',
}

export default function NotFound() {
  return (
    <>
      <main className="p-24">
        <h1 className="font-sans text-8xl font-bold text-orange-500">
          404...
        </h1>
        <h2 className="mb-8 font-sans text-3xl">
          Repito, 404. Não encontrado!
        </h2>
        <span className="font-sans text-sm font-bold uppercase text-orange-500">
          Erro:
        </span>
        <p className="mb-12 mt-2 font-sans text-base">
          Não foi possível retornar o solicitado. A página que você requisitou
          não foi encontrada.
        </p>
        <Link
          href="/"
          className="rounded-lg bg-orange-500 p-4 font-sans hover:bg-orange-600"
        >
          Retornar à Home
        </Link>
      </main>
    </>
  )
}