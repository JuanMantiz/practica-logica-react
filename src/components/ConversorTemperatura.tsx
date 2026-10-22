// Convierte Celsius a Fahrenheit
const celsiusAFahrenheit = (celsius: number): number => (celsius * 9) / 5 + 32

// Convierte Fahrenheit a Celsius
const fahrenheitACelsius = (fahrenheit: number): number =>
  ((fahrenheit - 32) * 5) / 9

// Muestra las conversiones de temperatura
export const ConversorTemperatura = () => {
  const celsius: number = 25
  const fahrenheit: number = 100
  const resultadoFahrenheit: number = celsiusAFahrenheit(celsius)
  const resultadoCelsius: number = fahrenheitACelsius(fahrenheit)

  return (
    <section className="mb-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      <h2 className="text-xl font-bold text-gray-800">
        Conversor de temperatura
      </h2>
      <p className="mt-1 text-sm text-gray-500">
        Conversión entre grados Celsius y Fahrenheit.
      </p>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <div className="rounded-md border border-gray-200 bg-gray-50 p-3">
          <p className="text-sm text-gray-500">
            {celsius} °C a Fahrenheit
          </p>
          <p className="mt-1 text-2xl font-bold text-gray-800">
            {resultadoFahrenheit.toFixed(2)} °F
          </p>
          <p className="mt-1 text-xs text-gray-400">
            ({celsius} × 9/5) + 32
          </p>
        </div>

        <div className="rounded-md border border-gray-200 bg-gray-50 p-3">
          <p className="text-sm text-gray-500">
            {fahrenheit} °F a Celsius
          </p>
          <p className="mt-1 text-2xl font-bold text-gray-800">
            {resultadoCelsius.toFixed(2)} °C
          </p>
          <p className="mt-1 text-xs text-gray-400">
            ({fahrenheit} − 32) × 5/9
          </p>
        </div>
      </div>
    </section>
  )
}
