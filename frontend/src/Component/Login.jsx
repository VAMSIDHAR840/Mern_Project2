import React, { useState } from 'react'
import axios from 'axios'
import abc from "./style.module.css"
import { useNavigate } from 'react-router-dom'
const Login = () => {
  let [email, changeEmail] = useState("")
  let [password, changePassword] = useState("")
  let emailChange = (e) => { changeEmail(e.target.value) }
  let pasChange = (e) => { changePassword(e.target.value) }
  let navi = useNavigate()

  let submitdata = (e) => {
    let data = { email, password }
    e.preventDefault()
    axios.post('http://localhost:8000/login', data)
      .then((data) => {
        alert(data.data.message)
        navi("/details")
      })
      .catch((data) => {
        alert(data.data.message)
      })
  }
  return (
    <div>
      <form action="" className={abc.form2} onSubmit={submitdata}>
        <table>
          <tr>
            <td>
              Email :
            </td>
            <td>
              <input type="email" value={email} placeholder='Enter your Username' onChange={emailChange} name="" id="" />
            </td>
          </tr>
          <tr>
            <td>
              Password :
            </td>
            <td>
              <input type="text" value={password} placeholder='Enter your password' onChange={pasChange} name="" id="" />
            </td>
          </tr>
          <tr>
            <td>
              <button className={abc.btn1}>Submit</button>
            </td>
          </tr>

        </table>
      </form>
    </div>
  )
}

export default Login
