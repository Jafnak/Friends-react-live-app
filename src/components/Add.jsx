import React, { useEffect, useState } from 'react'

import Navbar from './Navbar'
import axios from 'axios'


const Add = () => {
const [data,setData]=useState(
    {
    "name": "",
 "friendName": "",
 "friendNickName":"",
 "DescribeYourFriend":""
    }
)
const inputHandler=(event)=>
    {
        setData({...data,[event.target.name]:event.target.value})
    }

const readValue=()=>
    {
        axios.post("https://friendsapi-re5a.onrender.com/adddata",data).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status=="success") {
                    alert("Successfully added")
                } else {
                    alert("Error")
                }
            }
        ).catch(
            (error)=>{
                alert(error.message)
            }
        )
    }

  return (
    <div>
<Navbar/>
<div className="container">
    <div className="row g-3">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <label htmlFor="" className="form-label">Name</label>
            <input type="text" className="form-control" name="name" value={data.name} onChange={inputHandler} />
        </div>
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <label htmlFor="" className="form-label">Friend Name</label>
        <input type="text" className="form-control"  name="friendName" value={data.friendName} onChange={inputHandler}/>
        </div>
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <label htmlFor="" className="form-label">Friend Nick Name</label>
        <input type="text" className="form-control" name="friendNickName" value={data.friendNickName} onChange={inputHandler}  />
        </div>
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <label htmlFor="" className="form-label">Describe friend</label>
        <textarea  id="" className="form-control" name="DescribeYourFriend" value={data.DescribeYourFriend} onChange={inputHandler}></textarea>
        </div>
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <button className="btn btn-primary" onClick={readValue}>Add</button>
        </div>
    </div>
</div>

    </div>
  )
}

export default Add