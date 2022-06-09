import MyCard from "./Components/MyCard";
import dataJson from "./myJSON.json";
import { Hero } from "./Components/Hero";
import { CardsSection } from "./Components/CardsSection";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <section className="container">
        {dataJson.map((card, index) => (
          <MyCard
            key={index}
            contents={card}
            className={
              index % 2 === 0
                ? "d-flex flex-column flex-md-row"
                : "d-flex flex-column flex-md-row-reverse"
            }
          />
        ))}
      </section>
      <CardsSection />
    </div>
  );
};

export default HomePage;
