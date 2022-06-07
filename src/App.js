import Header from "./Components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import dataJson from "./myJSON.json";
import CardHome from "./Components/Card";

const App = () => {
  return (
    <div>
      <Header />
      <section>
        {dataJson.map((card, index) => (
          <CardHome
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
    </div>
  );
};

export default App;
