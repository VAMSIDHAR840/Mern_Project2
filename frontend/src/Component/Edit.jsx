import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useParams } from 'react-router-dom'
import abc from "./style.module.css"
const Edit = () => {
    let [name, changeName] = useState("")
    let [email, changeEmail] = useState("")
    let [phoneNo, changePhoneNo] = useState("")
    let [gender, changeGender] = useState("")
    let [course, changeCourse] = useState("")
    let [Designation, changeDesc] = useState("")
    let [image, changeImage] = useState("")
    let [password, changePassword] = useState("")

    let { id } = useParams()

    useEffect(() => {
        axios.get(`http://localhost:8000/register/${id}`)
            .then((e) => {
                changeName(e.data[0].name)
                changeEmail(e.data[0].email)
                changePhoneNo(e.data[0].phoneNo)
                changeGender(e.data.gender)
                changeCourse(e.data.course)
                changeDesc(e.data.Designation)
                changePassword(e.data[0].password)
                changeImage(e.data[0].image)
            })
    }, [])

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
        e.preventDefault()
        let data = { name, email, phoneNo, gender, course, Designation, image, password }
        console.log(data);
        axios.put(`http://localhost:8000/register/${id}`, data)
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
                            <input type="text" onChange={nameChange} value={name} placeholder='Enter your Username' name="" id="" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Email :
                        </td>
                        <td>
                            <input type="email" onChange={emailChange} value={email} placeholder='Enter your Username' name="" id="" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            phoneNo :
                        </td>
                        <td>
                            <input type="tel" onChange={phoneNoChange} value={phoneNo} placeholder='Enter your Username' name="" id="" />
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
                            Male : <input type="radio" onChange={genderChange} name="gender" id="" value="Male" />
                            Female : <input type="radio" onChange={genderChange} name="gender" id="" value="Female" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Course :
                        </td>
                        <td>
                            MCA <input type="checkbox" onChange={courseChange} name="" id="" value="MCA" />
                            BCA <input type="checkbox" onChange={courseChange} name="" id="" value="BCA" />
                            BSC <input type="checkbox" onChange={courseChange} name="" id="" value="BSC" />
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
                            <input type="password" onChange={pasChange} value={password} placeholder='Enter your password' name="" id="" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button className={abc.btn1}>Update</button>
                        </td>
                    </tr>

                </table>
            </form>
        </div>
    )
}

export default Edit
