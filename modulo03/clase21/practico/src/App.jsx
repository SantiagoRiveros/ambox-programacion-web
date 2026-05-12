import { useState } from "react";
import { Input, Label, Profile } from "./components";
import "./App.css";

function App() {
  const [user, setUser] = useState({ name: "", password: "" });
  const [logged, setLogged] = useState(false);

  function handleChange(event) {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  }

  function handleLogin() {
    if (user.name !== "" && user.password !== "") {
      setLogged(true);
    }
  }

  return (
    <>
      {!logged ? (
        <>
          <Label text="Nombre" inputId="name" />
          <Input id="name" name="name" handleChange={handleChange} />
          <Label text="Password" inputId="password" />
          <Input id="password" name="password" handleChange={handleChange} />
          <button onClick={() => handleLogin()}>Login</button>
        </>
      ) : (
        <Profile name={user.name} setLogged={setLogged} />
      )}
    </>
  );
}

export default App;
