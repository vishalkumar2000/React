import React from 'react';
// import logo from './logo.svg';
import './App.css';
import './index.js'
var arrow="<"
function App() {
  // const {name,id,Appointment,email,phone,status, Door,Time,profileImg,role,work,} = props;
  const emp={
    "Name": "Alan Ford",
    EmployeeID:"00005152",
    Appointment:"9:00 (04-04-2022)",
    Email:"alenford@gmail.com",
    Phone:"+31123456789",
    Status:"In Progress",
    Door:"Mark",
    Time:"10:30(04-04-2022)",
    profileImg:'https://www.w3schools.com/howto/img_avatar.png',
    Role:"Boltaart Bosbessen",
    Work:"Overheerlijke Boltarrt met Bosbessen uit de keuken van de Bijenkorf."
  };
  return (
    <div className="site-container">
      {
        /* Start Your code here */
        <div className="body">
          <header className="heading">
            <div className="firstbox-content">
              <p className="arrow">{arrow}</p>
              <h4>{emp.Name}</h4>
              <p>{emp.EmployeeID}</p>
            </div>
            <button className="button">print</button>
          </header>
          <div className="customer-info">
            <div className="secondbox-content">
              <p>
                <strong>Appointment </strong>
                {emp.Appointment}
              </p>
              <p>
                <strong>Email : </strong>
                {emp.Email}
              </p>
              <p>
                <strong>phone : </strong>
                {emp.Phone}
              </p>
            </div>
          </div>
          <div className="order-info">
            <div>
              <h3>Status</h3>
              <li>{emp.Status}</li>
            </div>
            <div id="order1">
              <h3>Door</h3>
              <p className="order-para">{emp.Door}</p>
            </div>
            <div className="order-time">
              <h3>Time</h3>
              <p id="time1">{emp.Time}</p>
            </div>
          </div>
          <div className="product-list">
            <img src={emp.profileImg} alt = "profile"></img>
            <div className="content-box4">
              <h3>{emp.Role}</h3>
              <p>{emp.Work}</p>
            </div>
          </div>
        </div>
      }
    </div>
  );
}

export default App;
