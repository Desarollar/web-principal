

const people = [
    {
        name: 'JORGE LOZANO',
        role: 'Co-Founder / CEO / Desarrollador Full Stack',
        imageUrl:
            'https://camo.githubusercontent.com/e81b60886ee748ab86fde371adb733914716622c472dfd1b0285169a71ce3f2b/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f6471656a6c6a7569672f696d6167652f75706c6f61642f76313730323939353733382f696d616765732f33353136646634622d633137622d343431332d626361352d6666633836616434363332315f6c68327a6b672e6a7067',
        text:' Jorge se encarga de que nuestras aplicaciones se desplieguen de manera segura y eficiente. Con un enfoque en la automatización y la integración continua, Jorge garantiza que nuestro proceso de desarrollo sea fluido y sin interrupciones. Su experiencia en la gestión de infraestructuras en la nube y su conocimiento en herramientas como Docker, Kubernetes y Jenkins son esenciales para mantener la alta disponibilidad y escalabilidad de nuestras aplicaciones.'
    },
    {
        name: 'Emiliano Brizuela',
        role: 'Desarrollador Full Stack',
        imageUrl:
            'https://avatars.githubusercontent.com/u/110181460?v=4',
        text: 'Emiliano es nuestro experto en desarrollo full stack, lo que significa que tiene la habilidad de trabajar tanto en el front-end como en el back-end de nuestras aplicaciones. Con una sólida formación en ingeniería de software y varios años de experiencia práctica, Emiliano se asegura de que nuestras aplicaciones no solo funcionen perfectamente, sino que también ofrezcan una experiencia de usuario excepcional. Su dominio de tecnologías como React, Node.js y Python es un activo invaluable para nuestro equipo.'
    },
    // More people...
]


const TeamSection = () => {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
                <div className="max-w-2xl">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Equipo de desarrollo</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                    Nuestro equipo está compuesto por profesionales altamente calificados, cada uno especializado en diferentes áreas del desarrollo de software, asegurando que podamos ofrecer soluciones integrales y de alta calidad a nuestros clientes. Permítenos presentarte a algunos de los miembros clave de nuestro 
                    </p>
                </div>
                <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                    {people.map((person) => (
                        <li key={person.name}>
                            <div className="flex items-center gap-x-6">
                                <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                                <div>
                                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                                    <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                                </div>
                            </div>
                            <p className="mt-5 text-base leading-7 text-gray-600">{person.text}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default TeamSection