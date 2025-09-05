import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Fondo from '../../assets/contactanos.png';

const FormularioContacto = () => {
  const form = useRef();

  const enviarCorreo = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_sos1gka', // ID de tu servicio
        'template_9fsgkdo',  // ← Reemplaza con tu ID real
        form.current,
        '_Kp8yIbv2jL08eZe6'    // ← Reemplaza con tu clave pública real
      )
      .then(
        (result) => {
          alert('Mensaje enviado con éxito');
          form.current.reset();
        },
        (error) => {
          alert('Error al enviar el mensaje');
          console.log(error.text);
        }
      );
  };

  return (
    <section
      className="relative bg-cover bg-center text-white py-16 px-4 md:px-12"
      style={{ backgroundImage: `url(${Fondo})` }}
    >
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Formulario */}
        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-green-400 mb-4">Déjanos tus datos</h2>
          <p className="text-gray-200 mb-6">
            Contáctanos para conocer más sobre nuestros servicios de ingeniería ambiental.
          </p>
          <form ref={form} onSubmit={enviarCorreo} className="space-y-4">
            <input type="text" name="name" placeholder="Nombre" className="w-full p-3 rounded bg-white text-black" required />
            <input type="text" name="apellidos" placeholder="Apellidos" className="w-full p-3 rounded bg-white text-black" required />
            <input type="email" name="email" placeholder="Correo electrónico" className="w-full p-3 rounded bg-white text-black" required />
            <select name="pais" className="w-full p-3 rounded bg-white text-black" required>
              <option value="">País</option>
              <option>Colombia</option>
            </select>
            <select name="estado" className="w-full p-3 rounded bg-white text-black" required>
              <option value="">Estado</option>
              <option>Cundinamarca</option>
              <option>Antioquia</option>
            </select>
            <input type="text" name="title" placeholder="Asunto" className="w-full p-3 rounded bg-white text-black" required />

              <textarea
                name="message"  
                placeholder="Tu mensaje"
                className="w-full p-3 rounded bg-white text-black"
                rows="5"
                required
              ></textarea>
            <button type="submit" className="w-full bg-green-500 hover:bg-green-400 text-white py-3 rounded font-medium">
              Enviar
            </button>
          </form>
        </div>

        {/* Información y mapa */}
        <div className="text-white space-y-6">
          <h2 className="text-3xl font-bold text-green-400">Contáctanos</h2>
          <p className="text-lg">
            <strong>Teléfono:</strong> +57 (300) 123-4567<br />
            <strong>Dirección:</strong> Cra 123 #45-67, Bogotá, Colombia
          </p>
          <div className="w-full h-160 bg-white rounded overflow-hidden shadow-lg">
            <iframe
              title="Mapa"
              src="https://maps.google.com/maps?q=bogota%20colombia&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormularioContacto;
