import { useState, useEffect, useRef } from "react";
import postsData from "./post";

const Servicios = () => {
    const [selectedPost, setSelectedPost] = useState(null);
    const containerRef = useRef(null);

    const handlePostClick = (postId) => {
        setSelectedPost(postId === selectedPost ? null : postId);
    };

    const parseDescription = (description) => {
        const parts = description.split(/(NN.*?NN|SS.*?SS|KK.*?KK|\n)/); // Divide el texto en partes, incluyendo los delimitadores y saltos de línea
        return parts.map((part, index) => {
            if (part.startsWith("NN") && part.endsWith("NN")) {
                return <strong key={index}>{part.slice(2, -2)}</strong>; // Aplica negrita
            } else if (part.startsWith("SS") && part.endsWith("SS")) {
                return <u  key={index}>{part.slice(2, -2)}</u>; // Aplica subrayado
            } else if (part.startsWith("KK") && part.endsWith("KK")) {
                return <em className="font-sans text-lg" key={index}>{part.slice(2, -2)}</em>; // Aplica cursiva
            } else if (part === "\n") {
                return <br key={index} />; // Aplica salto de línea
            }
            return part;
        });
    };
    useEffect(() => {
        const handleScroll = () => {
            if (containerRef.current) {
                const { top, bottom } = containerRef.current.getBoundingClientRect();
                if (top > window.innerHeight || bottom < 0) {
                    setSelectedPost(null);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <div ref={containerRef} className="bg-white py-10 sm:py-12">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Trabajos realizados</h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">
                        Potenciamos y optimizamos tu procesos de negocio 
                    </p>
                </div>
                <div className={`mx-auto mt-10 grid gap-8 ${selectedPost ? 'grid-cols-1 lg:grid-cols-2' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'}`}>
                    {postsData.map((post) => (
                        <article key={post.id} className={`flex flex-col max-w-lg mx-auto rounded-lg overflow-hidden shadow-lg ${selectedPost && selectedPost !== post.id ? 'hidden' : ''}`}>
                            <img src={post.image} alt={post.title} className="h-64 rounded-xl object-cover w-full" />
                            <div className="bg-white p-6 flex flex-col justify-between flex-grow">
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{post.title}</h3>
                                    <p className="text-gray-700">{post.bajada}</p>
                                </div>
                                <button
                                    onClick={() => handlePostClick(post.id)}
                                    className="mt-4 bg-violet-950 hover:bg-yellow-600 text-white py-2 px-4 rounded-xl focus:outline-none"
                                >
                                    {selectedPost === post.id ? "Ocultar Detalles" : "Ver Detalles"}
                                </button>
                            </div>
                        </article>
                    ))}
                    {selectedPost && (
                        <div className="bg-white rounded-lg shadow-lg flex flex-col justify-start">
                            {postsData.filter(post => post.id === selectedPost).map(post => (
                                <div key={post.id}>
                                    <div className="mt-4 p-4 bg-gray-100 rounded-md mt-0">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4">{post.title}</h3>
                                        <p className="text-gray-700">{parseDescription(post.description)}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Servicios;
