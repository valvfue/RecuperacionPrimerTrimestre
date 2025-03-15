import Link from 'next/link';
// Importamos el componente PostCard que se encargará de mostrar cada post en formato de tarjeta
import PostCard from '../components/PostCard';

// Función para obtener los posts desde la api
async function getPosts() {
  // Realizamos una solicitud a la api para obtener todos los posts
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  
  const posts = await res.json();
  
  // Mezclamos los posts de manera aleatoria y seleccionamos los primeros 10
  return posts.sort(() => Math.random() - 0.5).slice(0, 10);
}

// Componente principal de la página de inicio.
export default async function Home() {
  // Obtenemos los 10 posts aleatorios llamando a la función getPosts
  const posts = await getPosts();

  // Devuelve la página de inicio
  return (
    <div className="container mt-5">
      {/* Título de la página */}
      <h1 className="mb-4">Aquí tenemos 10 posts...</h1>
      
      {/* Contenedor para las tarjetas de los posts */}
      <div className="row">
        {/* Mapeamos cada post para mostrar una tarjeta */}
        {posts.map((post) => (
          <div key={post.id} className="col-md-6 col-lg-4 mb-4">
            {/* Usamos el componente PostCard para mostrar cada post */}
            <PostCard post={post} />
          </div>
        ))}
      </div>
    </div>
  );
}





