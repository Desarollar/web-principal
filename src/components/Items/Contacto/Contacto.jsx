import  { useRef, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import emailjs from "emailjs-com";

const Popup = ({ message, onClose }) => (
  <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
    <div className="bg-white mx-auto rounded-lg p-2 max-w-md">
      <p className="text-xl text-justify">{message}</p>
      <button
        onClick={onClose}
        className="mt-4 bg-blue-500 hover:bg-blue-800 text-white py-2 px-4 rounded"
      >
        OK
      </button>
    </div>
  </div>
);

const Contacto = () => {
  const form = useRef();
  const contactInfo = useSelector((state) => state.contact.contactInfo);
  const [formData, setFormData] = useState(contactInfo);
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [toHome, setToHome] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    setFormData(contactInfo);
  }, [contactInfo]);

  const handleWhatsAppClick = (phoneNumber) => {
    const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}`;
    window.open(whatsappLink, "_blank");
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    let ok = true;

    if (
      formData.Nombre === "" ||
      (formData.Telefono === "" && formData.Email === "") ||
      formData.Mensaje === ""
    ) {
      ok = false;
      setPopupMessage(
        `Los campos Nombre, Mensaje y al menos uno de Teléfono o Correo Electrónico son requeridos`
      );
      setPopupVisible(true);
    } else {
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
    <div className="container text-gray-500 mx-auto p-4 flex flex-col md:flex-row justify-center">
      {popupVisible && <Popup message={popupMessage} onClose={closePopup} />}
      <div className="w-full md:w-1/2 md:pr-2">
        <h1 className="text-2xl text-gray-500 font-bold mb-4">CONTACTENOS</h1>
        <form ref={form} onSubmit={sendEmail}>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 text-gray-500 pr-2">
              <label htmlFor="Nombre">Nombre:</label>
              <input
                type="text"
                id="Nombre"
                name="Nombre"
                value={formData.Nombre}
                onChange={handleChange}
                className={`block w-full  p-2 border ${isSubmitted && formData.Nombre === "" ? "border-red-500" : "border-gray-300"
                  } rounded-md`}
              />
            </div>
            <div className="md:w-1/2 text-gray-500">
              <label htmlFor="Telefono">Teléfono:</label>
              <input
                type="text"
                id="Telefono"
                name="Telefono"
                value={formData.Telefono}
                onChange={handleChange}
                className={`block w-full  p-2 border ${isSubmitted && formData.Telefono === "" ? "border-red-500" : "border-gray-300"
                  } rounded-md`}
              />
            </div>
          </div>
          <div className="text-gray-500 mt-2">
            <label htmlFor="Email">Correo Electrónico:</label>
            <input
              type="email"
              id="Email"
              name="Email"
              value={formData.Email}
              onChange={handleChange}
              className={`block w-full  p-2 border ${isSubmitted && formData.Email === "" ? "border-red-500" : "border-gray-300"
                } rounded-md`}
            />
          </div>
          <div className="text-gray-500 mt-2">
            <label htmlFor="Mensaje">Mensaje:</label>
            <textarea
              id="Mensaje"
              name="Mensaje"
              value={formData.Mensaje}
              onChange={handleChange}
              className={`block w-full  p-2 border ${isSubmitted && formData.Mensaje === "" ? "border-red-500" : "border-gray-300"
                } rounded-md`}
            />
          </div>
          <div className="text-gray-500 mt-2">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
      <div className="md:w-1/2 my-16 md:pl-4 md:py-2 bg-blue-950 h-56 bg-opacity-20 border-2 border-gray-300 p-4 flex flex-col items-center rounded-lg shadow-xl justify-center">
        <div className="flex items-center mt-3">
          <p className="text-lg font-medium mb-4 mr-2 text-gray-500">
            Emiliano: +54 (351) 590-2963
          </p>
          <img
            onClick={() => handleWhatsAppClick("5493515902963")}
            src='data:image/svg+xml,%3Csvg width="213px" height="213px" viewBox="0 0 24.00 24.00" id="meteor-icon-kit__regular-whatsapp" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="%23aaaaaa" stroke-width="0.00024000000000000003"%3E%3Cg id="SVGRepo_bgCarrier" stroke-width="0"%3E%3C/g%3E%3Cg id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"%3E%3C/g%3E%3Cg id="SVGRepo_iconCarrier"%3E%3Cpath fill-rule="evenodd" clip-rule="evenodd" d="M20.5129 3.4866C18.2882 1.24722 15.2597 -0.00837473 12.1032 4.20445e-05C5.54964 4.20445e-05 0.216056 5.33306 0.213776 11.8883C0.210977 13.9746 0.75841 16.0247 1.80085 17.8319L0.114014 23.9932L6.41672 22.34C8.15975 23.2898 10.1131 23.7874 12.0981 23.7874H12.1032C18.6556 23.7874 23.9897 18.4538 23.992 11.8986C24.0022 8.74248 22.7494 5.71347 20.5129 3.4866ZM12.1032 21.7768H12.0992C10.3294 21.7776 8.59195 21.3025 7.06888 20.4012L6.70803 20.1874L2.96836 21.1685L3.96713 17.52L3.73169 17.1461C2.74331 15.5709 2.22039 13.7484 2.22328 11.8889C2.22328 6.44185 6.65615 2.00783 12.1072 2.00783C14.7284 2.00934 17.2417 3.05207 19.0941 4.90662C20.9465 6.76117 21.9863 9.27564 21.9848 11.8969C21.9825 17.3456 17.5496 21.7768 12.1032 21.7768ZM17.5234 14.3755C17.2264 14.2267 15.7659 13.5085 15.4934 13.4064C15.2209 13.3044 15.0231 13.2576 14.8253 13.5552C14.6275 13.8528 14.058 14.5215 13.8847 14.7199C13.7114 14.9182 13.5381 14.9427 13.241 14.794C12.944 14.6452 11.9869 14.3316 10.8519 13.3198C9.96884 12.5319 9.36969 11.5594 9.19867 11.2618C9.02765 10.9642 9.18043 10.8057 9.32922 10.6552C9.46261 10.5224 9.62622 10.3086 9.77444 10.1348C9.92266 9.9609 9.97283 9.83776 10.0714 9.63938C10.1701 9.44099 10.121 9.26769 10.0469 9.1189C9.97283 8.97011 9.37824 7.50788 9.13083 6.9133C8.88969 6.3341 8.64513 6.4122 8.46271 6.40023C8.29169 6.39168 8.09102 6.38997 7.89264 6.38997C7.58822 6.39793 7.30097 6.53267 7.10024 6.76166C6.82831 7.05923 6.061 7.77752 6.061 9.23976C6.061 10.702 7.12532 12.1146 7.27354 12.313C7.42176 12.5114 9.36855 15.5117 12.3472 16.7989C12.9004 17.0375 13.4657 17.2468 14.0409 17.426C14.7523 17.654 15.3999 17.6204 15.9118 17.544C16.4819 17.4585 17.6694 16.8251 17.9173 16.1313C18.1653 15.4376 18.1648 14.8424 18.0884 14.7187C18.012 14.595 17.8204 14.5266 17.5234 14.3778V14.3755Z" fill="%2325D366"%3E%3C/path%3E%3C/g%3E%3C/svg%3E'
            alt="WhatsApp"
            className="cursor-pointer w-6 h-6 mb-4 hover:w-8 hover:h-8 transition-all duration-300"
          />
        </div>
        <div className="flex items-center mt-3">
          <p className="text-lg font-medium mb-4 mr-2 text-gray-500">
            Jorge:&nbsp;&#8201;&#8201;&nbsp; +54 (02281) 53-1457
          </p>
          <img
            onClick={() => handleWhatsAppClick("5492281531457")}
            src='data:image/svg+xml,%3Csvg width="213px" height="213px" viewBox="0 0 24.00 24.00" id="meteor-icon-kit__regular-whatsapp" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="%23aaaaaa" stroke-width="0.00024000000000000003"%3E%3Cg id="SVGRepo_bgCarrier" stroke-width="0"%3E%3C/g%3E%3Cg id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"%3E%3C/g%3E%3Cg id="SVGRepo_iconCarrier"%3E%3Cpath fill-rule="evenodd" clip-rule="evenodd" d="M20.5129 3.4866C18.2882 1.24722 15.2597 -0.00837473 12.1032 4.20445e-05C5.54964 4.20445e-05 0.216056 5.33306 0.213776 11.8883C0.210977 13.9746 0.75841 16.0247 1.80085 17.8319L0.114014 23.9932L6.41672 22.34C8.15975 23.2898 10.1131 23.7874 12.0981 23.7874H12.1032C18.6556 23.7874 23.9897 18.4538 23.992 11.8986C24.0022 8.74248 22.7494 5.71347 20.5129 3.4866ZM12.1032 21.7768H12.0992C10.3294 21.7776 8.59195 21.3025 7.06888 20.4012L6.70803 20.1874L2.96836 21.1685L3.96713 17.52L3.73169 17.1461C2.74331 15.5709 2.22039 13.7484 2.22328 11.8889C2.22328 6.44185 6.65615 2.00783 12.1072 2.00783C14.7284 2.00934 17.2417 3.05207 19.0941 4.90662C20.9465 6.76117 21.9863 9.27564 21.9848 11.8969C21.9825 17.3456 17.5496 21.7768 12.1032 21.7768ZM17.5234 14.3755C17.2264 14.2267 15.7659 13.5085 15.4934 13.4064C15.2209 13.3044 15.0231 13.2576 14.8253 13.5552C14.6275 13.8528 14.058 14.5215 13.8847 14.7199C13.7114 14.9182 13.5381 14.9427 13.241 14.794C12.944 14.6452 11.9869 14.3316 10.8519 13.3198C9.96884 12.5319 9.36969 11.5594 9.19867 11.2618C9.02765 10.9642 9.18043 10.8057 9.32922 10.6552C9.46261 10.5224 9.62622 10.3086 9.77444 10.1348C9.92266 9.9609 9.97283 9.83776 10.0714 9.63938C10.1701 9.44099 10.121 9.26769 10.0469 9.1189C9.97283 8.97011 9.37824 7.50788 9.13083 6.9133C8.88969 6.3341 8.64513 6.4122 8.46271 6.40023C8.29169 6.39168 8.09102 6.38997 7.89264 6.38997C7.58822 6.39793 7.30097 6.53267 7.10024 6.76166C6.82831 7.05923 6.061 7.77752 6.061 9.23976C6.061 10.702 7.12532 12.1146 7.27354 12.313C7.42176 12.5114 9.36855 15.5117 12.3472 16.7989C12.9004 17.0375 13.4657 17.2468 14.0409 17.426C14.7523 17.654 15.3999 17.6204 15.9118 17.544C16.4819 17.4585 17.6694 16.8251 17.9173 16.1313C18.1653 15.4376 18.1648 14.8424 18.0884 14.7187C18.012 14.595 17.8204 14.5266 17.5234 14.3778V14.3755Z" fill="%2325D366"%3E%3C/path%3E%3C/g%3E%3C/svg%3E'
            alt="WhatsApp"
            className="cursor-pointer w-6 h-6 mb-4 hover:w-8 hover:h-8 transition-all duration-300"
          />
        </div>
        <div className="flex items-center mt-3">
          <p className="text-lg font-medium mb-4 mr-2 text-gray-500">
            soportedesarrollar@gmail.com
          </p>
          <a href="mailto:soportedesarrollar@gmail.com">
            <img
              src='data:image/svg+xml,%3Csvg width="213px" height="213px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="%23002e7a"%3E%3Cg id="SVGRepo_bgCarrier" stroke-width="0"%3E%3C/g%3E%3Cg id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"%3E%3C/g%3E%3Cg id="SVGRepo_iconCarrier"%3E %3Cpath d="M0 0h48v48H0z" fill="none"%3E%3C/path%3E %3Cg id="Shopicon"%3E %3Cpath d="M24,44c5.343,0,10.365-2.08,14.143-5.858l-2.829-2.828C32.292,38.336,28.274,40,24,40c-8.822,0-16-7.178-16-16 S15.178,8,24,8s16,7.178,16,16c0,2.206-1.794,4-4,4s-4-1.794-4-4v-8h-4v1.079C26.822,16.397,25.459,16,24,16c-4.418,0-8,3.582-8,8 s3.582,8,8,8c2.394,0,4.536-1.057,6.003-2.723C31.47,30.942,33.611,32,36,32c4.411,0,8-3.589,8-8c0-11.028-8.972-20-20-20 S4,12.972,4,24S12.972,44,24,44z M24,28c-2.206,0-4-1.794-4-4s1.794-4,4-4s4,1.794,4,4S26.206,28,24,28z"%3E%3C/path%3E %3C/g%3E %3C/g%3E%3C/svg%3E'
              alt="Correo electrónico"
              className="cursor-pointer w-6 h-6 mb-4 hover:w-8 hover:h-8 transition-all duration-300"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
