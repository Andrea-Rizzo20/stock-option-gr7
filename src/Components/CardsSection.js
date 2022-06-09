import React from "react";
import { OfferCard } from "./OfferCard";


export class CardsSection extends React.Component {
    render() {
      return (
          <section className="footer-cards-gradient">
              <div className="row">
                  <div className="col-10 col-md-3 d-flex justify-content-center mb-5 mx-auto"><OfferCard/></div>
                  <div className="col-10 col-md-3 d-flex justify-content-center mb-5 mx-auto"><OfferCard specialoffer={true}/></div>
              </div>
          </section>
      )
    }
}