const LETRAS: string =
  'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
const NUMEROS: string = '0123456789'
const SIMBOLOS: string = '!@#$%^&*()-_=+'

const EJEMPLOS = [
  {
    nombre: 'Básica',
    descripcion: 'Solo letras',
    longitud: 8,
    numeros: false,
    simbolos: false,
  },
  {
    nombre: 'Media',
    descripcion: 'Letras y números',
    longitud: 12,
    numeros: true,
    simbolos: false,
  },
  {
    nombre: 'Fuerte',
    descripcion: 'Letras, números y símbolos',
    longitud: 16,
    numeros: true,
    simbolos: true,
  },
]

// Genera una contraseña con las opciones indicadas
const generarPassword = (
  longitud: number,
  incluirNumeros: boolean,
  incluirSimbolos: boolean,
): string => {
  if (longitud <= 0) {
    return ''
  }

  let caracteres: string = LETRAS
  if (incluirNumeros) {
    caracteres += NUMEROS
  }
  if (incluirSimbolos) {
    caracteres += SIMBOLOS
  }

  let password: string = ''

  if (incluirNumeros) {
    const posicion: number = Math.floor(Math.random() * NUMEROS.length)
    password += NUMEROS.charAt(posicion)
  }
  if (incluirSimbolos) {
    const posicion: number = Math.floor(Math.random() * SIMBOLOS.length)
    password += SIMBOLOS.charAt(posicion)
  }

  while (password.length < longitud) {
    const posicion: number = Math.floor(Math.random() * caracteres.length)
    password += caracteres.charAt(posicion)
  }

  return password
}

// Muestra tres contraseñas de ejemplo
export const GeneradorPassword = () => {
  return (
    <section className="mb-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      <h2 className="text-xl font-bold text-gray-800">
        Generador de contraseñas
      </h2>
      <p className="mt-1 text-sm text-gray-500">
        Contraseñas aleatorias con longitud y categorías configurables.
      </p>

      <div className="mt-4 space-y-3">
        {EJEMPLOS.map((ejemplo) => {
          const password: string = generarPassword(
            ejemplo.longitud,
            ejemplo.numeros,
            ejemplo.simbolos,
          )

          return (
            <div
              key={ejemplo.nombre}
              className="rounded-md border border-gray-200 bg-gray-50 p-3"
            >
              <div className="flex items-center justify-between gap-3">
                <p className="text-sm font-semibold text-gray-700">
                  {ejemplo.nombre}
                </p>
                <p className="text-xs text-gray-500">{ejemplo.descripcion}</p>
              </div>

              <p className="mt-2 break-all rounded border border-gray-200 bg-white p-2 font-mono text-sm text-gray-700">
                {password}
              </p>

              <p className="mt-1 text-xs text-gray-400">
                Longitud: {password.length} caracteres
              </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
