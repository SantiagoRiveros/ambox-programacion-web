export default function UserForm({
  onCreate,
  nuevoUsuario,
  setNuevoUsuario,
  editandoId,
}) {
  function onSubmit(event) {
    event.preventDefault();
    onCreate(nuevoUsuario.name, nuevoUsuario.email);
    setNuevoUsuario({ name: "", email: "" });
  }

  function handleChange(event) {
    setNuevoUsuario({
      ...nuevoUsuario,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <form onSubmit={onSubmit}>
      <h2>{editandoId ? "Edicion" : "Creacion"}</h2>
      <label htmlFor="name">Nombre</label>
      <input
        type="text"
        value={nuevoUsuario.name}
        id="name"
        name="name"
        onChange={handleChange}
      />
      <label htmlFor="name">Email</label>
      <input
        type="email"
        value={nuevoUsuario.email}
        id="email"
        name="email"
        onChange={handleChange}
      />
      <button type="submit">{editandoId ? "Editar" : "Crear"}</button>
    </form>
  );
}
