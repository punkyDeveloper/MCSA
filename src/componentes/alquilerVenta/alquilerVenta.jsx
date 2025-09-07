import React, { useState } from 'react';
import { Search, Filter, ShoppingCart, Package, Settings, Zap, Droplets, Wind, Sun } from 'lucide-react';
import Nav from '../navbar/nav';
import Footer from '../footer/footer';

const AlquilerVenta = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');

  const products = [
    {
      id: 1,
      name: "Panel Solar Industrial 500W",
      price: 1850000,
      rentalPrice: 85000,
      isForSale: true,
      isForRent: true,
      category: "Energía Renovable",
      icon: Sun,
      description: "Sistema fotovoltaico de alta eficiencia para instalaciones comerciales e industriales."
    },
    {
      id: 2,
      name: "Sistema de Tratamiento de Aguas",
      price: 3200000,
      rentalPrice: null,
      isForSale: true,
      isForRent: false,
      category: "Tratamiento de Agua",
      icon: Droplets,
      description: "Planta compacta de tratamiento para aguas residuales industriales y municipales."
    },
    {
      id: 3,
      name: "Generador Eólico Comercial",
      price: 4500000,
      rentalPrice: 180000,
      isForSale: true,
      isForRent: true,
      category: "Energía Eólica",
      icon: Wind,
      description: "Turbina eólica de última generación para proyectos de energía sostenible."
    },
    {
      id: 4,
      name: "Equipo de Monitoreo Ambiental",
      price: 950000,
      rentalPrice: 45000,
      isForSale: true,
      isForRent: true,
      category: "Monitoreo",
      icon: Settings,
      description: "Sistema avanzado de monitoreo de calidad del aire y parámetros ambientales."
    },
    {
      id: 5,
      name: "Planta de Biogás Modular",
      price: 6800000,
      rentalPrice: 250000,
      isForSale: false,
      isForRent: true,
      category: "Bioenergía",
      icon: Zap,
      description: "Sistema modular para generación de biogás a partir de residuos orgánicos."
    },
    {
      id: 6,
      name: "Sistema de Gestión de Residuos",
      price: 2100000,
      rentalPrice: null,
      isForSale: true,
      isForRent: false,
      category: "Gestión de Residuos",
      icon: Package,
      description: "Solución integral automatizada para clasificación y gestión de residuos."
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === 'all' || 
                         (filterType === 'sale' && product.isForSale) ||
                         (filterType === 'rent' && product.isForRent);
    return matchesSearch && matchesFilter;
  });

  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <>
      <Nav />
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Soluciones Ambientales Profesionales
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Equipos y tecnologías especializadas para proyectos ambientales e industriales. 
                Disponibles para compra directa o alquiler flexible.
              </p>
            </div>
          </div>
        </div>

        {/* Search and Filter Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-lg shadow-sm border p-8 mb-12">
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Buscar equipos por nombre o categoría..."
                  className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent text-gray-900 placeholder-gray-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex items-center space-x-4">
                <Filter className="text-gray-500 h-5 w-5" />
                <select
                  className="px-6 py-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent text-gray-900 bg-white"
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value)}
                >
                  <option value="all">Todos los productos</option>
                  <option value="sale">Disponible para venta</option>
                  <option value="rent">Disponible para alquiler</option>
                </select>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
            {filteredProducts.map((product) => {
              const IconComponent = product.icon;
              return (
                <div key={product.id} className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 border border-gray-100">
                  {/* Product Image with Overlay */}
                  <div className="relative h-72 overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/95 backdrop-blur-sm text-gray-900 px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                        {product.category}
                      </span>
                    </div>

                    {/* Icon */}
                    <div className="absolute bottom-4 left-4">
                      <div className="bg-white/95 backdrop-blur-sm rounded-full w-14 h-14 flex items-center justify-center shadow-lg">
                        <IconComponent className="h-7 w-7 text-gray-800" />
                      </div>
                    </div>

                    {/* Availability Status */}
                    <div className="absolute top-4 right-4 space-y-2">
                      {product.isForSale && (
                        <div className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                          VENTA
                        </div>
                      )}
                      {product.isForRent && (
                        <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                          ALQUILER
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-gray-700 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 mb-6 text-base leading-relaxed">
                      {product.description}
                    </p>

                    {/* Action Buttons */}
                    <div className="space-y-3">
                      <button className="w-full bg-gradient-to-r from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700 text-white py-4 px-6 rounded-xl transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl">
                        Cotizar
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <div className="bg-gray-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
                <Search className="h-12 w-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                No se encontraron productos
              </h3>
              <p className="text-gray-600 max-w-md mx-auto">
                No hay productos que coincidan con tu búsqueda. Intenta con términos diferentes o revisa los filtros aplicados.
              </p>
            </div>
          )}
        </div>

        {/* Call to Action Section */}
        <div className="bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                ¿No encuentras lo que necesitas?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Contáctanos para soluciones personalizadas y asesoría especializada en tecnología ambiental.
              </p>
              <button className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Contactar Especialista
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AlquilerVenta;