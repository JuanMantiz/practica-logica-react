const ALUMNOS = [
  { nombre: 'Ana', calificaciones: [95, 88, 92] },
  { nombre: 'Luis', calificaciones: [70, 65, 72] },
  { nombre: 'María', calificaciones: [85, 90, 88] },
]

/** Calcula el promedio de las calificaciones de un alumno. */
const calcularPromedio = (calificaciones: number[]): number => {
  if (calificaciones.length === 0) {
    return 0
  }

  const suma: number = calificaciones.reduce(
    (acumulado: number, calificacion: number): number =>
      acumulado + calificacion,
    0,
  )
  return suma / calificaciones.length
}

/** Convierte un promedio numérico en una letra de calificación. */
const obtenerLetra = (promedio: number): string => {
  if (promedio >= 90) {
    return 'A'
  } else if (promedio >= 80) {
    return 'B'
  } else if (promedio >= 70) {
    return 'C'
  } else if (promedio >= 60) {
    return 'D'
  } else {
    return 'F'
  }
}

/** Indica si un alumno está aprobado con un promedio mínimo de 70. */
const estaAprobado = (promedio: number): boolean => promedio >= 70

/**
 * Ejercicio 09: sistema de calificaciones.
 * Calcula promedios, asigna letras y determina el estado de cada alumno.
 */
export const SistemaCalificaciones = () => {
  return (
    <section className="group flex h-full flex-col overflow-hidden rounded-lg border border-zinc-800 bg-[#111111] transition-all duration-200 hover:border-zinc-700 hover:bg-zinc-900">
      <header className="flex items-center justify-between border-b border-zinc-800/80 px-5 py-3">
        <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em]">
          <span className="text-zinc-600">09</span>
          <span className="text-zinc-700">/</span>
          <span className="text-zinc-400">grades</span>
        </div>
        <div className="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-wider text-zinc-600">
          <span className="size-1 rounded-full bg-zinc-600 transition-colors group-hover:bg-white" />
          ready
        </div>
      </header>

      <div className="flex flex-1 flex-col p-5">
        <h2 className="text-[15px] font-semibold tracking-tight text-white">
          Sistema de calificaciones
        </h2>
        <p className="mt-1 text-xs leading-5 text-zinc-500">
          Promedio por alumno, letra asignada y estado final.
        </p>

        <div className="mt-5 space-y-2">
          {ALUMNOS.map((alumno) => {
            const promedio: number = calcularPromedio(alumno.calificaciones)
            const letra: string = obtenerLetra(promedio)
            const aprobado: boolean = estaAprobado(promedio)

            return (
              <article
                key={alumno.nombre}
                className="rounded-md border border-zinc-800 bg-zinc-950 p-3"
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex min-w-0 items-center gap-2.5">
                    <span className="flex size-7 shrink-0 items-center justify-center rounded-md border border-zinc-800 bg-zinc-900 font-mono text-[10px] text-zinc-400">
                      {alumno.nombre.charAt(0)}
                    </span>
                    <div className="min-w-0">
                      <p className="truncate text-xs font-medium text-zinc-200">
                        {alumno.nombre}
                      </p>
                      <p className="font-mono text-[9px] text-zinc-600">
                        {alumno.calificaciones.join(' · ')}
                      </p>
                    </div>
                  </div>
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-md border border-zinc-700 bg-zinc-800 font-mono text-xs font-semibold text-zinc-100">
                    {letra}
                  </span>
                </div>

                <div className="mt-2.5 flex items-center justify-between border-t border-zinc-800/70 pt-2">
                  <p className="font-mono text-[9px] uppercase tracking-wider text-zinc-600">
                    avg{' '}
                    <span className="ml-1 text-sm tabular-nums text-white">
                      {promedio.toFixed(1)}
                    </span>
                  </p>
                  <span
                    className={`inline-flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-wider ${
                      aprobado ? 'text-zinc-200' : 'text-zinc-600'
                    }`}
                  >
                    <span
                      className={`size-1 rounded-full ${
                        aprobado ? 'bg-white' : 'bg-zinc-700'
                      }`}
                    />
                    {aprobado ? 'aprobado' : 'reprobado'}
                  </span>
                </div>
              </article>
            )
          })}
        </div>

        <p className="mt-auto pt-3 font-mono text-[9px] leading-4 text-zinc-600">
          scale: A ≥ 90 · B 80–89.99 · C 70–79.99 · D 60–69.99 · F &lt; 60
        </p>
      </div>
    </section>
  )
}
