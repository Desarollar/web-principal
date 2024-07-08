import { useDispatch } from 'react-redux';
import { setContactInfo } from '../../../redux/slices/contactoSlice';

const Card = ({ titulo, precio, descripcion, opciones }) => {
    const dispatch = useDispatch();

    const handleConsultarClick = () => {
        dispatch(setContactInfo({
            Nombre: '',
            Telefono: '',
            Email: '',
            Mensaje: `Hola queria consultar sobre ${titulo} - me interesaria  saber el precio.`,
        }));
    };

    return (
        <div>
            <div className="max-w-[300px] w-full pt-10 px-10 pb-8 bg-gray-900 rounded-3xl">
                <div className="text-center mb-6">
                    <h5 className="text-2xl font-semibold text-white mb-3">{titulo}</h5>
                    <span className="block text-3xl font-bold text-white mb-3">{precio}</span>
                    <span className="block text-gray-300 font-medium mb-6">
                        {descripcion}
                    </span>
                    <a
                        className="relative group inline-block w-full py-4 px-6 text-center text-gray-50 hover:text-gray-900 bg-yellow-600 font-semibold rounded-full overflow-hidden transition duration-200"
                        href="#contacto"
                        onClick={handleConsultarClick}
                    >
                        <div
                            className="absolute top-0 right-full w-full h-full bg-white transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"
                        ></div>
                        <span className="relative">Consultar</span>
                    </a>
                </div>
                <ul>
                    {opciones.map((opcion, index) => (
                        <li key={index} className="flex mb-4 items-center">
                            <svg
                                className="w-6 h-6 fill-current text-white"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M7.293 13.293l-3-3a1 1 0 011.414-1.414L8 12.586l8.293-8.293a1 1 0 111.414 1.414l-9 9a1 1 0 01-1.414 0z"
                                ></path>
                            </svg>
                            <span className="ml-2 text-white">{opcion}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Card;
