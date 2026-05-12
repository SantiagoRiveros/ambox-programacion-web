export default function Label({ text, inputId }) {
  return <label htmlFor={inputId}>{text}</label>;
}
