import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h2>Página no encontrada.</h2>
      <p>La página que solicitaste no existe.</p>
      <Link href="/">Regresar al catalogo de productos.</Link>
    </div>
  );
}
