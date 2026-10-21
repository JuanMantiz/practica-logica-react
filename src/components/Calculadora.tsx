/** Suma dos números y devuelve el resultado. */
const sumar = (a: number, b: number): number => a + b

/** Resta el segundo número al primero y devuelve el resultado. */
const restar = (a: number, b: number): number => a - b

/** Multiplica dos números y devuelve el resultado. */
const multiplicar = (a: number, b: number): number => a * b

/** Divide dos números; si el divisor es cero, devuelve 0. */
const dividir = (a: number, b: number): number => (b === 0 ? 0 : a / b)

/**
 * Ejercicio 01: calculadora con cuatro operaciones básicas.
 * Cada operación se muestra directamente en un bloque tipo terminal.
 */
export const Calculadora = () => {
  const a: number = 15
  const b: number = 4

  return (
    <section className="group flex h-full flex-col overflow-hidden rounded-lg border border-zinc-800 bg-[#111111] transition-all duration-200 hover:border-zinc-700 hover:bg-zinc-900">
      <header className="flex items-center justify-between border-b border-zinc-800/80 px-5 py-3">
        <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em]">
          <span className="text-zinc-600">01</span>
          <span className="text-zinc-700">/</span>
          <span className="text-zinc-400">calc</span>
        </div>
        <div className="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-wider text-zinc-600">
          <span className="size-1 rounded-full bg-zinc-600 transition-colors group-hover:bg-white" />
          ready
        </div>
      </header>

      <div className="flex flex-1 flex-col p-5">
        <h2 className="text-[15px] font-semibold tracking-tight text-white">
          Calculadora
        </h2>
        <p className="mt-1 text-xs leading-5 text-zinc-500">
          Cuatro operaciones puras y división protegida contra cero.
        </p>

        <div className="mt-5 overflow-hidden rounded-md border border-zinc-800 bg-zinc-950">
          <div className="flex items-center justify-between border-b border-zinc-800 px-3 py-2">
            <span className="font-mono text-[9px] uppercase tracking-wider text-zinc-600">
              operaciones.ts
            </span>
            <span className="font-mono text-[9px] text-zinc-700">output</span>
          </div>

          <div className="divide-y divide-zinc-800/70">
            <div className="flex items-center justify-between gap-4 px-3 py-2.5">
              <span className="font-mono text-[11px] text-zinc-500">
                sumar({a}, {b})
              </span>
              <span className="font-mono text-sm tabular-nums text-white">
                {sumar(a, b)}
              </span>
            </div>
            <div className="flex items-center justify-between gap-4 px-3 py-2.5">
              <span className="font-mono text-[11px] text-zinc-500">
                restar({a}, {b})
              </span>
              <span className="font-mono text-sm tabular-nums text-white">
                {restar(a, b)}
              </span>
            </div>
            <div className="flex items-center justify-between gap-4 px-3 py-2.5">
              <span className="font-mono text-[11px] text-zinc-500">
                multiplicar({a}, {b})
              </span>
              <span className="font-mono text-sm tabular-nums text-white">
                {multiplicar(a, b)}
              </span>
            </div>
            <div className="flex items-center justify-between gap-4 px-3 py-2.5">
              <span className="font-mono text-[11px] text-zinc-500">
                dividir({a}, {b})
              </span>
              <span className="font-mono text-sm tabular-nums text-white">
                {dividir(a, b).toFixed(2)}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-3 flex items-center justify-between rounded-md border border-dashed border-zinc-800 px-3 py-2">
          <span className="font-mono text-[10px] text-zinc-600">
            dividir({a}, 0)
          </span>
          <span className="font-mono text-[10px] text-zinc-400">
            {dividir(a, 0)} // safe
          </span>
        </div>
      </div>
    </section>
  )
}
