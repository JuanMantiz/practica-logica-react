/** Calcula el índice de masa corporal; si la altura no es válida, devuelve 0. */
const calcularIMC = (peso: number, altura: number): number =>
  altura > 0 ? peso / (altura * altura) : 0

/** Clasifica un IMC según los rangos establecidos por la OMS. */
const clasificarIMC = (imc: number): string => {
  if (imc < 18.5) {
    return 'Bajo peso'
  } else if (imc < 25) {
    return 'Normal'
  } else if (imc < 30) {
    return 'Sobrepeso'
  } else {
    return 'Obesidad'
  }
}

/**
 * Ejercicio 03: calculadora de índice de masa corporal.
 * Calcula el IMC de 70 kg y 1.75 m y muestra su clasificación.
 */
export const CalculadoraIMC = () => {
  const peso: number = 70
  const altura: number = 1.75
  const imc: number = calcularIMC(peso, altura)
  const clasificacion: string = clasificarIMC(imc)

  return (
    <section className="group flex h-full flex-col overflow-hidden rounded-lg border border-zinc-800 bg-[#111111] transition-all duration-200 hover:border-zinc-700 hover:bg-zinc-900">
      <header className="flex items-center justify-between border-b border-zinc-800/80 px-5 py-3">
        <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em]">
          <span className="text-zinc-600">03</span>
          <span className="text-zinc-700">/</span>
          <span className="text-zinc-400">imc</span>
        </div>
        <div className="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-wider text-zinc-600">
          <span className="size-1 rounded-full bg-zinc-600 transition-colors group-hover:bg-white" />
          ready
        </div>
      </header>

      <div className="flex flex-1 flex-col p-5">
        <h2 className="text-[15px] font-semibold tracking-tight text-white">
          Calculadora de IMC
        </h2>
        <p className="mt-1 text-xs leading-5 text-zinc-500">
          Índice de masa corporal y clasificación por rangos.
        </p>

        <div className="mt-5 grid grid-cols-2 gap-2">
          <div className="rounded-md border border-zinc-800 bg-zinc-950 px-3 py-2.5">
            <p className="font-mono text-[9px] uppercase tracking-wider text-zinc-600">
              peso
            </p>
            <p className="mt-1 font-mono text-sm text-zinc-200">
              {peso} <span className="text-[10px] text-zinc-600">kg</span>
            </p>
          </div>
          <div className="rounded-md border border-zinc-800 bg-zinc-950 px-3 py-2.5">
            <p className="font-mono text-[9px] uppercase tracking-wider text-zinc-600">
              altura
            </p>
            <p className="mt-1 font-mono text-sm text-zinc-200">
              {altura} <span className="text-[10px] text-zinc-600">m</span>
            </p>
          </div>
        </div>

        <div className="mt-2 rounded-md border border-zinc-800 bg-zinc-950 p-4">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-wider text-zinc-600">
                imc
              </p>
              <p className="mt-1 font-mono text-4xl font-medium tracking-tight text-white">
                {imc.toFixed(2)}
              </p>
              <p className="mt-1 font-mono text-[9px] text-zinc-600">
                peso / altura²
              </p>
            </div>
            <span className="rounded-full bg-white px-2.5 py-1 font-mono text-[9px] font-medium uppercase tracking-wider text-black">
              {clasificacion}
            </span>
          </div>

          <div className="mt-4 grid grid-cols-4 gap-1">
            <div
              className={`h-1 rounded-full ${
                clasificacion === 'Bajo peso' ? 'bg-white' : 'bg-zinc-800'
              }`}
            />
            <div
              className={`h-1 rounded-full ${
                clasificacion === 'Normal' ? 'bg-white' : 'bg-zinc-800'
              }`}
            />
            <div
              className={`h-1 rounded-full ${
                clasificacion === 'Sobrepeso' ? 'bg-white' : 'bg-zinc-800'
              }`}
            />
            <div
              className={`h-1 rounded-full ${
                clasificacion === 'Obesidad' ? 'bg-white' : 'bg-zinc-800'
              }`}
            />
          </div>

          <div className="mt-2 grid grid-cols-4 gap-1 text-center">
            <div>
              <p
                className={`font-mono text-[8px] ${
                  clasificacion === 'Bajo peso'
                    ? 'text-zinc-200'
                    : 'text-zinc-600'
                }`}
              >
                Bajo peso
              </p>
              <p className="mt-0.5 font-mono text-[8px] text-zinc-700">
                &lt; 18.5
              </p>
            </div>
            <div>
              <p
                className={`font-mono text-[8px] ${
                  clasificacion === 'Normal'
                    ? 'text-zinc-200'
                    : 'text-zinc-600'
                }`}
              >
                Normal
              </p>
              <p className="mt-0.5 font-mono text-[8px] text-zinc-700">
                18.5–24.9
              </p>
            </div>
            <div>
              <p
                className={`font-mono text-[8px] ${
                  clasificacion === 'Sobrepeso'
                    ? 'text-zinc-200'
                    : 'text-zinc-600'
                }`}
              >
                Sobrepeso
              </p>
              <p className="mt-0.5 font-mono text-[8px] text-zinc-700">
                25–29.9
              </p>
            </div>
            <div>
              <p
                className={`font-mono text-[8px] ${
                  clasificacion === 'Obesidad'
                    ? 'text-zinc-200'
                    : 'text-zinc-600'
                }`}
              >
                Obesidad
              </p>
              <p className="mt-0.5 font-mono text-[8px] text-zinc-700">
                ≥ 30
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
