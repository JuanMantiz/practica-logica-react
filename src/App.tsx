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

/**
 * Componente principal que reúne los diez ejercicios en un panel técnico
 * monocromático, con navegación superior, métricas y cuadrícula responsiva.
 */
export const App = () => {
  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-zinc-300">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.06),transparent_65%)]" />

      <header className="relative border-b border-zinc-800/80">
        <div className="mx-auto flex h-14 max-w-[1400px] items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <span className="flex size-7 items-center justify-center rounded-md border border-zinc-800 bg-zinc-900">
              <svg
                viewBox="0 0 24 24"
                className="size-3 fill-white"
                aria-hidden="true"
              >
                <path d="M12 4 22 21H2L12 4Z" />
              </svg>
            </span>
            <span className="font-mono text-xs font-medium tracking-tight text-zinc-200">
              logic-lab
            </span>
            <span className="hidden h-4 border-l border-zinc-800 sm:block" />
            <span className="hidden font-mono text-[10px] text-zinc-600 sm:block">
              v1.0.0
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="hidden font-mono text-[10px] uppercase tracking-wider text-zinc-600 md:block">
              status
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-zinc-800 bg-zinc-900/50 px-2.5 py-1">
              <span className="size-1.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.7)]" />
              <span className="font-mono text-[10px] text-zinc-400">
                operational
              </span>
            </span>
          </div>
        </div>
      </header>

      <main className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <section className="border-b border-zinc-800/80 py-12 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500">
                <span className="text-zinc-600">[</span>
                <span>practice / typescript</span>
                <span className="text-zinc-600">]</span>
              </div>

              <h1 className="mt-5 max-w-3xl text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">
                Lógica tipada.
                <br />
                <span className="text-zinc-500">Interfaz precisa.</span>
              </h1>

              <p className="mt-5 max-w-xl text-sm leading-7 text-zinc-400">
                Diez módulos de lógica y manipulación de datos construidos con
                TypeScript estricto, React y Tailwind CSS. Un panel
                monocromático, sin ruido visual.
              </p>

              <div className="mt-8 grid max-w-xl grid-cols-3 divide-x divide-zinc-800 overflow-hidden rounded-lg border border-zinc-800 bg-[#111111]">
                <div className="px-4 py-3">
                  <p className="font-mono text-lg text-white">10</p>
                  <p className="mt-0.5 font-mono text-[10px] uppercase tracking-wider text-zinc-600">
                    módulos
                  </p>
                </div>
                <div className="px-4 py-3">
                  <p className="font-mono text-lg text-white">100%</p>
                  <p className="mt-0.5 font-mono text-[10px] uppercase tracking-wider text-zinc-600">
                    tipado
                  </p>
                </div>
                <div className="px-4 py-3">
                  <p className="font-mono text-lg text-white">0</p>
                  <p className="mt-0.5 font-mono text-[10px] uppercase tracking-wider text-zinc-600">
                    any
                  </p>
                </div>
              </div>
            </div>

            <div className="hidden w-[340px] overflow-hidden rounded-lg border border-zinc-800 bg-[#111111] lg:block">
              <div className="flex items-center justify-between border-b border-zinc-800 px-4 py-2.5">
                <span className="font-mono text-[10px] text-zinc-500">
                  tree / src
                </span>
                <span className="font-mono text-[9px] text-zinc-600">
                  10 files
                </span>
              </div>
              <pre className="overflow-hidden px-4 py-3 font-mono text-[10px] leading-5 text-zinc-500">
                <code>{`├── App.tsx
├── main.tsx
├── index.css
└── components/
    ├── Calculadora.tsx
    ├── ConversorTemperatura.tsx
    ├── CalculadoraIMC.tsx
    ├── ValidadorEdad.tsx
    ├── AnalizadorTexto.tsx
    ├── EstadisticasArreglo.tsx
    ├── GeneradorPassword.tsx
    ├── AplicadorDescuentos.tsx
    ├── SistemaCalificaciones.tsx
    └── CarritoCompras.tsx`}</code>
              </pre>
            </div>
          </div>
        </section>

        <section className="py-8 lg:py-10">
          <div className="mb-4 flex items-end justify-between">
            <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500">
              <span className="text-zinc-600">//</span>
              <span>index</span>
            </div>
            <span className="font-mono text-[10px] text-zinc-600">
              10 entries
            </span>
          </div>

          <div className="grid grid-cols-1 items-start gap-4 md:grid-cols-2 xl:grid-cols-3">
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
          </div>
        </section>

        <footer className="flex flex-col items-center justify-between gap-3 border-t border-zinc-800/80 py-6 font-mono text-[10px] text-zinc-600 sm:flex-row">
          <p>© 2026 logic-lab · práctica escolar</p>
          <p>typescript / react / tailwind css</p>
        </footer>
      </main>
    </div>
  )
}
