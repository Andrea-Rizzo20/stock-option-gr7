import React from "react";
import Pic1 from "./Assets/pic-1.png";
export class Hero extends React.Component {
  render() {
    return (
      <div className="heroGradient text-white vw-100">
        <div className="row flex-column-reverse flex-md-row justify-content-around p-3 p-md-5 mx-0">
          <div className="col-12 col-md-6">
            <img src={Pic1} className="w-100" alt="immagine computer" />
          </div>

          <div className="col-12 col-md-6 d-flex flex-column justify-content-center text-white">
            <h1 className="text-center text-md-end px-md-5">
              THE ONLY DONE FOR YOU OPTION PICKER
            </h1>
            <p className="mt-3 text-center text-md-end px-md-5">
              Get trade alerts. Cancel anytime
            </p>
          </div>
        </div>

        <div className="text-center">
          <p className="fw-bold fst-italic">
            Enter your email to create or restart your membership
          </p>
          <form
            action="#"
            className="d-flex flex-column justify-content-center align-items-center "
          >
            <input
              type="text"
              placeholder="Email"
              className="mb-2 bg-transparent border border-white text-white text-center"
            />
            <button
              type="submit"
              className="fw-bold heroBGButton text-white mb-4 border border-white px-3"
            >
              Get Started
            </button>
          </form>
        </div>
      </div>
    );
  }
}
