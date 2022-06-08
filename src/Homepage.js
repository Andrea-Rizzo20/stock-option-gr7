import MyCard from "./Components/MyCard"
import dataJson from "./myJSON.json";

const HomePage = () =>{
    return(
        <div>
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
      </div>
    )
}

export default HomePage