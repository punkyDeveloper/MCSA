import Nav from './componentes/navbar/nav.jsx' 
import Footer from './componentes/footer/footer.jsx'
import Portada from './componentes/portada/portada.jsx'
import Form from './componentes/form/form.jsx'
import Servicios from './componentes/servisios/servicios.jsx'
import Botnwpp from './componentes/botonwpp/boton.jsx'
import SobreNosotros from './componentes/sobre_nosotros/nosotros.jsx'
import Aliados from './componentes/alidos/aliados.jsx'
import Opiniones from './componentes/opiniones/opiniones.jsx'

function App() {

  return (
    <>

      <Nav />
      <Portada />
      <Botnwpp />
      <Servicios />
      <SobreNosotros />
      <Aliados />
      <Opiniones />
      <Form />
      <Footer />
      
    </>
  )
}

export default App
