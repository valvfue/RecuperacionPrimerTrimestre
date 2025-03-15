// Importamos los estilos de bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

import './globals.css';

// Este es el componente principal que define la estructura básica de todas las páginas
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}


