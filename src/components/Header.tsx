import Image from 'next/image'
import Logo from '../assets/brave-logo.png'
import Link from 'next/link'

export function Header() {
  return (
    <header className="flex flex-col justify-between items-center p-8 py-1">
      <Image className="p-8 max-w-40 cursor-pointer" src={Logo} alt="Logo do Projeto de Inglês. É a logo do Navegador Brave" />
      <h1 className="text-3xl sm:text-5xl font-bold">NOME EQUIPE</h1>
    </header>
  )
}