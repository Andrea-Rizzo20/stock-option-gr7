import Header from "./Components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./Pages/Homepage";
import Footer from "./Components/Footer";
import "./index.css";
import { Navigate, Route, Routes } from "react-router-dom";
import { NotFound } from "./Pages/NotFound";
import { Protected } from "./Components/Protected";
import { Dashboard } from "./Pages/Dashboard";
import { useEffect, useState } from "react";

const App = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  const [login, setLogin] = useState(false)

  const userSetting = (par) => setLogin(par)

  useEffect(()=>{
    const userJoin = JSON.parse(localStorage.getItem('user'))
    if(userJoin){
      setUser(userJoin);
      setLogin(true);

    }else{
      setUser(userJoin)
    }

  },[login])



  return (
    <>
      <Header user={user} login={userSetting} />

      <Routes>
        <Route index element={<HomePage />} />
        <Route path="home" index element={<HomePage />} />
        <Route element={<Protected user={user} />}>
          <Route path="dashboard" element={<Dashboard user={user} />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
