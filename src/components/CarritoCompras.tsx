const CARRITO = [
  { id: 1, nombre: 'Laptop', precio: 15000, cantidad: 1 },
  { id: 2, nombre: 'Mouse', precio: 350, cantidad: 2 },
  { id: 3, nombre: 'Teclado', precio: 800, cantidad: 1 },
]

const TASA_IVA: number = 0.16

// Calcula el subtotal del producto
const calcularSubtotal = (precio: number, cantidad: number): number =>
  precio * cantidad

// Calcula el IVA del subtotal
const calcularIVA = (subtotal: number): number => subtotal * TASA_IVA

// Calcula el total con IVA
const calcularTotal = (subtotal: number): number =>
  subtotal + calcularIVA(subtotal)

// Formatea el precio en pesos
const formatearPrecio = (valor: number): string => `$${valor.toFixed(2)}`

// Muestra el resumen del carrito
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
    <section className="mb-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      <h2 className="text-xl font-bold text-gray-800">Carrito de compras</h2>
      <p className="mt-1 text-sm text-gray-500">
        Subtotal por producto, IVA del 16 % y total a pagar.
      </p>

      <div className="mt-4 overflow-hidden rounded-md border border-gray-200">
        {CARRITO.map((producto) => (
          <div
            key={producto.id}
            className="flex items-center justify-between gap-3 border-b border-gray-200 bg-gray-50 px-3 py-2 last:border-b-0"
          >
            <div className="min-w-0">
              <p className="truncate text-sm font-medium text-gray-700">
                {producto.nombre}
              </p>
              <p className="text-xs text-gray-500">
                {formatearPrecio(producto.precio)} × {producto.cantidad}
              </p>
            </div>
            <p className="shrink-0 text-sm font-semibold text-gray-800">
              {formatearPrecio(
                calcularSubtotal(producto.precio, producto.cantidad),
              )}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-3 rounded-md border border-gray-200 bg-gray-50 p-3">
        <div className="flex items-center justify-between text-sm text-gray-600">
          <span>Subtotal ({cantidadArticulos} artículos)</span>
          <span>{formatearPrecio(subtotalGeneral)}</span>
        </div>
        <div className="mt-1 flex items-center justify-between text-sm text-gray-600">
          <span>IVA (16 %)</span>
          <span>{formatearPrecio(iva)}</span>
        </div>
        <div className="mt-2 flex items-center justify-between border-t border-gray-300 pt-2 text-base font-bold text-gray-800">
          <span>Total</span>
          <span>{formatearPrecio(total)}</span>
        </div>
      </div>
    </section>
  )
}
