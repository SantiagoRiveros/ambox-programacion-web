export default function Input({ texto, setTexto }) {
  return (
    <input
      type="text"
      value={texto}
      onChange={(e) => setTexto(e.target.value)}
    />
  );
}
