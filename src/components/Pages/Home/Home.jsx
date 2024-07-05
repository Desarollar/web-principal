import Card from "../../Items/Card/Card";
import CardPrincipal from "../../Items/CardPrincipal/CardPrincipal";
import TeamSection from "../../Items/TeamSection/TeamSection";
import WorkDone from "../../Items/WorkDone/WorkDone";
import Contacto from "../../Items/Contacto/Contacto";
import Servicios from "../../Items/Servicios/Servicios";
const Home = () => {
  const data = [
    {
      titulo: "Landingpage",
      precio: "$ Consultar",
      descripcion: "Precio por unidad",
      opciones: [
        "Maquetado de Landingpage",
        "SEO on page básico",
        "Diseño de logos y baners",
        "Creación Página de Error 404",
        "Creación Página de Gracias",
        "Certificado de seguridad SSL",
      ],
    },
    {
      titulo: "Diseño Web",
      precio: "$ Consultar",
      descripcion: "Precio por unidad",
      opciones: [
        "Sitios Web Responsive",
        "SEO on page básico",
        "Diseño web personalizado",
        "Creación Página de Error 404",
        "Experiencia de usuario (UX) mejorada",
        "Certificado de seguridad SSL",
      ],
    },
    {
      titulo: "Software web y app",
      precio: "$ Consultar",
      descripcion: "Precio por unidad",
      opciones: [
        "Desarrollo de Software a medida",
        "Integracion de redes sociales",
        "Integracion de IA",
        "Mantenimiento y soporte",
        "Automatización de procesos",
        "Creación de Apps Mobile ios y android",
      ],
    },
  ];

  return (
    <>
      <div className="mt-1" id="inicio">
        <CardPrincipal />
      </div>
      <div className="flex  flex-wrap gap-4 justify-evenly mt-1">
        {data.map((item, index) => (
          <Card
            key={index}
            titulo={item.titulo}
            precio={item.precio}
            descripcion={item.descripcion}
            opciones={item.opciones}
          />
        ))}
      </div>
      <div id="servicios">
        <Servicios />
      </div>
      <div id="trabajos">
        <WorkDone />
      </div>
      <div id="equipo">
        <TeamSection />
      </div>
      <div id="contacto">
        <Contacto />
      </div>
    </>
  );
};

export default Home;
