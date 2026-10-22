// Suma dos números
const sumar = (a: number, b: number): number => a + b

// Resta dos números
const restar = (a: number, b: number): number => a - b

// Multiplica dos números
const multiplicar = (a: number, b: number): number => a * b

// Divide dos números y evita el cero
const dividir = (a: number, b: number): number => (b === 0 ? 0 : a / b)

// Muestra las operaciones básicas
export const Calculadora = () => {
  const a: number = 15
  const b: number = 4

  return (
    <section className="mb-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      <h2 className="text-xl font-bold text-gray-800">Calculadora</h2>
      <p className="mt-1 text-sm text-gray-500">
        Operaciones básicas usando a = {a} y b = {b}.
      </p>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <div className="rounded-md border border-gray-200 bg-gray-50 p-3">
          <p className="text-sm font-medium text-gray-600">Suma</p>
          <p className="text-xs text-gray-400">
            {a} + {b}
          </p>
          <p className="mt-1 text-2xl font-bold text-gray-800">
            {sumar(a, b)}
          </p>
        </div>

        <div className="rounded-md border border-gray-200 bg-gray-50 p-3">
          <p className="text-sm font-medium text-gray-600">Resta</p>
          <p className="text-xs text-gray-400">
            {a} − {b}
          </p>
          <p className="mt-1 text-2xl font-bold text-gray-800">
            {restar(a, b)}
          </p>
        </div>

        <div className="rounded-md border border-gray-200 bg-gray-50 p-3">
          <p className="text-sm font-medium text-gray-600">Multiplicación</p>
          <p className="text-xs text-gray-400">
            {a} × {b}
          </p>
          <p className="mt-1 text-2xl font-bold text-gray-800">
            {multiplicar(a, b)}
          </p>
        </div>

        <div className="rounded-md border border-gray-200 bg-gray-50 p-3">
          <p className="text-sm font-medium text-gray-600">División</p>
          <p className="text-xs text-gray-400">
            {a} ÷ {b}
          </p>
          <p className="mt-1 text-2xl font-bold text-gray-800">
            {dividir(a, b).toFixed(2)}
          </p>
        </div>
      </div>

      <p className="mt-3 text-xs text-gray-500">
        La división entre cero devuelve 0: {dividir(a, 0)}.
      </p>
    </section>
  )
}
