'use client'

import { useRouter } from "next/navigation";
import { useState } from "react"

interface TipProps {
  name: number,
  tip: String,
  senha: String
}

export function Tip({name, tip, senha}: TipProps) {
  const [password, setPassword] = useState("");
  const router = useRouter()

  function verifiyPassword() {
    if (password == senha) {
      router.push(`/tips/${name+1}`)
    } else {
      console.log("Errou")
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
        <div className="flex flex-col gap-5 max-w-[700px] mx-auto">
          <h1 className="text-5xl">Tip {name}</h1>
          <p className="text-xl text-slate-400 font-mono">{tip}</p>
          <label className="text-lg" htmlFor="senha">Digite a Senha: </label>
          <input value={password} onChange={e => setPassword(e.target.value)} className="rounded-md py-4 px-3 dark:text-white dark:bg-slate-800 bg-slate-300" type="text" name="input-senha" id="senha" />
          <button onClick={verifiyPassword} className="bg-green-500 rounded-md py-4 px-3 w-40">Enviar</button>
        </div>
      </div>
    </main>
  )
}