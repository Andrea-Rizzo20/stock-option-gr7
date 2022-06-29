import Header from "./Components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./Pages/Homepage";
import Footer from "./Components/Footer";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import { NotFound } from "./Pages/NotFound";
import { Protected } from "./Components/Protected";
import { Dashboard } from "./Pages/Dashboard";
import { useEffect, useState } from "react";
import { PrivacyPolicy } from "./Pages/PrivacyPolicy";
import { Disclaimer } from "./Pages/Disclaimer";
import { TermsOfService } from "./Pages/TermsOfService";
import ContactUsModal from "./Components/ContactUsModal";
import { Button } from "react-bootstrap";
import { t } from "i18next";

const App = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [login, setLogin] = useState(false);
  const [contactModalShow, setContactModalShow] = useState(false);

  const userSetting = (par) => setLogin(par);

  useEffect(() => {
    const userJoin = JSON.parse(localStorage.getItem("user"));
    if (userJoin) {
      setUser(userJoin);
      setLogin(true);
    } else {
      setUser(userJoin);
    }
  }, [login]);

  return (
    <>
      <Header user={user} login={userSetting} />

      <Routes>
        <Route index element={<HomePage />} />
        <Route path="home" index element={<HomePage />} />
        <Route element={<Protected user={user} />}>
          <Route path="dashboard" element={<Dashboard user={user} />} />
        </Route>
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="disclaimer" element={<Disclaimer />} />
        <Route path="terms-of-service" element={<TermsOfService />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
      <Button
        className="contactUsButton"
        onClick={() => setContactModalShow(true)}
      >
        {t("contactUs.title")}
      </Button>
      <ContactUsModal
        show={contactModalShow}
        onHide={() => setContactModalShow(false)}
      />
    </>
  );
};

export default App;
