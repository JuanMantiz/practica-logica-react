import { AnalizadorTexto } from './components/AnalizadorTexto'
import { AplicadorDescuentos } from './components/AplicadorDescuentos'
import { Calculadora } from './components/Calculadora'
import { CalculadoraIMC } from './components/CalculadoraIMC'
import { CarritoCompras } from './components/CarritoCompras'
import { ConversorTemperatura } from './components/ConversorTemperatura'
import { EstadisticasArreglo } from './components/EstadisticasArreglo'
import { GeneradorPassword } from './components/GeneradorPassword'
import { SistemaCalificaciones } from './components/SistemaCalificaciones'
import { ValidadorEdad } from './components/ValidadorEdad'

// Muestra los diez ejercicios en orden
export const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <main className="mx-auto max-w-3xl p-6">
        <header className="mb-6 border-b border-gray-300 pb-4">
          <h1 className="text-2xl font-bold text-gray-800 sm:text-3xl">
            Práctica de lógica en TypeScript
          </h1>
          <p className="mt-2 text-sm leading-6 text-gray-500">
            Diez ejercicios de funciones, arreglos y manipulación de datos
            resueltos con React y Tailwind CSS.
          </p>
        </header>

        <Calculadora />
        <ConversorTemperatura />
        <CalculadoraIMC />
        <ValidadorEdad />
        <AnalizadorTexto />
        <EstadisticasArreglo />
        <GeneradorPassword />
        <AplicadorDescuentos />
        <SistemaCalificaciones />
        <CarritoCompras />

        <footer className="pb-4 pt-2 text-center text-xs text-gray-400">
          Práctica escolar · TypeScript + React + Tailwind CSS
        </footer>
      </main>
    </div>
  )
}
