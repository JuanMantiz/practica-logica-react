// Calcula el índice de masa corporal
const calcularIMC = (peso: number, altura: number): number =>
  altura > 0 ? peso / (altura * altura) : 0

// Clasifica el IMC por rangos
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

// Muestra el IMC y su clasificación
export const CalculadoraIMC = () => {
  const peso: number = 70
  const altura: number = 1.75
  const imc: number = calcularIMC(peso, altura)
  const clasificacion: string = clasificarIMC(imc)

  return (
    <section className="mb-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      <h2 className="text-xl font-bold text-gray-800">Calculadora de IMC</h2>
      <p className="mt-1 text-sm text-gray-500">
        Índice de masa corporal y su clasificación.
      </p>

      <div className="mt-4 rounded-md border border-gray-200 bg-gray-50 p-3">
        <p className="text-sm text-gray-500">Peso: {peso} kg</p>
        <p className="text-sm text-gray-500">Altura: {altura} m</p>

        <div className="mt-3 flex items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-wide text-gray-400">
              IMC
            </p>
            <p className="text-2xl font-bold text-gray-800">
              {imc.toFixed(2)}
            </p>
          </div>
          <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
            {clasificacion}
          </span>
        </div>
      </div>

      <p className="mt-3 text-xs text-gray-500">
        Bajo peso: menos de 18.5 · Normal: 18.5 a 24.99 · Sobrepeso: 25 a
        29.99 · Obesidad: 30 o más.
      </p>
    </section>
  )
}
