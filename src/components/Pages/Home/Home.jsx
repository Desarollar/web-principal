import Card from "../../Items/Card/Card";
import CardPrincipal from "../../Items/CardPrincipal/CardPrincipal";
import TeamSection from "../../Items/TeamSection/TeamSection";
import WorkDone from "../../Items/WorkDone/WorkDone";
const Home = () => {

const data = [
    {
        titulo: 'Diseño Landingpage',
        precio: '$600',
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
        titulo: 'Diseño Web',
        precio: '$1000',
        descripcion: "Precio por unidad",
        opciones: [
            "Sitios Web Responsive",
            "SEO on page básico",
            "Diseño web personalizado",
            "Creación Página de Error 404",
            "Experiencia de usuario (UX) mejorada",
            "Certificado de seguridad SSL",
            "Desarrollo de tienda Online",
        ],
    },
    {
        titulo: 'Diseño software web y app',
        precio: '$2000',
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
            <div className="mt-1">
                <CardPrincipal />
            </div>
            <div className="flex flex-wrap gap-4 justify-evenly mt-1 mb-10 ">
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
            <div>
                <WorkDone />
            </div>
            <div>
                <TeamSection />
            </div>
        </>
    )
}

export default Home;