# 📊 Dashboard de Benchmark de Design Systems

Dashboard interactivo para visualizar y analizar el benchmark de sistemas de diseño y sus tokens, construido con Next.js, TypeScript, Tailwind CSS y Shadcn/ui.

🔗 **Repositorio**: [GitHub](https://github.com/Criszoraid/Benchmark-tokens-DS)

## 🚀 Características

- **📈 Tarjetas de Estadísticas**: Métricas clave en tiempo real
- **📋 Tabla de Datos**: Vista completa y organizada de todos los sistemas
- **🔍 Vista Detallada**: Tarjetas individuales con toda la información de cada sistema
- **📊 Gráficos Interactivos**: Visualizaciones con Recharts
  - Colecciones de variables por sistema
  - Distribución de metadatos
  - Soporte de Typography comparativo

## 🛠️ Tecnologías

- **Next.js 15** - Framework React con App Router
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Estilos utilitarios
- **Shadcn/ui** - Componentes UI modernos
- **Recharts** - Gráficos y visualizaciones interactivas

## 📦 Instalación

```bash
# Clonar el repositorio
git clone https://github.com/Criszoraid/Benchmark-tokens-DS.git
cd Benchmark-tokens-DS

# Instalar dependencias
npm install
```

## 🏃 Ejecutar en Desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 🚀 Deploy en Render

El proyecto está configurado para desplegarse fácilmente en Render. Consulta [RENDER_DEPLOY.md](./RENDER_DEPLOY.md) para instrucciones detalladas.

### Deploy Rápido:

1. Ve a [render.com](https://render.com)
2. Conecta tu repositorio de GitHub: `Criszoraid/Benchmark-tokens-DS`
3. Render detectará automáticamente que es Next.js
4. Configura:
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
5. ¡Listo! Tu dashboard estará disponible en una URL de Render

## 📊 Estructura del Proyecto

```
dashboard/
├── app/
│   ├── data.json         # Datos del benchmark
│   ├── page.tsx          # Página principal del dashboard
│   ├── layout.tsx        # Layout de la aplicación
│   └── globals.css       # Estilos globales
├── components/
│   ├── stats-cards.tsx   # Tarjetas de estadísticas
│   ├── data-table.tsx    # Tabla de datos
│   ├── charts.tsx        # Componentes de gráficos
│   ├── detail-view.tsx   # Vista detallada de sistemas
│   └── ui/               # Componentes Shadcn/ui
├── types.ts              # Tipos TypeScript
├── render.yaml           # Configuración de Render
└── package.json          # Dependencias del proyecto
```

## 🎨 Componentes Shadcn/ui Utilizados

- **Card** - Contenedores de contenido
- **Table** - Tabla de datos
- **Badge** - Etiquetas de estado
- **Tabs** - Navegación por pestañas

## 📝 Datos

Los datos se cargan desde `app/data.json`. Este archivo se generó desde el Excel original (`design_systems_benchmark.xlsx`). Para actualizar los datos:

1. Exporta tu Excel actualizado a JSON
2. Reemplaza `app/data.json` con los nuevos datos
3. El dashboard se actualizará automáticamente

## 🔄 Scripts Disponibles

- `npm run dev` - Ejecuta el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm start` - Ejecuta la aplicación en modo producción
- `npm run lint` - Ejecuta el linter

## 📄 Licencia

Este proyecto es de código abierto y está disponible para uso personal y comercial.

## 👤 Autor

**Criszoraid**

---

⭐ Si este proyecto te resulta útil, ¡no olvides darle una estrella en GitHub!
