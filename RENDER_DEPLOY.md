# 🚀 Deploy en Render

Este proyecto está configurado para desplegarse fácilmente en Render.

## 📋 Opción 1: Deploy desde GitHub (Recomendado)

### Paso 1: Sube el código a GitHub

1. Crea un nuevo repositorio en GitHub
2. Desde la terminal, ejecuta:

```bash
cd dashboard
git init
git add .
git commit -m "Initial commit - Dashboard Design Systems"
git branch -M main
git remote add origin TU_URL_DE_GITHUB
git push -u origin main
```

### Paso 2: Conecta con Render

1. Ve a [render.com](https://render.com) y crea una cuenta o inicia sesión
2. Haz clic en "New +" y selecciona "Web Service"
3. Conecta tu repositorio de GitHub
4. Render detectará automáticamente que es un proyecto Next.js
5. Configura:
   - **Name**: `design-systems-benchmark` (o el nombre que prefieras)
   - **Environment**: `Node`
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
   - **Plan**: Free (o el plan que prefieras)

6. Haz clic en "Create Web Service"
7. Render comenzará a construir y desplegar tu aplicación
8. Obtendrás una URL como: `https://design-systems-benchmark.onrender.com`

## 📋 Opción 2: Deploy Manual desde el Dashboard de Render

1. Ve a [render.com](https://render.com)
2. Haz clic en "New +" → "Web Service"
3. Selecciona "Build and deploy from a Git repository"
4. O si prefieres, puedes usar "Deploy public Git repository" y pegar la URL de tu repo

### Configuración Manual:

- **Name**: `design-systems-benchmark`
- **Environment**: `Node`
- **Region**: Elige la región más cercana
- **Branch**: `main` (o tu rama principal)
- **Root Directory**: `dashboard` (si el repo contiene otras carpetas)
- **Build Command**: `npm install && npm run build`
- **Start Command**: `npm start`
- **Plan**: Free

## 📋 Opción 3: Usar render.yaml (Blueprint)

Si prefieres usar el archivo `render.yaml`:

1. Sube el código a GitHub
2. En Render, haz clic en "New +" → "Blueprint"
3. Conecta tu repositorio
4. Render leerá automáticamente el archivo `render.yaml` y configurará todo

## ⚙️ Variables de Entorno

Por ahora no necesitas variables de entorno adicionales. Si en el futuro necesitas agregar algunas, puedes hacerlo desde el dashboard de Render en la sección "Environment".

## 🔄 Actualizaciones Automáticas

Si conectas tu repositorio de GitHub, Render desplegará automáticamente cada vez que hagas push a la rama principal.

## 📝 Notas

- El plan gratuito de Render puede tardar un poco en iniciar después de un período de inactividad (cold start)
- Para producción, considera actualizar a un plan de pago para mejor rendimiento
- La primera construcción puede tardar varios minutos

## 🐛 Solución de Problemas

Si encuentras errores:

1. Revisa los logs en el dashboard de Render
2. Verifica que `package.json` tenga los scripts correctos
3. Asegúrate de que todas las dependencias estén en `dependencies` (no solo en `devDependencies`)

