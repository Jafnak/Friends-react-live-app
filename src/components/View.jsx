import React, { useState } from 'react'

import Navbar from './Navbar'
import axios from 'axios'



const View = () => {
    const [data,setData]=useState([])
    const fetchData=()=>
        {
            axios.get("https://friendsapi-re5a.onrender.com/view").then(
                (response)=>{
                    setData(response.data)
                }
            ).catch().finally()
        }
  return (
    <div>
<Navbar/>
<div className="container">
    <div className="row g-3">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

        <table class="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Friend Name</th>
      <th scope="col">Friend NickName</th>
      <th scope="col">Describe frnd</th>
    </tr>
  </thead>
  <tbody>
   {data.map(
    (value,index)=>{
        return  <tr>
        <td scope="row">{value.name}</td>
        <td>{value.friendName}</td>
        <td>{value.friendNickName}</td>
        <td>{value.DescribeYourFriend}</td>
      </tr>
    
    }
   )}
  </tbody>
</table>

        </div>
    </div>
</div>

    </div>
  )
}

export default View