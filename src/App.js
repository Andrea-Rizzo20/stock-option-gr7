import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Header from "./components/Header";
import HomePage from "./pages/Homepage";
import Footer from "./components/Footer";
import Protected from "./components/Protected";
import Dashboard from "./pages/Dashboard";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Disclaimer from "./pages/Disclaimer";
import TermsOfService from "./pages/TermsOfService";
import NotFound from "./pages/NotFound";
import ContactUsModal from "./components/ContactUsModal";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const App = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [login, setLogin] = useState(false);
  const [contactModalShow, setContactModalShow] = useState(false);

  const userSetting = (par) => setLogin(par);
  const { t } = useTranslation();

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
