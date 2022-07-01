import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import GoToTop from "./components/GoToTop";
import "./i18n";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  <BrowserRouter>
    <GoToTop/>
    <App />
  </BrowserRouter>
);
