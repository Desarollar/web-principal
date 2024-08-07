import React, { useState, useEffect } from 'react';

const CardPrincipal = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize(); // Llamar al iniciar el componente

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div>
            <div className="bg-white">
                <div className="mx-auto max-w-7xl py-24 sm:px-6 lg:px-8">
                    <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
                        <svg viewBox="0 0 1024 1024" className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0" aria-hidden="true">
                            <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
                            <defs>
                                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                                    <stop stopColor="#7775D6" />
                                    <stop offset="1" stopColor="#E935C1" />
                                </radialGradient>
                            </defs>
                        </svg>
                        <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Impulse su Productividad.<br /> Comience a usar nuestro Software hoy mismo.</h2>
                            <p className="mt-6 text-lg leading-8 text-gray-300">Diseño Web, app moviles & Ecommerce, Posicionamiento SEO, Copywriting Web, Consultorías de Marketing, Auditorias Web, Mantenimiento Web, Redacción de Contenidos, Estrategias de Marketing, Social Management. </p>
                        </div>
                        <div className="relative mt-16 h-80 lg:mt-0 lg:h-auto">
                            {isMobile ? (
                                <img className="absolute top-0 left-4 w-full h-full lg:w-[38rem] max-w-none rounded-md bg-white/5 mask-gradient-right ring-1 ring-white/10 object-cover" src="https://i.ibb.co/HXtmj1r/foto-card-principal.png" alt="App screenshot" />
                            ) : (
                                <img className="absolute top-0 left-0 w-full lg:w-[38rem] max-w-none rounded-md bg-white/5 mask-gradient-right ring-1 ring-white/10 object-cover object-top" src="https://firebasestorage.googleapis.com/v0/b/imagenes-memo.appspot.com/o/black-white-portrait-digital-nomads.jpg?alt=media&token=3a4f17f5-643f-4df6-aa9e-f3612158bab5" alt="App screenshot" />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardPrincipal;
