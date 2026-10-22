const PRECIO_BASE: number = 1000

// Formatea el valor como moneda
const formatearMoneda = (valor: number): string => `$${valor.toFixed(2)}`

// Aplica un descuento del 10 %
const descuento10 = (precio: number): number => precio * 0.9

// Aplica un descuento del 25 %
const descuento25 = (precio: number): number => precio * 0.75

// Aplica el descuento de estudiante
const descuentoEstudiante = (precio: number): number => precio * 0.85

// Aplica el descuento recibido al precio
const aplicarDescuento = (
  precio: number,
  calcularDescuento = descuento10,
): number => calcularDescuento(precio)

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
    etiqueta: 'Descuento de estudiante',
    porcentaje: 15,
    funcion: 'descuentoEstudiante',
    calcular: descuentoEstudiante,
  },
]

// Muestra los descuentos aplicados
export const AplicadorDescuentos = () => {
  return (
    <section className="mb-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      <h2 className="text-xl font-bold text-gray-800">
        Aplicador de descuentos
      </h2>
      <p className="mt-1 text-sm text-gray-500">
        Precio base: <strong className="text-gray-700">{formatearMoneda(PRECIO_BASE)}</strong>
      </p>

      <div className="mt-4 space-y-2">
        {DESCUENTOS.map((descuento) => {
          const precioFinal: number = aplicarDescuento(
            PRECIO_BASE,
            descuento.calcular,
          )

          return (
            <div
              key={descuento.funcion}
              className="flex items-center justify-between gap-3 rounded-md border border-gray-200 bg-gray-50 p-3"
            >
              <div className="min-w-0">
                <p className="truncate text-sm font-medium text-gray-700">
                  {descuento.etiqueta}
                </p>
                <p className="text-xs text-gray-500">
                  {descuento.funcion}(precio) · {descuento.porcentaje}%
                </p>
              </div>

              <div className="shrink-0 text-right">
                <p className="text-xs text-gray-400 line-through">
                  {formatearMoneda(PRECIO_BASE)}
                </p>
                <p className="text-lg font-bold text-gray-800">
                  {formatearMoneda(precioFinal)}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
