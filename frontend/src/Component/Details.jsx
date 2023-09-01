import axios from 'axios'
import React, { useEffect, useState } from 'react'
import abc from "./style.module.css"
import { Link } from 'react-router-dom'
const Details = () => {
    let [date] = useState(new Date())
    let [data, changeData] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8000/register')
            .then((data) => {
                changeData(data.data)
                console.log(data.data);
            })
    }, [])

    let deleteData=(_id)=>{
        axios.delete(`http://localhost:8000/register/${_id}`)
        window.location.assign('/register')
    }
    return (
        <div>
            <div className={abc.div5}>
                <div className={abc.div6}>
                    <h1>Image</h1>
                    <h1>Name</h1>
                    <h1>MobileNo</h1>
                    <h1>Desg</h1>
                    <h1>Gender</h1>
                    <h1>Date</h1>
                    <h1>Course</h1>
                    <h1>Email</h1>
                </div>
            </div>
            {
                data.map((e) => {
                    return (
                        <div className={abc.div3}>
                            <div className={abc.div4}>
                                <img src={e.image} alt="" height={100} width={100} />
                                <h1>{e.name}</h1>
                                <h1>{e.phoneNo} </h1>
                                <h1>{e.Designation} </h1>
                                <h1>{e.gender} </h1>
                                <h1>{date.getDay() + "-" + date.getMonth() + "-" + date.getFullYear()}</h1>
                                <h1>{e.course} </h1>
                                <h1>{e.email} </h1>
                                <button onClick={()=>{deleteData(e._id)}}  className={abc.btn3} >Delete</button>
                                <Link to={`/edit/${e._id}`} className={abc.btn3}>Edit</Link>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Details
