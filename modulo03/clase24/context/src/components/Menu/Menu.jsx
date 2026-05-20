import Usuario from "../Usuario/Usuario";

export default function Menu({ user, setUser }) {
  return <Usuario user={user} setUser={setUser} />;
}
