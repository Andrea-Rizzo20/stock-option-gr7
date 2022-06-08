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
    <form>
      <input type="email" name='email' value={data.email} placeholder="Email" onChange={inputHandle}></input>
      <input type="text" name="firstName" value={data.firstName} placeholder="First Name" onChange={inputHandle}></input>
      <input type="text" name='lastName' value={data.lastName} placeholder="Last Name" onChange={inputHandle}></input>
      <input type="tel" name="phone" value={data.phone} placeholder="Telephone" onChange={inputHandle}></input>
      <input type="password" name='password' value={data.password} placeholder="Password" onChange={inputHandle}></input>
      <input type="password" name='confPassword' value={data.confPassword} placeholder="Confirm Password" onChange={inputHandle}></input>
      <input type="checkbox" checked={data.contract} name="contract" onChange={inputHandle}></input>
      <label>I agree to Terms of Service</label>
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUpForm;
