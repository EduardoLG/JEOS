# JEOS — José Eduardo Operating System

Portafolio de **José Eduardo López García** construido como una experiencia interactiva que simula un sistema operativo de escritorio (inspirado en macOS/VisionOS), en vez de un portafolio tradicional de scroll.

## Stack

- **React 19 + TypeScript + Vite**
- **Tailwind CSS v4** — tokens de diseño propios (glassmorphism, acento único, paleta neutra)
- **shadcn/ui** (preset Nova, base Radix) + **Lucide React**
- **Framer Motion** — animaciones y transiciones
- **Zustand** — estado del sistema de ventanas y del boot
- **react-rnd** — ventanas y iconos de escritorio arrastrables/redimensionables

Todo el proyecto es 100% frontend: sin backend, sin CMS, sin APIs externas.

## Cómo correrlo

```bash
pnpm install
pnpm dev       # servidor de desarrollo
pnpm build     # build de producción (tsc -b && vite build)
pnpm lint      # oxlint
pnpm preview   # sirve el build de producción localmente
```

## Estructura

```
src/
├── app/
│   ├── boot/            # Pantalla de encendido (BootScreen + secuencia de carga)
│   ├── desktop/          # Escritorio: wallpaper, barra de menú
│   └── window-manager/    # Sistema de ventanas (desktop y mobile)
├── components/
│   ├── dock/              # Dock inferior
│   ├── desktop-icons/     # Iconos del escritorio (arrastrables en desktop, grid fija en mobile)
│   └── ui/                 # Componentes shadcn/ui
├── config/
│   ├── apps.ts             # Registro central de apps (icono, componente, tamaño de ventana)
│   └── layout.ts           # Constantes de layout compartidas (alturas reservadas)
├── data/                   # Contenido del portafolio, separado del código
├── features/                # Una carpeta por app del dock (Profile, Skills, Projects, Terminal...)
├── store/                    # Zustand: estado de ventanas y del sistema
├── hooks/                     # useMediaQuery, etc.
└── types/                      # Tipos compartidos
```

## Apps del sistema

Profile · Skills · Education · Projects · Terminal · Assistant · Contact — cada una vive en `src/features/<app>/` y consume datos desde `src/data/`.

## Notas

- `data/contact.ts` y `data/projects.ts` tienen enlaces (GitHub, LinkedIn, CompuTrabajo, repos) marcados como pendientes (`href: null`) — reemplázalos con las URLs reales cuando las tengas.
- El diseño es responsive: en desktop se ve el escritorio completo con ventanas flotantes; en mobile las apps se abren a pantalla completa.
