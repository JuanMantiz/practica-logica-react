# Práctica de lógica con TypeScript + React

Colección de diez ejercicios de lógica y manipulación de datos resueltos con
TypeScript estricto, React y Tailwind CSS.

## Requisitos

- Node.js 20.19 o superior
- npm

## Instalación y ejecución

```bash
npm install
npm run dev
```

Vite mostrará la URL local, normalmente `http://localhost:5173`.

## Scripts disponibles

| Comando           | Descripción                                  |
| ----------------- | -------------------------------------------- |
| `npm run dev`     | Inicia el servidor de desarrollo con HMR.    |
| `npm run build`   | Comprueba TypeScript y genera `dist/`.       |
| `npm run preview` | Sirve la compilación de producción.          |
| `npm run lint`    | Ejecuta oxlint sobre el proyecto.            |

## Estructura

```
src/
├── App.tsx
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
    └── CarritoCompras.tsx
```

## Características

- Estética monocromática inspirada en Vercel: fondo `#0a0a0a`, paneles `#111111` y bordes `zinc-800`.
- Tipografías Geist y Geist Mono empaquetadas localmente con Fontsource.
- Tipado básico con `number`, `string`, `boolean` y `number[]`; sin interfaces ni alias `type`.
- Lógica directa con condicionales `if/else`, bucles `for`, `.map()` y `.reduce()`.
- Componentes y funciones internas declarados con arrow functions.
- Modo `strict` activado en TypeScript y cero usos de `any`.
- Resultados presentados como bloques de terminal con `font-mono`.
- Microinteracciones sutiles al hacer hover, sin sombras pesadas.
- Diseño responsivo de una, dos y tres columnas.
- Sin librerías de UI: Tailwind CSS v4 y fuentes locales.

## Ejercicios incluidos

1. Calculadora con suma, resta, multiplicación y división segura.
2. Conversor de temperaturas Celsius/Fahrenheit.
3. Calculadora y clasificación de IMC.
4. Validador de mayoría de edad sobre un arreglo.
5. Análisis de texto: palabras, vocales e inversión.
6. Estadísticas de un arreglo: promedio, máximo y mínimo.
7. Generador de contraseñas con niveles de seguridad.
8. Aplicador de descuentos con funciones de orden superior.
9. Sistema de calificaciones con letras y estado.
10. Carrito de compras con subtotales, IVA y total.
