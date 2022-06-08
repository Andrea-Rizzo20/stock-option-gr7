import React from "react";
import Pic1 from "./Assets/pic-1.png";
export class Hero extends React.Component {
  render() {
    return (
      <div className="gradient text-white">
          
        <div className="d-flex justify-content-around p-5 mt-5">
          <div>
            <img src={Pic1} alt="immagine computer" />
          </div>

          <div className="d-flex flex-column justify-content-center align-items-end text-white">
            <h1>THE ONLY DONE</h1>
            <h1>FOR YOU OPTION</h1>
            <h1>PICKER</h1>
            <p className="mt-3">Get trade alerts. Cancel anytime</p>
          </div>
        </div>

        <div className="text-center">
          <p className="fw-bold fst-italic">Enter your email to create or restart your membership</p>
          <form action="#" className="d-flex flex-column justify-content-center align-items-center ">
            <input type="text" placeholder="Email" className="mb-2 bg-transparent border border-white text-white" />
            <button type="submit" className="fw-bold bgButton text-white mb-4 border border-white px-3">Get Started</button>
          </form>

        </div>
      </div>
    );
  }
}
