// Cuenta las palabras del texto
const contarPalabras = (texto: string): number => {
  const textoLimpio: string = texto.trim()
  if (textoLimpio.length === 0) {
    return 0
  }
  return textoLimpio.split(/\s+/).length
}

// Cuenta las vocales del texto
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

// Invierte el texto
const invertirTexto = (texto: string): string =>
  texto.split('').reverse().join('')

const TEXTO: string = 'Hola mundo desde TypeScript'

// Muestra el análisis del texto
export const AnalizadorTexto = () => {
  const cantidadPalabras: number = contarPalabras(TEXTO)
  const cantidadVocales: number = contarVocales(TEXTO)
  const textoInvertido: string = invertirTexto(TEXTO)

  return (
    <section className="mb-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      <h2 className="text-xl font-bold text-gray-800">Analizador de texto</h2>
      <p className="mt-1 text-sm text-gray-500">
        Conteo de palabras y vocales, además del texto invertido.
      </p>

      <div className="mt-4 rounded-md border border-gray-200 bg-gray-50 p-3">
        <p className="text-sm text-gray-500">Texto original:</p>
        <p className="mt-1 text-sm text-gray-800">&ldquo;{TEXTO}&rdquo;</p>
      </div>

      <div className="mt-3 grid grid-cols-3 gap-2 text-center">
        <div className="rounded-md border border-gray-200 bg-gray-50 p-2">
          <p className="text-xl font-bold text-gray-800">{cantidadPalabras}</p>
          <p className="text-xs text-gray-500">Palabras</p>
        </div>
        <div className="rounded-md border border-gray-200 bg-gray-50 p-2">
          <p className="text-xl font-bold text-gray-800">{cantidadVocales}</p>
          <p className="text-xs text-gray-500">Vocales</p>
        </div>
        <div className="rounded-md border border-gray-200 bg-gray-50 p-2">
          <p className="text-xl font-bold text-gray-800">{TEXTO.length}</p>
          <p className="text-xs text-gray-500">Caracteres</p>
        </div>
      </div>

      <div className="mt-3">
        <p className="text-sm font-medium text-gray-700">Texto invertido:</p>
        <p className="mt-1 break-all rounded-md border border-gray-200 bg-gray-50 p-3 font-mono text-sm text-gray-700">
          {textoInvertido}
        </p>
      </div>
    </section>
  )
}
