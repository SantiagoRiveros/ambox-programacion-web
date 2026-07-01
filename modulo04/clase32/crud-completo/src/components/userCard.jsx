export default function UserCard({
  user,
  eliminarUsuario,
  setEditandoId,
  setNuevoUsuario,
}) {
  function editarUsuario() {
    setEditandoId(user.id);
    setNuevoUsuario({ name: user.name, email: user.email });
  }
  return (
    <div>
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <button onClick={() => editarUsuario()}>Editar</button>
      <button onClick={() => eliminarUsuario(user.id)}>Eliminar</button>
    </div>
  );
}
