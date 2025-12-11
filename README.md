# Dashboard de Benchmark de Design Systems

Dashboard interactivo para visualizar y analizar el benchmark de sistemas de diseño y sus tokens.

## 🚀 Características

- **Tarjetas de Estadísticas**: Métricas clave en tiempo real
- **Tabla de Datos**: Vista completa y filtrable de todos los sistemas
- **Vista Detallada**: Tarjetas individuales con toda la información de cada sistema
- **Gráficos Interactivos**: Visualizaciones con Recharts
  - Colecciones de variables por sistema
  - Distribución de metadatos
  - Soporte de Typography

## 🛠️ Tecnologías

- **Next.js 15** - Framework React
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Estilos
- **Shadcn/ui** - Componentes UI
- **Recharts** - Gráficos y visualizaciones

## 📦 Instalación

```bash
npm install
```

## 🏃 Ejecutar en Desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📊 Estructura

```
dashboard/
├── app/
│   └── page.tsx          # Página principal del dashboard
├── components/
│   ├── stats-cards.tsx   # Tarjetas de estadísticas
│   ├── data-table.tsx    # Tabla de datos
│   ├── charts.tsx        # Componentes de gráficos
│   └── detail-view.tsx   # Vista detallada de sistemas
├── data/
│   └── data.json         # Datos del benchmark
└── types.ts              # Tipos TypeScript
```

## 🎨 Componentes Shadcn/ui Utilizados

- Card
- Table
- Badge
- Tabs

## 📝 Notas

Los datos se cargan desde `data/data.json`. Para actualizar los datos, edita ese archivo o reemplázalo con una nueva exportación del Excel.
