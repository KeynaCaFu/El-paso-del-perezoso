/** @type {import('next').NextConfig} */
const nextConfig = {
  // Exportación estática: genera HTML plano en /out, compatible con GitHub Pages,
  // Netlify, Apache/XAMPP o cualquier hosting de archivos.
  output: "export",

  // El export estático no puede usar el optimizador de imágenes de Next en tiempo
  // de ejecución, así que servimos las imágenes tal cual desde /public.
  images: {
    unoptimized: true,
  },

  // Genera carpetas con index.html (mejor para hosting estático).
  trailingSlash: true,
};

export default nextConfig;
