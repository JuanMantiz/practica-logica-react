const NUMEROS: number[] = [8, 3, 15, 7, 22, 11, 4]

/** Calcula el promedio de un arreglo de números; devuelve 0 si está vacío. */
const calcularPromedio = (numeros: number[]): number => {
  if (numeros.length === 0) {
    return 0
  }

  const suma: number = numeros.reduce(
    (acumulado: number, numero: number): number => acumulado + numero,
    0,
  )
  return suma / numeros.length
}

/** Encuentra el valor máximo de un arreglo; devuelve 0 si está vacío. */
const encontrarMaximo = (numeros: number[]): number => {
  if (numeros.length === 0) {
    return 0
  }
  return Math.max(...numeros)
}

/** Encuentra el valor mínimo de un arreglo; devuelve 0 si está vacío. */
const encontrarMinimo = (numeros: number[]): number => {
  if (numeros.length === 0) {
    return 0
  }
  return Math.min(...numeros)
}

/**
 * Ejercicio 06: estadísticas de un arreglo numérico.
 * Calcula promedio, máximo y mínimo sobre siete valores.
 */
export const EstadisticasArreglo = () => {
  const promedio: number = calcularPromedio(NUMEROS)
  const maximo: number = encontrarMaximo(NUMEROS)
  const minimo: number = encontrarMinimo(NUMEROS)

  return (
    <section className="group flex h-full flex-col overflow-hidden rounded-lg border border-zinc-800 bg-[#111111] transition-all duration-200 hover:border-zinc-700 hover:bg-zinc-900">
      <header className="flex items-center justify-between border-b border-zinc-800/80 px-5 py-3">
        <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em]">
          <span className="text-zinc-600">06</span>
          <span className="text-zinc-700">/</span>
          <span className="text-zinc-400">stats</span>
        </div>
        <div className="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-wider text-zinc-600">
          <span className="size-1 rounded-full bg-zinc-600 transition-colors group-hover:bg-white" />
          ready
        </div>
      </header>

      <div className="flex flex-1 flex-col p-5">
        <h2 className="text-[15px] font-semibold tracking-tight text-white">
          Estadísticas de arreglo
        </h2>
        <p className="mt-1 text-xs leading-5 text-zinc-500">
          Promedio, máximo y mínimo calculados sobre un conjunto de números.
        </p>

        <div className="mt-5 rounded-md border border-zinc-800 bg-zinc-950 p-3">
          <div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-wider text-zinc-600">
            <span>input // number[]</span>
            <span className="text-zinc-700">n={NUMEROS.length}</span>
          </div>

          <div className="mt-2 flex flex-wrap gap-1.5">
            {NUMEROS.map((numero: number, indice: number) => (
              <span
                key={indice}
                className={`flex size-8 items-center justify-center rounded border font-mono text-[10px] tabular-nums ${
                  numero === maximo
                    ? 'border-zinc-600 bg-zinc-800 text-white'
                    : numero === minimo
                      ? 'border-zinc-700 bg-zinc-900 text-zinc-300'
                      : 'border-zinc-800 bg-black text-zinc-500'
                }`}
              >
                {numero}
              </span>
            ))}
          </div>

          <div className="mt-2.5 flex items-center gap-3 border-t border-zinc-800/70 pt-2 font-mono text-[9px] text-zinc-600">
            <span>
              <span className="text-zinc-300">↑</span> max
            </span>
            <span>
              <span className="text-zinc-400">↓</span> min
            </span>
          </div>
        </div>

        <div className="mt-2 grid grid-cols-3 divide-x divide-zinc-800 overflow-hidden rounded-md border border-zinc-800 bg-zinc-950">
          <div className="px-2 py-3 text-center">
            <p className="font-mono text-xl font-medium tabular-nums text-white">
              {promedio.toFixed(2)}
            </p>
            <p className="mt-1 font-mono text-[8px] uppercase tracking-wider text-zinc-600">
              promedio
            </p>
            <p className="mt-0.5 font-mono text-[8px] text-zinc-700">suma / n</p>
          </div>
          <div className="px-2 py-3 text-center">
            <p className="font-mono text-xl font-medium tabular-nums text-white">
              {maximo}
            </p>
            <p className="mt-1 font-mono text-[8px] uppercase tracking-wider text-zinc-600">
              máximo
            </p>
            <p className="mt-0.5 font-mono text-[8px] text-zinc-700">
              Math.max()
            </p>
          </div>
          <div className="px-2 py-3 text-center">
            <p className="font-mono text-xl font-medium tabular-nums text-white">
              {minimo}
            </p>
            <p className="mt-1 font-mono text-[8px] uppercase tracking-wider text-zinc-600">
              mínimo
            </p>
            <p className="mt-0.5 font-mono text-[8px] text-zinc-700">
              Math.min()
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
