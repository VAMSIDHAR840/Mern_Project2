import axios from 'axios'
import React, { useContext, useState } from 'react'
import abc from "./style.module.css"

const Register = () => {
  let [name, changeName] = useState("")
  let [email, changeEmail] = useState("")
  let [phoneNo, changePhoneNo] = useState("")
  let [gender, changeGender] = useState("")
  let [course, changeCourse] = useState("")
  let [Designation, changeDesc] = useState("")
  let [image, changeImage] = useState("")
  let [password, changePassword] = useState("")

  let nameChange = (e) => { changeName(e.target.value) }
  let emailChange = (e) => { changeEmail(e.target.value) }
  let phoneNoChange = (e) => { changePhoneNo(e.target.value) }
  let genderChange = (e) => { changeGender(e.target.value) }
  let courseChange = (e) => { changeCourse(e.target.value) }
  let descChange = (e) => { changeDesc(e.target.value) }
  let imageChange = (params) => {
    let reader = new FileReader()
    reader.readAsDataURL(params.target.files[0])
    reader.onload = () => {
      changeImage(reader.result)
    }
    reader.onerror = (error) => {
      console.log("Error", error);
    }
  }
  let pasChange = (e) => { changePassword(e.target.value) }
  let submitdata = (e) => {
    let data = { name, image, Designation, email, course, gender, phoneNo, password }
    e.preventDefault()
    console.log(data);
    axios.post('http://localhost:8000/register', data)
      .then((data) => {
        alert(data.data.message)
      })
      .catch((data) => {
        alert(data.data.message)
      })
  }
  return (
    <div>
      <form action="" className={abc.form1} onSubmit={submitdata}>
        <table>
          <tr>
            <td>
              Name :
            </td>
            <td>
              <input type="text" value={name} placeholder='Enter your Username' onChange={nameChange} name="" id="" />
            </td>
          </tr>
          <tr>
            <td>
              Email :
            </td>
            <td>
              <input type="email" value={email} placeholder='Enter your Email' onChange={emailChange} name="" id="" />
            </td>
          </tr>
          <tr>
            <td>
              phoneNo :
            </td>
            <td>
              <input type="tel" value={phoneNo}  placeholder='Enter your phoneNo' onChange={phoneNoChange} name="" id="" />
            </td>
          </tr>
          <tr>
            <td>
              Select Your Designation
            </td>
            <td>
              <select id="Designation" onChange={descChange}>
                <option value="Sales" >Sales</option>
                <option value="HR" >HR</option>
                <option value="Operations">Operations</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>
              Select Your Gender :
            </td>
            <td>
              Male : <input type="radio" name="gender" id="" value="Male" onChange={genderChange} />
              Female : <input type="radio" name="gender" id="" value="Female" onChange={genderChange} />
            </td>
          </tr>
          <tr>
            <td>
              Course :
            </td>
            <td>
              MCA <input type="checkbox" name="" id="" value="MCA" onChange={courseChange} />
              BCA <input type="checkbox" name="" id="" value="BCA" onChange={courseChange} />
              BSC <input type="checkbox" name="" id="" value="BSC" onChange={courseChange} />
            </td>
          </tr>
          <tr>
            <td>
              Choose Your Image :
            </td>
            <td>
              <input type="file" accept="image/*" onChange={imageChange} />
              {image === "" ? image === null : <img src={image} height={100} width={100} alt="" />}
            </td>
          </tr>
          <tr>
            <td>
              Password :
            </td>
            <td>
              <input type="password" value={password} placeholder='Enter your password' onChange={pasChange} name="" id="" />
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

export default Register
