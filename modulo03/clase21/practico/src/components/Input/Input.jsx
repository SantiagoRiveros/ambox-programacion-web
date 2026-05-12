export default function Input({ handleChange, id, name }) {
  return (
    <input id={id} name={name} onChange={(event) => handleChange(event)} />
  );
}
