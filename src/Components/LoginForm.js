import { useState } from "react";

const LoginForm = ({showModal,login}) => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });





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
      showModal()
      login()
    }else{
      alert('Email o Password non corretti, riprova')
    }

    setData({
      email: "",
      password: "",
    })



  };


  return (
    <form
      className="d-flex flex-column gap-5 formBackground"
      onSubmit={handleSubmit}
    >
      <div className="d-flex flex-column align-items-center gap-3 pt-3">
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="inputForm text-center"
          value={data.email}
          onChange={inputHandle}
        ></input>
        <input
          type="password"
          placeholder="Password"
          name="password"
          className="inputForm text-center"
          value={data.password}
          onChange={inputHandle}
        ></input>
      </div>
      <div className="d-flex flex-column align-items-center gap-4 pb-3">
        <button type="submit" className="formButton heroBGButton">
          Login
        </button>
        <button type="button" className="formButton heroBGButton" onClick={showModal}>Forgot Password</button>
      </div>
    </form>
  );
};

export default LoginForm;
