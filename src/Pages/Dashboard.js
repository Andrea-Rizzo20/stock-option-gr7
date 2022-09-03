import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import TradingViewWidget from 'react-tradingview-widget';

function Dashboard({ user }) {
  const { t } = useTranslation();

  useEffect(()=>{
    document.title = 'Dashboard | Optionsfy';
  },[])

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <h1>
        {t("dashboard.welcome")} {user.firstName} {user.lastName}
      </h1>
      <div className="col-md-12 d-flex  text-md-start text-center gap-5 px-3 flex-column flex-md-row ">
        {t("dashboard.texts", { returnObjects: true }).map((item) => (
          <article key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.content}</p>
            <TradingViewWidget symbol="NASDAQ:AAPL" />
          </article>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
