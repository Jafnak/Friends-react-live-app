import React from 'react'

import Navbar from './Navbar'



const View = () => {
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
    <tr>
      <td scope="row">1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
  
  </tbody>
</table>

        </div>
    </div>
</div>

    </div>
  )
}

export default View