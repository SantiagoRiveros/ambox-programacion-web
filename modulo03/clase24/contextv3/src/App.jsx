import { UserProvider } from "./context/UserContext";
import Navbar from "./components/Navbar";
import Perfil from "./components/Perfil";

function App() {
  return (
    <>
      <UserProvider>
        <Navbar />
        <Perfil />
      </UserProvider>
      <h1>ACA NO ES ACCESIBLE EL USERCONTEXT</h1>
      {/* Porque esta por fuera del
      provider, solo dentro del provider existe userContext */}
    </>
  );
}

export default App;
