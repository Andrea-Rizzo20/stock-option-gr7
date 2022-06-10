import { useState } from "react";

const SignUpForm = () => {
const [data, setData] = useState({
  email:'',
  firstName:'',
  lastName:'',
  phone:'',
  password:'',
  confPassword:'',
  contract: false
})

const inputHandle = (event) =>{
  const {name, type, value, checked} = event.target
  setData(data =>{
    return{
      ...data,
      [name]: type !=='checkbox' ? value : checked
    }
  })
}

  return (
    <form className="d-flex flex-column align-items-center gap-3 py-3">
      <input type="text" name="firstName" value={data.firstName} placeholder="First Name" className="inputForm text-center" onChange={inputHandle}></input>
      <input type="text" name='lastName' value={data.lastName} placeholder="Last Name" className="inputForm text-center" onChange={inputHandle}></input>
      <input type="email" name='email' value={data.email} placeholder="Email" className="inputForm text-center" onChange={inputHandle}></input>
      <input type="password" name='password' value={data.password} placeholder="Password" className="inputForm text-center" onChange={inputHandle}></input>
      <input type="password" name='confPassword' value={data.confPassword} placeholder="Confirm Password" className="inputForm text-center" onChange={inputHandle}></input>
      <input type="tel" name="phone" value={data.phone} placeholder="Telephone" className="inputForm text-center" onChange={inputHandle}></input>
      <div className="d-flex gap-2">
        <input type="checkbox" checked={data.contract} name="contract" id="contract" onChange={inputHandle}></input>
        <label className="text-white fw-bold" htmlFor='contract'>I agree to Terms of Service</label>
      </div>
      <button type="submit" className="formButton heroBGButton">Sign Up</button>
    </form>
  );
};

export default SignUpForm;
