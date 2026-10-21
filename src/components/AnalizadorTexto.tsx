/** Cuenta cuántas palabras contiene un texto separadas por espacios. */
const contarPalabras = (texto: string): number => {
  const textoLimpio: string = texto.trim()
  if (textoLimpio.length === 0) {
    return 0
  }
  return textoLimpio.split(/\s+/).length
}

/** Cuenta las vocales de un texto, incluyendo vocales acentuadas. */
const contarVocales = (texto: string): number => {
  let total: number = 0
  const vocales: string = 'aeiouáéíóúü'

  for (const letra of texto.toLowerCase()) {
    if (vocales.includes(letra)) {
      total += 1
    }
  }

  return total
}

/** Devuelve el texto con sus caracteres en orden inverso. */
const invertirTexto = (texto: string): string =>
  texto.split('').reverse().join('')

const TEXTO: string = 'Hola mundo desde TypeScript'

/**
 * Ejercicio 05: analizador de texto.
 * Cuenta palabras y vocales, y muestra la cadena invertida.
 */
export const AnalizadorTexto = () => {
  const cantidadPalabras: number = contarPalabras(TEXTO)
  const cantidadVocales: number = contarVocales(TEXTO)
  const textoInvertido: string = invertirTexto(TEXTO)

  return (
    <section className="group flex h-full flex-col overflow-hidden rounded-lg border border-zinc-800 bg-[#111111] transition-all duration-200 hover:border-zinc-700 hover:bg-zinc-900">
      <header className="flex items-center justify-between border-b border-zinc-800/80 px-5 py-3">
        <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em]">
          <span className="text-zinc-600">05</span>
          <span className="text-zinc-700">/</span>
          <span className="text-zinc-400">parser</span>
        </div>
        <div className="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-wider text-zinc-600">
          <span className="size-1 rounded-full bg-zinc-600 transition-colors group-hover:bg-white" />
          ready
        </div>
      </header>

      <div className="flex flex-1 flex-col p-5">
        <h2 className="text-[15px] font-semibold tracking-tight text-white">
          Analizador de texto
        </h2>
        <p className="mt-1 text-xs leading-5 text-zinc-500">
          Conteo de palabras, vocales e inversión de una cadena.
        </p>

        <div className="mt-5 rounded-md border border-zinc-800 bg-zinc-950 p-3.5">
          <div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-wider text-zinc-600">
            <span>input</span>
            <span className="text-zinc-700">string</span>
          </div>
          <p className="mt-2 font-mono text-xs leading-6 text-zinc-200">
            <span className="text-zinc-600">&gt; </span>
            &ldquo;{TEXTO}&rdquo;
          </p>
        </div>

        <div className="mt-2 grid grid-cols-3 divide-x divide-zinc-800 overflow-hidden rounded-md border border-zinc-800 bg-zinc-950">
          <div className="px-2 py-3 text-center">
            <p className="font-mono text-xl font-medium tabular-nums text-white">
              {cantidadPalabras}
            </p>
            <p className="mt-1 font-mono text-[8px] uppercase tracking-wider text-zinc-600">
              palabras
            </p>
          </div>
          <div className="px-2 py-3 text-center">
            <p className="font-mono text-xl font-medium tabular-nums text-white">
              {cantidadVocales}
            </p>
            <p className="mt-1 font-mono text-[8px] uppercase tracking-wider text-zinc-600">
              vocales
            </p>
          </div>
          <div className="px-2 py-3 text-center">
            <p className="font-mono text-xl font-medium tabular-nums text-white">
              {TEXTO.length}
            </p>
            <p className="mt-1 font-mono text-[8px] uppercase tracking-wider text-zinc-600">
              chars
            </p>
          </div>
        </div>

        <div className="mt-2 rounded-md border border-zinc-800 bg-black p-3.5">
          <div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-wider text-zinc-600">
            <span>output</span>
            <span className="text-zinc-700">reverse()</span>
          </div>
          <p className="mt-2 break-all font-mono text-xs leading-6 text-zinc-300">
            {textoInvertido}
          </p>
        </div>
      </div>
    </section>
  )
}
