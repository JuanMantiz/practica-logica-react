const CARRITO = [
  { id: 1, nombre: 'Laptop', precio: 15000, cantidad: 1 },
  { id: 2, nombre: 'Mouse', precio: 350, cantidad: 2 },
  { id: 3, nombre: 'Teclado', precio: 800, cantidad: 1 },
]

const TASA_IVA: number = 0.16

/** Calcula el subtotal de un producto multiplicando precio por cantidad. */
const calcularSubtotal = (precio: number, cantidad: number): number =>
  precio * cantidad

/** Calcula el IVA del 16 % sobre un subtotal. */
const calcularIVA = (subtotal: number): number => subtotal * TASA_IVA

/** Calcula el total a pagar sumando el IVA al subtotal. */
const calcularTotal = (subtotal: number): number =>
  subtotal + calcularIVA(subtotal)

/** Formatea un número como precio en pesos mexicanos. */
const formatearPrecio = (valor: number): string =>
  new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN',
    minimumFractionDigits: 2,
  }).format(valor)

/**
 * Ejercicio 10: carrito de compras con cálculo de IVA.
 * Usa reduce para obtener el subtotal general de todos los productos.
 */
export const CarritoCompras = () => {
  const subtotalGeneral: number = CARRITO.reduce(
    (subtotal: number, producto): number =>
      subtotal + calcularSubtotal(producto.precio, producto.cantidad),
    0,
  )
  const iva: number = calcularIVA(subtotalGeneral)
  const total: number = calcularTotal(subtotalGeneral)
  const cantidadArticulos: number = CARRITO.reduce(
    (cantidad: number, producto): number => cantidad + producto.cantidad,
    0,
  )

  return (
    <section className="group flex h-full flex-col overflow-hidden rounded-lg border border-zinc-800 bg-[#111111] transition-all duration-200 hover:border-zinc-700 hover:bg-zinc-900">
      <header className="flex items-center justify-between border-b border-zinc-800/80 px-5 py-3">
        <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em]">
          <span className="text-zinc-600">10</span>
          <span className="text-zinc-700">/</span>
          <span className="text-zinc-400">cart</span>
        </div>
        <div className="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-wider text-zinc-600">
          <span className="size-1 rounded-full bg-zinc-600 transition-colors group-hover:bg-white" />
          ready
        </div>
      </header>

      <div className="flex flex-1 flex-col p-5">
        <h2 className="text-[15px] font-semibold tracking-tight text-white">
          Carrito de compras
        </h2>
        <p className="mt-1 text-xs leading-5 text-zinc-500">
          Subtotal por producto, IVA del 16 % y total general.
        </p>

        <div className="mt-5 overflow-hidden rounded-md border border-zinc-800 bg-zinc-950">
          <div className="flex items-center justify-between border-b border-zinc-800 px-3 py-2 font-mono text-[9px] uppercase tracking-wider text-zinc-600">
            <span>item / qty</span>
            <span className="text-zinc-700">subtotal</span>
          </div>

          {CARRITO.map((producto, indice: number) => (
            <div
              key={producto.id}
              className="flex items-center gap-3 border-b border-zinc-800/70 px-3 py-2.5 last:border-b-0"
            >
              <span className="flex size-7 shrink-0 items-center justify-center rounded border border-zinc-800 bg-zinc-900 font-mono text-[9px] text-zinc-500">
                {String(indice + 1).padStart(2, '0')}
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-xs font-medium text-zinc-200">
                  {producto.nombre}
                </p>
                <p className="font-mono text-[9px] text-zinc-600">
                  {formatearPrecio(producto.precio)} × {producto.cantidad}
                </p>
              </div>
              <p className="font-mono text-xs tabular-nums text-zinc-200">
                {formatearPrecio(
                  calcularSubtotal(producto.precio, producto.cantidad),
                )}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-2 rounded-md border border-zinc-800 bg-black p-4">
          <div className="space-y-1.5 font-mono text-[10px]">
            <div className="flex items-center justify-between text-zinc-600">
              <span>subtotal</span>
              <span className="tabular-nums text-zinc-300">
                {formatearPrecio(subtotalGeneral)}
              </span>
            </div>
            <div className="flex items-center justify-between text-zinc-600">
              <span>iva[16%]</span>
              <span className="tabular-nums text-zinc-300">
                {formatearPrecio(iva)}
              </span>
            </div>
          </div>

          <div className="mt-3 flex items-end justify-between gap-3 border-t border-zinc-800 pt-3">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-wider text-zinc-600">
                total
              </p>
              <p className="mt-0.5 font-mono text-[9px] text-zinc-700">
                {cantidadArticulos} artículos
              </p>
            </div>
            <p className="font-mono text-2xl font-medium tabular-nums tracking-tight text-white">
              {formatearPrecio(total)}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
