const LETRAS: string =
  'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
const NUMEROS: string = '0123456789'
const SIMBOLOS: string = '!@#$%^&*()-_=+'

const EJEMPLOS = [
  {
    nombre: 'Básica',
    descripcion: 'solo letras',
    longitud: 8,
    numeros: false,
    simbolos: false,
    fuerza: 1,
  },
  {
    nombre: 'Media',
    descripcion: 'letras + números',
    longitud: 12,
    numeros: true,
    simbolos: false,
    fuerza: 2,
  },
  {
    nombre: 'Fuerte',
    descripcion: 'letras + números + símbolos',
    longitud: 16,
    numeros: true,
    simbolos: true,
    fuerza: 3,
  },
]

/**
 * Genera una contraseña aleatoria con la longitud indicada.
 * Si se piden números o símbolos, incluye al menos uno de cada categoría.
 */
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

/**
 * Ejercicio 07: generador de contraseñas configurables.
 * Muestra tres niveles de seguridad generados con distintas opciones.
 */
export const GeneradorPassword = () => {
  return (
    <section className="group flex h-full flex-col overflow-hidden rounded-lg border border-zinc-800 bg-[#111111] transition-all duration-200 hover:border-zinc-700 hover:bg-zinc-900">
      <header className="flex items-center justify-between border-b border-zinc-800/80 px-5 py-3">
        <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em]">
          <span className="text-zinc-600">07</span>
          <span className="text-zinc-700">/</span>
          <span className="text-zinc-400">security</span>
        </div>
        <div className="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-wider text-zinc-600">
          <span className="size-1 rounded-full bg-zinc-600 transition-colors group-hover:bg-white" />
          ready
        </div>
      </header>

      <div className="flex flex-1 flex-col p-5">
        <h2 className="text-[15px] font-semibold tracking-tight text-white">
          Generador de contraseñas
        </h2>
        <p className="mt-1 text-xs leading-5 text-zinc-500">
          Longitud y categorías configurables. Tres niveles de seguridad.
        </p>

        <div className="mt-5 space-y-2">
          {EJEMPLOS.map((ejemplo) => {
            const password: string = generarPassword(
              ejemplo.longitud,
              ejemplo.numeros,
              ejemplo.simbolos,
            )

            return (
              <div
                key={ejemplo.nombre}
                className="rounded-md border border-zinc-800 bg-zinc-950 p-3"
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[11px] text-zinc-300">
                      {ejemplo.nombre}
                    </span>
                    <span className="font-mono text-[9px] text-zinc-600">
                      n={ejemplo.longitud}
                    </span>
                  </div>
                  <div
                    className="flex w-12 gap-0.5"
                    aria-label={`Seguridad ${ejemplo.nombre}`}
                  >
                    {[1, 2, 3].map((nivel: number) => (
                      <span
                        key={nivel}
                        className={`h-1 flex-1 rounded-full ${
                          nivel <= ejemplo.fuerza ? 'bg-white' : 'bg-zinc-800'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <p className="mt-2 select-all break-all rounded border border-zinc-800/70 bg-black px-2.5 py-2 font-mono text-xs text-zinc-200">
                  {password}
                </p>

                <div className="mt-2 flex items-center justify-between font-mono text-[9px] text-zinc-600">
                  <span>{ejemplo.descripcion}</span>
                  <span>{password.length} chars</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
