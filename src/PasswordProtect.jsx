import React, { useState } from 'react';
import Contacto from './components/Items/Contacto/Contacto';
// Componente de Popup de Contacto

const ContactPopup = ({ onClose }) => {
    return (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <Contacto/>
                <button onClick={onClose} className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg">Cerrar</button>
            </div>
        </div>
    );
};

const PasswordProtect = ({ children }) => {
    const [inputPassword, setInputPassword] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [showContactPopup, setShowContactPopup] = useState(false); // Estado para controlar la visibilidad del popup

    const correctPassword = '123';

    const handlePasswordSubmit = (e) => {
        e.preventDefault();
        if (inputPassword === correctPassword) {
            setIsAuthenticated(true);
        } else {
            alert('Contraseña incorrecta');
        }
    };

    const openContactPopup = () => {
        setShowContactPopup(true);
    };

    const closeContactPopup = () => {
        setShowContactPopup(false);
    };

    if (!isAuthenticated) {
        return (
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
                            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Impulse su Productividad.<br /> Comience a usar nuestros Softwares hoy mismo.</h2>
                            <p className="mt-6 text-lg leading-8 text-gray-300">El sitio está en mantenimiento, para cualquier consulta dejamos tu comentario en el <button onClick={openContactPopup} className="text-blue-400 hover:text-blue-600">formulario de contacto</button>.</p>
                            {showContactPopup && <ContactPopup onClose={closeContactPopup} />}
                            <form onSubmit={handlePasswordSubmit} className="bg-white bg-opacity-40 mt-5 p-6 rounded-xl shadow-lg">
                                <h2 className="mb-4 text-lg font-semibold">Ingrese la contraseña</h2>
                                <input
                                    type="password"
                                    value={inputPassword}
                                    onChange={(e) => setInputPassword(e.target.value)}
                                    className="border p-2 mb-4 w-full"
                                />
                                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Entrar</button>
                            </form>
                        </div>
                        <div className="relative mt-16 h-80 lg:mt-0 lg:h-auto">
                            <img className="absolute top-0 left-0 w-full lg:w-[38rem] max-w-none rounded-md bg-white/5 mask-gradient-right ring-1 ring-white/10 object-cover object-top" src="https://i.ibb.co/Y86d935/desarollar.jpg" alt="App screenshot" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // Renderizar el contenido deseado una vez autenticado
    return (
        <>
            {children}
            
        </>
    );
};

export default PasswordProtect;
