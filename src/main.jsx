import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App.jsx";
import { Store } from "./Store/Store.js";
import { Toaster } from "react-hot-toast";
createRoot(document.getElementById("root")).render(
  <Provider store={Store}>
    <Toaster position="bottom-center" reverseOrder={true} />
    <App />
  </Provider>
);
