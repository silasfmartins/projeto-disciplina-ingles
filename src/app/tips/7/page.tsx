export default function Tip7() {
  return (
    <main className="min-h-screen p-8">
      <div className="flex flex-col gap-4 dark:bg-slate-900 bg-slate-200 mx-auto max-w-[1100px] rounded-xl shadow-sm border dark:border-zinc-700 border-black/20 overflow-hidden p-8">
        <div className="flex gap-2 group">
          <button className="w-3 h-3 rounded-full bg-zinc-300 group-hover:bg-red-400" />
          <button className="w-3 h-3 rounded-full bg-zinc-300 group-hover:bg-yellow-400" />
          <button className="w-3 h-3 rounded-full bg-zinc-300 group-hover:bg-green-400" />
        </div>
        <div className="flex flex-col gap-5 max-w-[700px] mx-auto text-center">
          <h1 className="text-xl sm:text-5xl">Congratulations</h1>
          <p className="text-lg text-slate-400 font-mono">You got the prize!</p>
        </div>
      </div>
    </main>
  )
}
