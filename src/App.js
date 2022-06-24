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

const App = () => {
  const [user, setUser] = useState(localStorage.getItem("user"));



  return (
    <>
      <Header user={user} />

      <Routes>
        <Route index element={<HomePage />} />
        <Route path="home" index element={<HomePage />} />
        <Route element={<Protected user={user} />}>
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
