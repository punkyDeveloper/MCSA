import Nav from '../navbar/nav.jsx';
import Footer from '../footer/footer.jsx';
import Portada from '../portada/portadaServicios.jsx';
import Botnwpp from '../botonwpp/boton.jsx'
import Calibracion from '../../assets/calibrar.png';
import Monitoreo from '../../assets/monitoreo.png';
// import Automatizacion from '../../assets/automatizacion.jpg';
import Mantenimiento from '../../assets/mantenimiento.png';

const secciones = [
  {
    titulo: 'Calibración de Equipos',
    descripcion:
      'Aseguramos que tus instrumentos de medición funcionen con la máxima precisión mediante calibraciones trazables y certificadas.',
    detalle:
      'Este proceso es fundamental para industrias que requieren exactitud en la medición, como laboratorios, plantas de producción y servicios técnicos.',
    imagen: Calibracion,
  },
  {
    titulo: 'Monitoreo Ambiental',
    descripcion:
      'Realizamos mediciones de parámetros ambientales como calidad del aire, ruido y agua, de manera continua o puntual.',
    detalle:
      'Esto permite a las empresas cumplir con normativas ambientales, detectar anomalías y tomar decisiones basadas en datos reales.',
    imagen: Monitoreo,
  },
  {
    titulo: 'Automatización de Procesos',
    descripcion:
      'Desarrollamos sistemas automáticos para optimizar la producción y reducir errores humanos.',
    detalle:
      'Ideal para empresas que buscan eficiencia operativa, trazabilidad de procesos y ahorro de recursos.',
    imagen: 'RUTA_DE_LA_IMAGEN_3',
  },
  {
    titulo: 'Mantenimiento Preventivo',
    descripcion:
      'Implementamos rutinas de revisión y reparación para evitar fallos inesperados en maquinaria o equipos.',
    detalle:
      'Esto incrementa la vida útil de tus activos, reduce tiempos muertos y mejora la seguridad operativa.',
    imagen: Mantenimiento,
  },
];

const ModuloExplicativo = () => {
  return (
    <>
      <Nav />
      <Botnwpp />

      <Portada />
      <section className="bg-gradient-to-b from-black via-gray-900 to-black text-white py-24 px-6 md:px-10">
        <div className="space-y-32 max-w-7xl mx-auto">
          {secciones.map((item, index) => (
            <section
              key={index}
              className={`flex flex-col lg:flex-row items-center gap-10 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="lg:w-1/2 w-full">
                <img
                  src={item.imagen}
                  alt={item.titulo}
                  className="w-full rounded-2xl shadow-xl object-cover h-80 sm:h-96 lg:h-[400px]"
                />
              </div>
              <div className="lg:w-1/2 w-full space-y-4">
                <h3 className="text-3xl md:text-4xl font-bold text-green-300">{item.titulo}</h3>
                <p className="text-gray-200 text-lg">{item.descripcion}</p>
                <p className="text-gray-400 leading-relaxed text-sm md:text-base">{item.detalle}</p>
              </div>
            </section>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ModuloExplicativo;
