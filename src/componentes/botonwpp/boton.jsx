import React from 'react';

const BotonWhatsapp = () => {
  return (
    <a
      href="https://wa.me/573001112233" // Reemplaza con tu número
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 animate-bounce"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        className="w-14 h-14 rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
      />
    </a>
  );
};

export default BotonWhatsapp;
