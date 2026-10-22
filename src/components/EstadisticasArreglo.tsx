const NUMEROS: number[] = [8, 3, 15, 7, 22, 11, 4]

// Calcula el promedio del arreglo
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

// Encuentra el valor máximo
const encontrarMaximo = (numeros: number[]): number => {
  if (numeros.length === 0) {
    return 0
  }
  return Math.max(...numeros)
}

// Encuentra el valor mínimo
const encontrarMinimo = (numeros: number[]): number => {
  if (numeros.length === 0) {
    return 0
  }
  return Math.min(...numeros)
}

// Muestra las estadísticas del arreglo
export const EstadisticasArreglo = () => {
  const promedio: number = calcularPromedio(NUMEROS)
  const maximo: number = encontrarMaximo(NUMEROS)
  const minimo: number = encontrarMinimo(NUMEROS)

  return (
    <section className="mb-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      <h2 className="text-xl font-bold text-gray-800">
        Estadísticas de arreglo
      </h2>
      <p className="mt-1 text-sm text-gray-500">
        Promedio, valor máximo y valor mínimo del arreglo.
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {NUMEROS.map((numero: number, indice: number) => (
          <span
            key={indice}
            className={`rounded-md border px-3 py-1 text-sm font-medium ${
              numero === maximo
                ? 'border-green-200 bg-green-50 text-green-700'
                : numero === minimo
                  ? 'border-red-200 bg-red-50 text-red-600'
                  : 'border-gray-200 bg-gray-50 text-gray-600'
            }`}
          >
            {numero}
          </span>
        ))}
      </div>

      <div className="mt-3 grid gap-3 sm:grid-cols-3">
        <div className="rounded-md border border-gray-200 bg-gray-50 p-3 text-center">
          <p className="text-xs uppercase tracking-wide text-gray-500">
            Promedio
          </p>
          <p className="mt-1 text-xl font-bold text-gray-800">
            {promedio.toFixed(2)}
          </p>
        </div>
        <div className="rounded-md border border-gray-200 bg-gray-50 p-3 text-center">
          <p className="text-xs uppercase tracking-wide text-gray-500">Máximo</p>
          <p className="mt-1 text-xl font-bold text-gray-800">{maximo}</p>
        </div>
        <div className="rounded-md border border-gray-200 bg-gray-50 p-3 text-center">
          <p className="text-xs uppercase tracking-wide text-gray-500">Mínimo</p>
          <p className="mt-1 text-xl font-bold text-gray-800">{minimo}</p>
        </div>
      </div>

      <p className="mt-3 text-xs text-gray-500">
        En verde se muestra el valor máximo y en rojo el valor mínimo.
      </p>
    </section>
  )
}
