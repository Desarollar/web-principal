import { useState } from "react";
import postsData from "./post";

const Servicios = () => {
    const [selectedPost, setSelectedPost] = useState(null);

    const handlePostClick = (postId) => {
        setSelectedPost(postId === selectedPost ? null : postId);
    };

    return (
        <div className="bg-white  py-10 sm:py-12">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Servicios y soluciones digitales</h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">
                        Potencia tu presencia online con nuestro equipo experto
                    </p>
                </div>
                <div className={`mx-auto mt-10 grid gap-8 ${selectedPost ? 'grid-cols-1 lg:grid-cols-2' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'}`}>
                    {postsData.map((post) => (
                        <article key={post.id} className={`flex flex-col max-w-lg mx-auto rounded-lg overflow-hidden shadow-lg ${selectedPost && selectedPost !== post.id ? 'hidden' : ''}`}>
                            <img src={post.image} alt={post.title} className="h-64 object-cover mask-gradient-black-transparent   w-full" />
                            <div className="bg-white p-6 flex flex-col justify-between flex-grow">
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{post.title}</h3>
                                    <p className="text-gray-700">{post.bajada}</p>
                                </div>
                                <button
                                    onClick={() => handlePostClick(post.id)}
                                    className="mt-4 bg-blue-500 hover:bg-blue-800 text-white py-2 px-4 rounded focus:outline-none"
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
                                        <p className="text-gray-700">{post.description}</p>
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
