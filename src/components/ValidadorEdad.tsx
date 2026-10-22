// Comprueba si es mayor de edad
const esMayorDeEdad = (edad: number): boolean => edad >= 18

// Genera el mensaje según la edad
const obtenerMensaje = (edad: number): string =>
  esMayorDeEdad(edad) ? 'Puede votar' : `Le faltan ${18 - edad} años`

// Muestra qué edades pueden votar
export const ValidadorEdad = () => {
  const edades: number[] = [15, 18, 25, 12]
  let totalMayores: number = 0

  for (const edad of edades) {
    if (esMayorDeEdad(edad)) {
      totalMayores += 1
    }
  }

  return (
    <section className="mb-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      <h2 className="text-xl font-bold text-gray-800">Validador de edad</h2>
      <p className="mt-1 text-sm text-gray-500">
        Comprobación de mayoría de edad para votar.
      </p>

      <ul className="mt-4 space-y-2">
        {edades.map((edad: number) => {
          const esMayor: boolean = esMayorDeEdad(edad)

          return (
            <li
              key={edad}
              className="flex items-center justify-between rounded-md border border-gray-200 bg-gray-50 px-3 py-2"
            >
              <span className="text-sm text-gray-600">
                Edad: <strong className="text-gray-800">{edad}</strong>
              </span>
              <span
                className={`text-sm font-medium ${
                  esMayor ? 'text-green-600' : 'text-red-500'
                }`}
              >
                {obtenerMensaje(edad)}
              </span>
            </li>
          )
        })}
      </ul>

      <p className="mt-3 text-sm text-gray-500">
        Mayores de edad: <strong className="text-gray-800">{totalMayores}</strong>{' '}
        de {edades.length}.
      </p>
    </section>
  )
}
