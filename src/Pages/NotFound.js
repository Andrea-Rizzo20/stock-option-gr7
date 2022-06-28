import { useNavigate } from "react-router-dom";

import notFoundPic from "../assets/notFound.gif";

export function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="container p-5 w-100 mx-auto d-flex flex-column justify-content-center align-items-center">
      <img
        className="w-50 "
        src={notFoundPic}
        alt="404 not found gif animata robot"
      ></img>
      <button
        className="heroBGButton rounded-pill p-3 col-md-4 col-8"
        onClick={() => navigate("/")}
      >
        Torna alla Home
      </button>
    </div>
  );
}
