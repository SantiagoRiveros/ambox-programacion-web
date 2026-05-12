export default function Profile({ name, setLogged }) {
  return (
    <>
      <h1>Bienvenido {name}</h1>
      <button onClick={() => setLogged(false)}>Log Out</button>
    </>
  );
}
