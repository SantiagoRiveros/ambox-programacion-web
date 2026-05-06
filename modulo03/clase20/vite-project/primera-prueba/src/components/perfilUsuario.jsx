import Subtitulo from "./subtitulo";
import Titulo from "./titulo";

export default function PerfilUsuario({ nombre, edad, trabajo }) {
  return (
    <article>
      <Titulo texto={nombre} />
      <Subtitulo titulo="Edad" valor={edad} />
      <Subtitulo titulo="Trabajo" valor={trabajo} />
    </article>
  );
}
