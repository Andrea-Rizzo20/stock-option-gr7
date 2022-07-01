import { useState } from "react";
import { useTranslation } from "react-i18next";

const LoginForm = ({ showModal, login }) => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const { t } = useTranslation();

  const inputHandle = (event) => {
    const { name, value } = event.target;
    setData((data) => {
      return {
        ...data,
        [name]: value,
      };
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    const database = JSON.parse(localStorage.getItem("database"));
    if (data.email === database.email && data.password === database.password) {
      localStorage.setItem("user", JSON.stringify(database));
      showModal();
      login();
    } else {
      alert(t("header.loginForm.alert"));
    }

    setData({
      email: "",
      password: "",
    });
  };

  return (
    <form
      className="d-flex flex-column gap-5 formBackground"
      onSubmit={handleSubmit}
    >
      <div className="d-flex flex-column align-items-center gap-3 pt-3">
        <input
          type="email"
          placeholder={t("header.loginForm.email")}
          name="email"
          className="inputForm text-center"
          value={data.email}
          onChange={inputHandle}
        ></input>
        <input
          type="password"
          placeholder={t("header.loginForm.password")}
          name="password"
          className="inputForm text-center"
          value={data.password}
          onChange={inputHandle}
        ></input>
      </div>
      <div className="d-flex flex-column align-items-center gap-4 pb-3">
        <button type="submit" className="formButton heroBGButton">
          {t("header.loginForm.login")}
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
