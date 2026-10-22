const ALUMNOS = [
  { nombre: 'Ana', calificaciones: [95, 88, 92] },
  { nombre: 'Luis', calificaciones: [70, 65, 72] },
  { nombre: 'María', calificaciones: [85, 90, 88] },
]

// Calcula el promedio del alumno
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

// Obtiene la letra del promedio
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

// Comprueba si el alumno aprobó
const estaAprobado = (promedio: number): boolean => promedio >= 70

// Muestra las calificaciones de los alumnos
export const SistemaCalificaciones = () => {
  return (
    <section className="mb-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      <h2 className="text-xl font-bold text-gray-800">
        Sistema de calificaciones
      </h2>
      <p className="mt-1 text-sm text-gray-500">
        Promedio por alumno, letra asignada y resultado final.
      </p>

      <div className="mt-4 space-y-3">
        {ALUMNOS.map((alumno) => {
          const promedio: number = calcularPromedio(alumno.calificaciones)
          const letra: string = obtenerLetra(promedio)
          const aprobado: boolean = estaAprobado(promedio)

          return (
            <div
              key={alumno.nombre}
              className="rounded-md border border-gray-200 bg-gray-50 p-3"
            >
              <div className="flex items-center justify-between gap-3">
                <p className="text-sm font-semibold text-gray-800">
                  {alumno.nombre}
                </p>
                <span className="rounded border border-gray-300 bg-white px-2 py-1 text-sm font-bold text-gray-700">
                  {letra}
                </span>
              </div>

              <p className="mt-1 text-xs text-gray-500">
                Calificaciones: {alumno.calificaciones.join(', ')}
              </p>

              <div className="mt-2 flex items-center justify-between gap-3 text-sm">
                <span className="text-gray-600">
                  Promedio:{' '}
                  <strong className="text-gray-800">
                    {promedio.toFixed(1)}
                  </strong>
                </span>
                <span
                  className={`font-medium ${
                    aprobado ? 'text-green-600' : 'text-red-500'
                  }`}
                >
                  {aprobado ? 'Aprobado' : 'Reprobado'}
                </span>
              </div>
            </div>
          )
        })}
      </div>

      <p className="mt-3 text-xs text-gray-500">
        A: 90 o más · B: 80 a 89.99 · C: 70 a 79.99 · D: 60 a 69.99 · F: menos
        de 60.
      </p>
    </section>
  )
}
