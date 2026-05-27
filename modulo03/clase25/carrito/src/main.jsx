import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux"; // Importamos el provider de react-redux
import { store } from "../redux/store/store.js"; // EL store en si

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    // Aca "Envolvemos" la app con el provider, pasandole el store
    <App />
  </Provider>,
);
