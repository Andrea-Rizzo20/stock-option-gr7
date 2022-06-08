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
        <form>
        <input type="text" placeholder="Username" name="userName" value={data.userName} onChange={inputHandle}></input>
        <input type="password" placeholder="Password" name="password" value={data.password} onChange={inputHandle}></input>
        <button type="submit">Login</button>
        <button>Forgot Password</button>
      </form>
    )
}

export default LoginForm