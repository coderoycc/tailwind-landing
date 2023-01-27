/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit', //crea los elementos necesarios en la hoja de estilos (motor para seguir los cambios)
  content: ['./*.html'], //indica los elementos que escaneará para aplicar los estilos
  theme: {
    extend: {},
  },
  plugins: [],
}
