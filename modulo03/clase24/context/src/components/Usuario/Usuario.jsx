export default function Usuario({ user, setUser }) {
  return (
    <>
      <h1>usuario: {user}</h1>
      <button onClick={() => setUser("")}>Borrar usuario</button>
    </>
  );
}
