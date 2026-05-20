import Menu from "../Menu/Menu";

export default function Navbar({ user, setUser }) {
  return <Menu user={user} setUser={setUser} />;
}
