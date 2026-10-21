const PRECIO_BASE: number = 1000

/** Formatea un valor numérico como moneda mexicana. */
const formatearMoneda = (valor: number): string =>
  new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN',
    minimumFractionDigits: 2,
  }).format(valor)

/** Aplica un callback de descuento al precio recibido (función de orden superior). */
const aplicarDescuento = (
  precio: number,
  calcularDescuento: (precio: number) => number,
): number => calcularDescuento(precio)

/** Aplica un descuento del 10 % y devuelve el precio final. */
const descuento10 = (precio: number): number => precio * 0.9

/** Aplica un descuento del 25 % y devuelve el precio final. */
const descuento25 = (precio: number): number => precio * 0.75

/** Aplica el descuento de estudiante del 15 % y devuelve el precio final. */
const descuentoEstudiante = (precio: number): number => precio * 0.85

const DESCUENTOS = [
  {
    etiqueta: 'Descuento general',
    porcentaje: 10,
    funcion: 'descuento10',
    calcular: descuento10,
  },
  {
    etiqueta: 'Descuento especial',
    porcentaje: 25,
    funcion: 'descuento25',
    calcular: descuento25,
  },
  {
    etiqueta: 'Descuento estudiante',
    porcentaje: 15,
    funcion: 'descuentoEstudiante',
    calcular: descuentoEstudiante,
  },
]

/**
 * Ejercicio 08: aplicador de descuentos con funciones de orden superior.
 * Aplica tres callbacks distintos a un precio base de $1,000.
 */
export const AplicadorDescuentos = () => {
  return (
    <section className="group flex h-full flex-col overflow-hidden rounded-lg border border-zinc-800 bg-[#111111] transition-all duration-200 hover:border-zinc-700 hover:bg-zinc-900">
      <header className="flex items-center justify-between border-b border-zinc-800/80 px-5 py-3">
        <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em]">
          <span className="text-zinc-600">08</span>
          <span className="text-zinc-700">/</span>
          <span className="text-zinc-400">pricing</span>
        </div>
        <div className="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-wider text-zinc-600">
          <span className="size-1 rounded-full bg-zinc-600 transition-colors group-hover:bg-white" />
          ready
        </div>
      </header>

      <div className="flex flex-1 flex-col p-5">
        <h2 className="text-[15px] font-semibold tracking-tight text-white">
          Aplicador de descuentos
        </h2>
        <p className="mt-1 text-xs leading-5 text-zinc-500">
          Una función de orden superior recibe el precio y el callback.
        </p>

        <div className="mt-5 rounded-md border border-zinc-800 bg-zinc-950 p-3.5">
          <div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-wider text-zinc-600">
            <span>input</span>
            <span className="text-zinc-700">MXN</span>
          </div>
          <div className="mt-2 flex items-baseline justify-between gap-4">
            <span className="font-mono text-[10px] text-zinc-500">
              precio base
            </span>
            <span className="font-mono text-xl font-medium tabular-nums text-white">
              {formatearMoneda(PRECIO_BASE)}
            </span>
          </div>
        </div>

        <div className="mt-2 space-y-2">
          {DESCUENTOS.map((descuento) => {
            const precioFinal: number = aplicarDescuento(
              PRECIO_BASE,
              descuento.calcular,
            )
            const ahorro: number = PRECIO_BASE - precioFinal

            return (
              <div
                key={descuento.funcion}
                className="rounded-md border border-zinc-800 bg-zinc-950 p-3"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="truncate font-mono text-[10px] text-zinc-400">
                    {descuento.funcion}(precio)
                  </span>
                  <span className="shrink-0 font-mono text-[9px] text-zinc-600">
                    −{descuento.porcentaje}%
                  </span>
                </div>
                <div className="mt-1.5 flex items-end justify-between gap-3">
                  <div className="min-w-0">
                    <p className="truncate text-[10px] text-zinc-500">
                      {descuento.etiqueta}
                    </p>
                    <p className="font-mono text-[9px] text-zinc-700 line-through">
                      {formatearMoneda(PRECIO_BASE)}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-mono text-lg font-medium tabular-nums text-white">
                      {formatearMoneda(precioFinal)}
                    </p>
                    <p className="font-mono text-[8px] text-zinc-600">
                      save {formatearMoneda(ahorro)}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
