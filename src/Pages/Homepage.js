import MyCard from "../Components/MyCard";
import dataJson from "../Locale/homeCardContent.json";
import { Hero } from "../Components/Hero";
import { CardsSection } from "../Components/CardsSection";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <section className="fluid-container" id="features">
        {dataJson.map((card, index) => (
          <div className="row" key={index}>
            <MyCard
              contents={card}
              className={
                index % 2 === 0
                  ? "d-flex flex-column flex-md-row col-10 mx-auto border-0 my-5"
                  : "d-flex flex-column flex-md-row-reverse col-10 mx-auto border-0 "
              }
              BodyClass={
                index % 2 === 0
                  ? "card-text-box-right col-12 col-md-8 py-5"
                  : "card-text-box-left  col-12 col-md-8 py-5 "
              }
            />
          </div>
        ))}
      </section>
      <section id='pricing'>
        <CardsSection />
      </section>
    </div>
  );
};

export default HomePage;
