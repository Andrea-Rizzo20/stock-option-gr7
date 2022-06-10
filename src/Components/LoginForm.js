import { useState } from "react"

const LoginForm = () =>{
    const [data, setData] = useState({
        userName:'',
        password:''
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


    return(
        <form className="d-flex flex-column gap-5 formBackground">
          <div className="d-flex flex-column align-items-center gap-3 pt-3">
            <input type="text" placeholder="Username" name="userName" className="inputForm text-center" value={data.userName} onChange={inputHandle}></input>
            <input type="password" placeholder="Password" name="password" className="inputForm text-center" value={data.password} onChange={inputHandle}></input>
          </div>
          <div className="d-flex flex-column align-items-center gap-4 pb-3">
            <button type="submit" className="formButton heroBGButton">Login</button>
            <button className="formButton heroBGButton">Forgot Password</button>
          </div>
      </form>
    )
}

export default LoginForm