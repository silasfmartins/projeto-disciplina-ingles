'use client'

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react"
import toast from "react-hot-toast";

interface TipProps {
  name: number,
  tip1: String,
  tip2: String,
  tip3: String,
  tip4?: String,
  senha: String
}

export function Tip({name, tip1, tip2, tip3, tip4, senha}: TipProps) {
  const [password, setPassword] = useState("");
  const router = useRouter()

  function verifiyPassword(e: FormEvent) {
    if (password.toUpperCase() == senha.toUpperCase()) {
      e.preventDefault();
      router.push(`/tips/${name+1}`)
    } else {
      toast.error('Senha inválida. Tente novamente.')
    }
  }

  return (
    <main className="min-h-screen p-8">
      <div className="flex flex-col gap-4 dark:bg-slate-900 bg-slate-200 mx-auto max-w-[1100px] rounded-xl min-h-[480px] shadow-sm border dark:border-zinc-700 border-black/20 overflow-hidden p-8">
        <div className="flex gap-2 group">
          <button className="w-3 h-3 rounded-full bg-zinc-300 group-hover:bg-red-400" />
          <button className="w-3 h-3 rounded-full bg-zinc-300 group-hover:bg-yellow-400" />
          <button className="w-3 h-3 rounded-full bg-zinc-300 group-hover:bg-green-400" />
        </div>
        <form onSubmit={verifiyPassword} className="flex flex-col gap-5 max-w-[700px] mx-auto">
          <h1 className="text-5xl">Tip {name}</h1>
          <ul className="text-xl text-slate-400 font-mono">
            <li>{tip1}</li>
            <li>{tip2}</li>
            <li>{tip3}</li>
            <li>{tip4}</li>
          </ul>
          <label className="text-lg" htmlFor="senha">Type the password: </label>
          <span className="text-base text-zinc-800 dark:text-zinc-300">The password is the name of the object that the next hint was on.<br>Note: Enter the password in English.</span>
          <input value={password} onChange={e => setPassword(e.target.value)} className="rounded-md py-4 px-3 dark:text-white dark:bg-slate-800 bg-slate-300" type="text" name="input-senha" id="senha" />
          <button className="bg-green-600 rounded-md py-4 px-3 w-40 text-white transition-all hover:bg-emerald-500">Send</button>
        </form>
      </div>
    </main>
  )
}
