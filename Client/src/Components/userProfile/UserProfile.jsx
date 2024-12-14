import React from 'react';
import BarGraph from '../bargraph/BarGraph';
import imag from '../../assets/photos/image.png';

function UserProfile() {
  let user = JSON.parse(sessionStorage.getItem("user"));
  return (
    <div>

<div className="card my-5 d-flex flex-row flex-wrap align-items-center" style={{ maxWidth: "900px", margin: "auto", boxShadow: "0 4px 8px rgba(0, 128, 0, 0.2)", borderRadius: "10px" }}>
      <img 
        src={imag}
        alt="User Profile"
        className="card-img-top"
        style={{ borderRadius: "50%", maxWidth: "500px",  margin: "20px auto" }}
      />
      <div className="card-body text-center">
        <h5 className="card-title" style={{ fontSize: "35px" }}>{user.name.toUpperCase()}</h5>
        <p className="card-text" style={{ color: "#555", marginBottom: "5px" }}>{user.email}</p>
        <p className="card-text" style={{ color: "#555", marginBottom: "5px" }}>{user.country}</p>
        <p className="card-text" style={{ color: "#555" }}>{user.phone}</p>
      </div>
       </div>
       {console.log(user)}
     <BarGraph len={user.tasks}/>
    </div>  
  );
}

export default UserProfile;