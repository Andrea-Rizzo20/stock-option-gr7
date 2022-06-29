import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import ReactRouterScrollTop from "react-router-scroll-top";
import App from "./App";
import "./i18n";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  <BrowserRouter>
    <ReactRouterScrollTop>
      <App />
    </ReactRouterScrollTop>
  </BrowserRouter>
);
