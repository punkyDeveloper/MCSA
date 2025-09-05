import React, { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import Logo from '../../assets/logo.jpeg';


const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = (menuKey) => {
    setActiveDropdown(activeDropdown === menuKey ? null : menuKey);
  };

  const menuItems = [
    {
      name: 'Servicios',
      key: 'servicios',
      sections: [
        {
          title: 'Monitoreo Ambiental',
          icon: '🌿',
          items: [
            { name: 'Calidad del Aire', desc: 'Monitoreo continuo de emisiones' },
            { name: 'Calidad del Agua', desc: 'Análisis y control hídrico' },
            { name: 'Ruido Ambiental', desc: 'Medición acústica' },
            { name: 'Suelos', desc: 'Caracterización y seguimiento' }
          ]
        },
        {
          title: 'Consultoría',
          icon: '📋',
          items: [
            { name: 'Estudios Ambientales', desc: 'EIA, PMA y PUEAA' },
            { name: 'Licencias Ambientales', desc: 'Tramitología especializada' },
            { name: 'Auditorías', desc: 'Cumplimiento normativo' }
          ]
        }
      ]
    },
    {
      name: 'Soluciones',
      key: 'soluciones',
      sections: [
        {
          title: 'Tecnología',
          icon: '⚙️',
          items: [
            { name: 'Equipos de Monitoreo', desc: 'Última tecnología' },
            { name: 'Software Especializado', desc: 'Análisis de datos' },
            { name: 'Mantenimiento', desc: 'Soporte técnico' }
          ]
        },
        {
          title: 'Capacitación',
          icon: '🎓',
          items: [
            { name: 'Cursos Técnicos', desc: 'Personal especializado' },
            { name: 'Certificaciones', desc: 'Normativas vigentes' }
          ]
        }
      ]
    }
  ];

  return (
    <header className="bg-gradient-to-r from-gray-900 to-black text-white relative z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between min-h-20 py-3">
          {/* Logo MCSA */}
          <div className="flex items-center space-x-4">
            <div className="w-14 h-14 flex items-center justify-center">
              <img 
                src={Logo} 
                alt="MCSA - Monitoreos y Control Ambiental S.A.S" 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="text-white">
              <div className="text-xl font-bold tracking-wider">MCSA</div>
              <div className="text-xs text-gray-300 leading-tight">
                MONITOREOS Y CONTROL<br/>
                AMBIENTAL S.A.S
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 relative">
            <div className="flex gap-6">
              <a href="/" className="font-medium hover:text-green-400 transition-colors duration-200">
                Inicio
              </a>
              <a href="/Servicios" className="font-medium hover:text-green-400 transition-colors duration-200">
                Servicios
              </a>
                <a href="#" className="font-medium hover:text-green-400 transition-colors duration-200">
                Soluciones
              </a>

              {/* {menuItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => toggleDropdown(item.key)}
                  className="flex items-center space-x-2 font-medium hover:text-green-400 transition-colors duration-200"
                >
                  <span>{item.name}</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === item.key ? 'rotate-180' : ''
                    }`}
                  />
                </button>
              ))} */}

            </div>
            
            <button className="ml-6 bg-gradient-to-r from-green-600 to-green-500 text-white px-6 py-2 rounded-full font-medium hover:from-green-700 hover:to-green-600 transition-all duration-200 shadow-md">
              Contacto
            </button>
          </nav>

          {/* Mobile Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-green-400 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Fullscreen Menu */}
      <div
        className={`fixed inset-0 z-50 bg-gradient-to-br from-gray-900 to-black transition-transform duration-300 ease-in-out transform ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } lg:hidden`}
      >
        <div className="p-6 space-y-8 overflow-y-auto h-full">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 flex items-center justify-center">
                <img 
                  src="logo.jpg" 
                  alt="MCSA - Monitoreos y Control Ambiental S.A.S" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-white">
                <div className="text-lg font-bold tracking-wider">MCSA</div>
                <div className="text-xs text-gray-300 leading-tight">
                  MONITOREOS Y CONTROL<br/>
                  AMBIENTAL S.A.S
                </div>
              </div>
            </div>
            <button 
              onClick={() => setMobileMenuOpen(false)} 
              className="text-white hover:text-green-400 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="space-y-6">
            <a
              href="/"
              className="block text-white hover:text-green-400 transition-colors font-medium text-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Inicio
            </a>
            
            <a
              href="/servicios"
              className="block text-white hover:text-green-400 transition-colors font-medium text-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Servicios
            </a>
            <a
              href="#"
              className="block text-white hover:text-green-400 transition-colors font-medium text-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Soluciones
            </a>

            {/* {menuItems.map((item) => (
              <div key={item.key} className="space-y-4">
                <button
                  onClick={() => toggleDropdown(item.key)}
                  className="flex items-center justify-between w-full text-white text-lg font-medium hover:text-green-400 transition-colors"
                >
                  {item.name}
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === item.key ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                {activeDropdown === item.key && (
                  <div className="ml-4 space-y-6 border-l-2 border-green-500 pl-4">
                    {item.sections.map((section, index) => (
                      <div key={index} className="space-y-3">
                        <div className="flex items-center space-x-2">
                          <span className="text-xl">{section.icon}</span>
                          <h3 className="font-semibold text-green-400 text-base">{section.title}</h3>
                        </div>
                        <ul className="space-y-2">
                          {section.items.map((menuItem, i) => (
                            <li key={i}>
                              <a
                                href="#"
                                className="block text-gray-300 hover:text-white transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                <div className="font-medium">{menuItem.name}</div>
                                <div className="text-sm text-gray-400">{menuItem.desc}</div>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))} */}


          </nav>

          <button 
            className="w-full bg-gradient-to-r from-green-600 to-green-500 text-white px-6 py-3 rounded-full font-medium hover:from-green-700 hover:to-green-600 transition-all duration-200 shadow-lg"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contacto
          </button>
        </div>
      </div>

      {/* Desktop Dropdown */}
      {activeDropdown && (
        <div className="hidden lg:block absolute left-0 top-full w-full bg-gradient-to-b from-gray-900 to-black border-t border-gray-700 shadow-2xl z-40">
          <div className="max-w-7xl mx-auto px-10 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {menuItems.find((item) => item.key === activeDropdown)?.sections.map((section, idx) => (
                <div key={idx} className="space-y-6">
                  <div className="flex items-center space-x-3 border-b border-green-500 pb-4">
                    <span className="text-2xl">{section.icon}</span>
                    <h3 className="text-xl font-semibold text-green-400">{section.title}</h3>
                  </div>
                  <ul className="space-y-4">
                    {section.items.map((item, i) => (
                      <li key={i}>
                        <a href="#" className="block group hover:bg-gray-800/50 p-3 rounded-lg transition-all duration-200">
                          <div className="text-lg font-medium text-white group-hover:text-green-400 transition-colors">
                            {item.name}
                          </div>
                          {item.desc && (
                            <div className="text-sm text-gray-400 group-hover:text-gray-300 mt-1 leading-relaxed">
                              {item.desc}
                            </div>
                          )}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Backdrop */}
      {(activeDropdown || mobileMenuOpen) && (
        <div
          className="fixed inset-0 z-30 bg-black/40 backdrop-blur-sm"
          onClick={() => {
            setActiveDropdown(null);
            setMobileMenuOpen(false);
          }}
        />
      )}
    </header>
  );
};

export default Header;