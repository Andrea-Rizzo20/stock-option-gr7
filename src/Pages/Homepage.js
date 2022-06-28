import CardComponent from "../Components/CardComponent";
import { Hero } from "../Components/Hero";
import { OfferSection } from "../Components/OfferSection";
import { useTranslation } from "react-i18next";

const HomePage = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Hero />
      <section className="fluid-container" id="features">
        {t("homepage.cardComponent", { returnObjects: true }).map(
          (card, index) => (
            <div className="row" key={index}>
              <CardComponent
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
          )
        )}
      </section>
      <section id="pricing">
        <OfferSection />
      </section>
    </div>
  );
};

export default HomePage;
