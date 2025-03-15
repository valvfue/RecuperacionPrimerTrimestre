// Importamos el componente CommentList que se encargará de mostrar la lista de comentarios
import CommentList from '../../../components/CommentList';

// Función para obtener los detalles de un post específico usando su ID.
async function getPost(id) {
  // Se realiza una petición a la API para obtener el post con el id proporcionado
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  
  // Si el post no existe, aparecerá un error.
  if (!res.ok) {
    throw new Error('Failed to fetch post');
  }
  
  
  return res.json();
}

// Función para obtener los detalles del autor que creó el post usando su id
async function getUser(userId) {
  // Realizamos una petición a la API para obtener el usuario con el id proporcionado
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
  
  // Si la respuesta no es exitosa, aparecerá un error
  if (!res.ok) {
    throw new Error('Failed to fetch user');
  }
  
  
  return res.json();
}

// Función para obtener los comentarios asociados a un post usando su id
async function getComments(postId) {
  // Realizamos una petición a la API para obtener los comentarios del post con el id proporcionado
  const res = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
  
  // Si la respuesta no es exitosa, saldrá un error
  if (!res.ok) {
    throw new Error('Failed to fetch comments');
  }
  
  
  return res.json();
}

// Componente principal que muestra el detalle de un post, el autor y los comentarios
export default async function PostDetail({ params }) {
  try {
    // Extraemos el ID del post de los parámetros de la ruta
    const { id } = params;

    // Obtenemos los detalles del post usando la función getPost
    const post = await getPost(id);
    
    // Obtenemos los detalles del autor del post usando la función getUser
    const user = await getUser(post.userId);
    
    // Obtenemos los comentarios asociados al post usando la función getComments
    const comments = await getComments(post.id);

    // Devuelve la información del post, el autor y los comentarios
    return (
      <div>
        {/* Título del post */}
        <h1>{post.title}</h1>
        
        {/* Cuerpo del post */}
        <p>{post.body}</p>
        
        {/* Nombre del autor del post */}
        <h2>Autor: {user.name}</h2>
        
        {/* Sección de comentarios */}
        <h3>Comentarios:</h3>
        
        {/* Componente CommentList que muestra la lista de comentarios */}
        <CommentList comments={comments} />
      </div>
    );
  } catch (error) {
    // Si ocurre un error como por ejemplo, si no se puede obtener el post, el usuario o los comentarios,
    // saldrá un mensaje de error.¡
    return <div>Error: {error.message}</div>;
  }
}