/** Convierte una temperatura de grados Celsius a grados Fahrenheit. */
const celsiusAFahrenheit = (celsius: number): number => (celsius * 9) / 5 + 32

/** Convierte una temperatura de grados Fahrenheit a grados Celsius. */
const fahrenheitACelsius = (fahrenheit: number): number =>
  ((fahrenheit - 32) * 5) / 9

/**
 * Ejercicio 02: conversor de temperaturas en ambos sentidos.
 * Muestra las llamadas y sus salidas en dos bloques tipo terminal.
 */
export const ConversorTemperatura = () => {
  const celsius: number = 25
  const fahrenheit: number = 100
  const resultadoFahrenheit: number = celsiusAFahrenheit(celsius)
  const resultadoCelsius: number = fahrenheitACelsius(fahrenheit)

  return (
    <section className="group flex h-full flex-col overflow-hidden rounded-lg border border-zinc-800 bg-[#111111] transition-all duration-200 hover:border-zinc-700 hover:bg-zinc-900">
      <header className="flex items-center justify-between border-b border-zinc-800/80 px-5 py-3">
        <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em]">
          <span className="text-zinc-600">02</span>
          <span className="text-zinc-700">/</span>
          <span className="text-zinc-400">convert</span>
        </div>
        <div className="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-wider text-zinc-600">
          <span className="size-1 rounded-full bg-zinc-600 transition-colors group-hover:bg-white" />
          ready
        </div>
      </header>

      <div className="flex flex-1 flex-col p-5">
        <h2 className="text-[15px] font-semibold tracking-tight text-white">
          Conversor de temperatura
        </h2>
        <p className="mt-1 text-xs leading-5 text-zinc-500">
          Conversión bidireccional entre Celsius y Fahrenheit.
        </p>

        <div className="mt-5 overflow-hidden rounded-md border border-zinc-800 bg-zinc-950">
          <div className="border-b border-zinc-800 p-3.5">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] text-zinc-500">
                celsius_to_fahrenheit({celsius})
              </span>
              <span className="font-mono text-[9px] uppercase tracking-wider text-zinc-700">
                float
              </span>
            </div>
            <div className="mt-2 flex items-baseline justify-between gap-4">
              <span className="font-mono text-xs text-zinc-600">
                {celsius} °C
              </span>
              <span className="font-mono text-2xl font-medium tabular-nums text-white">
                {resultadoFahrenheit.toFixed(2)}
                <span className="ml-1 text-[11px] font-normal text-zinc-500">
                  °F
                </span>
              </span>
            </div>
            <p className="mt-1 font-mono text-[9px] text-zinc-700">
              // ({celsius} × 9 / 5) + 32
            </p>
          </div>

          <div className="p-3.5">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] text-zinc-500">
                fahrenheit_to_celsius({fahrenheit})
              </span>
              <span className="font-mono text-[9px] uppercase tracking-wider text-zinc-700">
                float
              </span>
            </div>
            <div className="mt-2 flex items-baseline justify-between gap-4">
              <span className="font-mono text-xs text-zinc-600">
                {fahrenheit} °F
              </span>
              <span className="font-mono text-2xl font-medium tabular-nums text-white">
                {resultadoCelsius.toFixed(2)}
                <span className="ml-1 text-[11px] font-normal text-zinc-500">
                  °C
                </span>
              </span>
            </div>
            <p className="mt-1 font-mono text-[9px] text-zinc-700">
              // ({fahrenheit} − 32) × 5 / 9
            </p>
          </div>
        </div>

        <p className="mt-3 font-mono text-[10px] text-zinc-600">
          0 °C = 32 °F · punto de congelación
        </p>
      </div>
    </section>
  )
}
