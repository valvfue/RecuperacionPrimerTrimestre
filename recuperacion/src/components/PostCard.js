import Link from 'next/link';
// Componente para mostrar una tarjeta con la información de un post
export default function PostCard({ post }) {
  return (
    // Usamos una tarjeta de bootstrap para mostrar el post
    <div className="card mb-4 shadow-sm">
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.body}</p>
        
        {/* Botón "Ver más" que redirige a la página de detalle del post. */}
        <Link href={`/posts/${post.id}`} className="btn btn-primary">
          Ver más
        </Link>
      </div>
    </div>
  );
}



