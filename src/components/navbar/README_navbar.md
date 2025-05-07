# Navbar Component para locs.uy

Este componente de navegación está diseñado específicamente para locs.uy, con una estética de hip-hop contemporánea y optimizado para rendimiento y accesibilidad.

## Características

- **Diseño Mobile-First**: Navegación inferior en dispositivos móviles con transición a navbar superior en desktop
- **Animaciones fluidas**: Usando Framer Motion para transiciones suaves y profesionales
- **Modo dinámico**: Se oculta/muestra al hacer scroll hacia abajo/arriba
- **Internacionalización lista**: Estructura preparada para traducción con next-intl
- **Gestión de estado**: Carrito persistente usando Zustand y localStorage
- **Accesibilidad**: Roles ARIA, navegación por teclado y alto contraste

## Instalación de dependencias

```bash
# Instalar paquetes necesarios
npm install framer-motion zustand @next-intl/provider next-intl tailwind-merge tailwindcss-animate
```

## Configuración de Tailwind

Añadir estos valores a tu archivo `tailwind.config.js`:

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        'locs-black': '#0D0D0D',
        'locs-magenta': '#E5006A',
        'locs-sunburst': '#FFB800',
      },
      fontFamily: {
        sans: ['Urbanist', 'sans-serif'],
      },
      animation: {
        'wiggle': 'wiggle 2s ease-in-out',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'scaleX(0)' },
          '50%': { transform: 'scaleX(1)' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.8)', opacity: '0.8' },
          '50%': { transform: 'scale(1)', opacity: '0.4' },
          '100%': { transform: 'scale(0.8)', opacity: '0.8' },
        }
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
  ],
  // Asegúrate de que estos elementos estén en safelist para evitar que se eliminen en producción
  safelist: [
    'bg-[#E5006A]',
    'bg-[#FFB800]',
    'bg-[#0D0D0D]',
    'animate-[wiggle_2s_ease-in-out]',
  ],
}
```

## Configuración de fuentes

Añadir la fuente Urbanist a tu proyecto en `layout.tsx`:

```tsx
import { Urbanist } from 'next/font/google';

const urbanist = Urbanist({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-urbanist',
});

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${urbanist.variable}`}>
      <body>{children}</body>
    </html>
  );
}
```

## Configuración de Internacionalización

1. Crea un directorio `messages` en la raíz de tu proyecto
2. Añade un archivo `es-UY.json` con traducciones para español Uruguay:

```json
{
  "navbar": {
    "products": "Productos",
    "featured": "Destacados",
    "brands": "Marcas",
    "contact": "Contacto",
    "shipping": "Envío en 24h",
    "freeShipping": "Gratis en pedidos +50USD",
    "stores": "Tiendas",
    "help": "Ayuda",
    "search": {
      "placeholder": "Buscar productos...",
      "button": "Buscar"
    },
    "cart": {
      "title": "Tu carrito",
      "empty": "Tu carrito está vacío",
      "total": "Total",
      "checkout": "Finalizar compra",
      "viewCart": "Ver carrito"
    },
    "user": {
      "myAccount": "Mi cuenta",
      "myOrders": "Mis pedidos",
      "favorites": "Favoritos",
      "login": "Iniciar sesión",
      "register": "Registrarse"
    },
    "categories": {
      "sunglasses": "Gafas de Sol",
      "prescription": "Gafas Graduadas",
      "contacts": "Lentes de Contacto"
    }
  }
}
```

3. Añade el soporte de idiomas en tu `middleware.ts`:

```ts
import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['es-UY', 'en-US'],
  defaultLocale: 'es-UY'
});

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
};
```

## Uso

```tsx
import Navbar from '@/components/navbar/NavBar';

export default function Layout() {
  return (
    <>
      <Navbar />
      {/* Resto del contenido */}
    </>
  );
}
```

## Elementos personalizables

- **Logo**: Reemplaza `/logo.png` con tu propio logo
- **Colores**: Modifica las variables de color en tailwind.config.js
- **Categorías de productos**: Edita el array `productCategories` en NavBar.tsx

## Rendimiento

El componente está optimizado para:
- Evitar re-renders innecesarios
- Mantener un CLS (Cumulative Layout Shift) mínimo
- Utilizar prefetch={false} en enlaces no prioritarios
- Compresión de imágenes y optimización SVG para iconos

## Bonus: Modo Fiesta

El Konami Code (↑↑↓↓←→←→BA) activa el modo fiesta con animaciones de neón en la barra de navegación. La implementación está en el hook personalizado `useKonami.ts`. 