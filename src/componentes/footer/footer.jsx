import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-12  border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Columna 1 */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Empresa</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-green-400 transition">Sobre nosotros</a></li>
            <li><a href="#" className="hover:text-green-400 transition">Servicios</a></li>
            <li><a href="#" className="hover:text-green-400 transition">Proyectos</a></li>
            <li><a href="#" className="hover:text-green-400 transition">Blog</a></li>
          </ul>
        </div>

        {/* Columna 2 */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Soporte</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-green-400 transition">Centro de ayuda</a></li>
            <li><a href="#" className="hover:text-green-400 transition">Contáctanos</a></li>
            <li><a href="#" className="hover:text-green-400 transition">FAQ</a></li>
            <li><a href="#" className="hover:text-green-400 transition">Política de privacidad</a></li>
          </ul>
        </div>

        {/* Columna 3 */}


        {/* Columna 4 */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Síguenos</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-green-400 transition">Facebook</a></li>
            <li><a href="#" className="hover:text-green-400 transition">LinkedIn</a></li>
            <li><a href="#" className="hover:text-green-400 transition">YouTube</a></li>
            <li><a href="#" className="hover:text-green-400 transition">Instagram</a></li>
          </ul>
        </div>
      </div>

      {/* Footer inferior */}
      <div className="mt-10 border-t border-gray-600 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Calderlab. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
