//
import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import whatsappIcon from "../../../assets/whatsapp-icon.png";
import mail from "../../../assets/mail.png";


const Popup = ({ message, onClose }) => (
  <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
    <div
      className="bg-white mx-auto rounded-lg p-2 max-w-md"
    >
      <p className="text-xl text-justify">{message}</p>
      <button
        onClick={onClose}
        className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
      >
        OK
      </button>
      
    </div>
  </div>
);

const Contacto = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    Nombre: "",
    Telefono: "",
    Email: "",
    Mensaje: "",
    ok: false,
  });
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [toHome, setToHome] = useState(false);


  const handleWhatsAppClick = (phoneNumber) => {
    const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}`;
    window.open(whatsappLink, "_blank");
  };

  const sendEmail = (e) => {
    e.preventDefault();

    let ok = true; // Bandera para verificar si al menos un campo requerido está completado

    // Validar campos requeridos
    if (
      formData.Nombre === "" ||
      (formData.Telefono === "" && formData.Email === "") ||
      formData.Mensaje === ""
    ) {
      // Si el nombre está vacío, o ambos teléfono y correo electrónico están vacíos, o el mensaje está vacío, establecer la bandera ok en falso y mostrar mensaje de error
      ok = false;
      setPopupMessage(
        `Los campos Nombre, Mensaje y al menos uno de Teléfono o Correo Electrónico son requeridos`
      );
      setPopupVisible(true);
    } else {
      // Si el nombre no está vacío y al menos uno de teléfono o correo electrónico tiene información, y el mensaje no está vacío, continuar con el envío del formulario
      const data = {
        to_name: "Soporte Desarrollar",
        from_name: "www.desarrollar.com.ar",
        message: `
          Nombre: ${formData.Nombre}
          Teléfono: ${formData.Telefono}
          Correo Electrónico: ${formData.Email}
          Mensaje: ${formData.Mensaje}
        `,
      };

      emailjs
        .send("service_vjy8sr7", "template_iju7pan", data, "gpbomxlTYg_HN8BXB")
        .then(
          (result) => {
            console.log("SUCCESS!", result.text);
            setPopupMessage("Mensaje enviado correctamente");
            setPopupVisible(true);
            // Redirigir a la página principal después de 3 segundos
            setToHome(true);
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const closePopup = () => {
    setPopupVisible(false);
    if (toHome) {
      window.location.href = "/";
    }
  };

return (
  <div className="container mx-auto p-4 flex flex-col md:flex-row justify-center">
    {popupVisible && <Popup message={popupMessage} onClose={closePopup} />}
    <div className="w-full md:w-1/2 md:pr-2">
      <h1 className="text-2xl font-bold mb-4">CONTACTENOS</h1>
      <form ref={form} onSubmit={sendEmail}>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 pr-2">
            <label htmlFor="Nombre">Nombre:</label>
            <input
              type="text"
              id="Nombre"
              name="Nombre"
              value={formData.Nombre}
              onChange={handleChange}
              className={`block w-full p-2 border ${
                formData.Nombre === "" ? "border-red-500" : "border-gray-300"
              } rounded-md`}
            />
          </div>
          <div className="md:w-1/2">
            <label htmlFor="Telefono">Teléfono:</label>
            <input
              type="text"
              id="Telefono"
              name="Telefono"
              value={formData.Telefono}
              onChange={handleChange}
              className={`block w-full p-2 border ${
                formData.Telefono === ""
                  ? "border-red-500"
                  : "border-gray-300"
              } rounded-md`}
            />
          </div>
        </div>
        <label htmlFor="Email">Correo Electrónico:</label>
        <input
          type="Email"
          id="Email"
          name="Email"
          value={formData.Email}
          onChange={handleChange}
          className={`block w-full p-2 border ${
            formData.Email === "" ? "border-red-500" : "border-gray-300"
          } rounded-md`}
        />
        <label htmlFor="Mensaje">Consulta:</label>
        <textarea
          id="Mensaje"
          name="Mensaje"
          value={formData.Mensaje}
          onChange={handleChange}
          className={`block h-40 w-full p-2 border ${
            formData.Mensaje === "" ? "border-red-500" : "border-gray-300"
          } rounded-md`}
        ></textarea>

        <button
          type="submit"
          className="mb-4 bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded mt-4 self-center md:self-start"
          value="Send"
        >
          Enviar
        </button>
      </form>
    </div>
    
    {/* Barra lateral */}
    <div className="md:w-1/3 md:pl-4 md:py-2 bg-gray-200 p-4 flex flex-col items-center">
      <div className="flex items-center mt-3">
        <p className="text-3xs font-medium mb-4 mr-2">
          Emiliano: +54 (351) 590-2963
        </p>
        <img
          onClick={() => handleWhatsAppClick("5493515902963")}
          src={whatsappIcon}
          alt="WhatsApp"
          className="cursor-pointer w-5 h-5 mb-4 hover:h-8 hover:w-8"
        />
      </div>
      <div className="flex items-center mt-3">
        <p className="text-3xs font-medium mb-4 mr-2">
          Jorge: +54 (02281) 53-1457
        </p>
        <img
          onClick={() => handleWhatsAppClick("5492281531457")}
          src={whatsappIcon}
          alt="WhatsApp"
          className="cursor-pointer w-5 h-5 mb-4 hover:h-8 hover:w-8"
        />
      </div>
      <div className="flex items-center mt-3">
        <p className="text-3xs font-medium mb-4 mr-2">
          soportedesarrollar
          @gmail.com
        </p>
        <a href="mailto:marialauralobrundo@gmail.com">
          <img
            src={mail}
            alt="Correo electrónico"
            className="cursor-pointer w-5 h-5 mb-4 hover:h-8 hover:w-8"
          />
        </a>
      </div>
    </div>
  </div>
);

  
};

export default Contacto;
