import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";


const SignUpForm = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    telephone: "",
    password: "",
    confPassword: "",
    contract: false,
  });

  const { t } = useTranslation();

  const inputHandle = (event) => {
    const { name, type, value, checked } = event.target;
    setData((data) => {
      return {
        ...data,
        [name]: type !== "checkbox" ? value : checked,
      };
    });
  };

  //per adesso qui

  const fetchSignup = async(data) =>{
    const response = await fetch('http://localhost:8080/api/auth/signup',{
      method:'POST',
      headers:{
        "Accept":"application/json",
        "Content-Type": "application/json",
      },
      mode: 'cors',
      body: JSON.stringify(data)
    })

    return response

    //test
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      data !==
      {
        email: "",
        firstName: "",
        lastName: "",
        telephone: "",
        password: "",
        confPassword: "",
        contract: false,
      }
    ) {
        fetchSignup(data).then(response =>{
          if(response.status === 200){
          alert(t("header.signUpForm.alert"))
        }else if(response.status === 400){
          alert("Prova 1")
        }else{
          alert('Prova 2')
        }
      })

      // localStorage.setItem("database", JSON.stringify(data));

      setData({
        email: "",
        firstName: "",
        lastName: "",
        phone: "",
        password: "",
        confPassword: "",
        contract: false,
      });
      navigate('/');
    }
    // if (localStorage.getItem("database")) {
    //   alert(t("header.signUpForm.alert"));
    // }
  };

  return (
    <form
      className="d-flex flex-column align-items-center gap-3 py-3"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        name="firstName"
        value={data.firstName}
        placeholder={t("header.signUpForm.firstName")}
        className="inputForm text-center"
        onChange={inputHandle}
      ></input>
      <input
        type="text"
        name="lastName"
        value={data.lastName}
        placeholder={t("header.signUpForm.lastName")}
        className="inputForm text-center"
        onChange={inputHandle}
      ></input>
      <input
        type="email"
        name="email"
        value={data.email}
        placeholder={t("header.signUpForm.email")}
        className="inputForm text-center"
        onChange={inputHandle}
      ></input>
      <input
        type="password"
        name="password"
        value={data.password}
        placeholder={t("header.signUpForm.password")}
        className="inputForm text-center"
        onChange={inputHandle}
      ></input>
      <input
        type="password"
        name="confPassword"
        value={data.confPassword}
        placeholder={t("header.signUpForm.confirmPassword")}
        className="inputForm text-center"
        onChange={inputHandle}
      ></input>
      <input
        type="tel"
        name="telephone"
        value={data.phone}
        placeholder={t("header.signUpForm.phone")}
        className="inputForm text-center"
        onChange={inputHandle}
      ></input>
      <div className="d-flex gap-2">
        <input
          type="checkbox"
          checked={data.contract}
          name="contract"
          id="contract"
          onChange={inputHandle}
        ></input>
        <label className="text-white fw-bold" htmlFor="contract">
          {t("header.signUpForm.contract")}
        </label>
      </div>
      <button type="submit" className="formButton heroBGButton">
        {t("header.signUpForm.signUp")}
      </button>
    </form>
  );
};

export default SignUpForm;
