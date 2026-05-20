import { useState } from "react";
import Input from "./components/Input/Input";
import Preview from "./components/Preview/Preview";
import Navbar from "./components/Navbar/Navbar";

export default function App() {
  const [user, setUser] = useState("");

  return (
    <div>
      <Input texto={user} setTexto={setUser} />

      <Preview texto={user} />

      <Navbar user={user} setUser={setUser} />
    </div>
  );
}
