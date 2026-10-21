/** Determina si una persona es mayor de edad (18 años o más). */
const esMayorDeEdad = (edad: number): boolean => edad >= 18

/** Genera el mensaje correspondiente según la edad de la persona. */
const obtenerMensaje = (edad: number): string =>
  esMayorDeEdad(edad) ? 'Puede votar' : `Le faltan ${18 - edad} años`

/**
 * Ejercicio 04: validador de edad con recorrido de un arreglo.
 * Evalúa las edades 15, 18, 25 y 12 mediante map.
 */
export const ValidadorEdad = () => {
  const edades: number[] = [15, 18, 25, 12]
  let totalMayores: number = 0

  for (const edad of edades) {
    if (esMayorDeEdad(edad)) {
      totalMayores += 1
    }
  }

  return (
    <section className="group flex h-full flex-col overflow-hidden rounded-lg border border-zinc-800 bg-[#111111] transition-all duration-200 hover:border-zinc-700 hover:bg-zinc-900">
      <header className="flex items-center justify-between border-b border-zinc-800/80 px-5 py-3">
        <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em]">
          <span className="text-zinc-600">04</span>
          <span className="text-zinc-700">/</span>
          <span className="text-zinc-400">age-gate</span>
        </div>
        <div className="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-wider text-zinc-600">
          <span className="size-1 rounded-full bg-zinc-600 transition-colors group-hover:bg-white" />
          ready
        </div>
      </header>

      <div className="flex flex-1 flex-col p-5">
        <h2 className="text-[15px] font-semibold tracking-tight text-white">
          Validador de edad
        </h2>
        <p className="mt-1 text-xs leading-5 text-zinc-500">
          Acceso a voto evaluado sobre cuatro edades distintas.
        </p>

        <div className="mt-5 overflow-hidden rounded-md border border-zinc-800 bg-zinc-950">
          {edades.map((edad: number) => {
            const esMayor: boolean = esMayorDeEdad(edad)

            return (
              <div
                key={edad}
                className="flex items-center gap-3 border-b border-zinc-800/70 px-3 py-2.5 last:border-b-0"
              >
                <span
                  className={`flex size-7 shrink-0 items-center justify-center rounded-md font-mono text-[11px] ${
                    esMayor
                      ? 'bg-white text-black'
                      : 'border border-zinc-800 bg-zinc-900 text-zinc-500'
                  }`}
                >
                  {edad}
                </span>
                <div className="min-w-0 flex-1">
                  <p
                    className={`text-xs ${
                      esMayor ? 'text-zinc-200' : 'text-zinc-400'
                    }`}
                  >
                    {obtenerMensaje(edad)}
                  </p>
                  <p className="mt-0.5 font-mono text-[9px] uppercase tracking-wider text-zinc-600">
                    {esMayor ? 'access granted' : 'access denied'}
                  </p>
                </div>
                <span
                  className={`font-mono text-[10px] ${
                    esMayor ? 'text-white' : 'text-zinc-600'
                  }`}
                >
                  {esMayor ? 'true' : 'false'}
                </span>
              </div>
            )
          })}
        </div>

        <div className="mt-3 flex items-center justify-between font-mono text-[10px] text-zinc-600">
          <span>filter(esMayorDeEdad).length</span>
          <span className="text-zinc-300">
            {totalMayores}/{edades.length}
          </span>
        </div>
      </div>
    </section>
  )
}
