import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

var arrow="<"
const employeee={
  name: "Alan Ford",
  id:"00005152",
  appointment:"6:30  (3-4-2022)",
  email:"the10x@gmail.com",
  phone:"+9999999999",
  status:"In Progress",
  door:"Mark",
  time:"10:30  (3-4-22)",
  profileimg: "https://www.w3schools.com/howto/img_avatar.png",
  nameid:"Boltaart Bosbessen",
  info:"hkvchaddbk kjbvbk mcvbkjba mkaj jbkvjaebe jghvh",

  
};+

function App() {
  const {name,id,appointment,email,phone,status,door,time,profileimg,nameid,info}=employeee;
  
  return (
  <div className="site-container">
  {}
  <div className='headerinfo'>
    <div className='hone'>{empoleyye.arrow}</div>
    <div className='htwo'>
      <h2>{name}</h2>
      <p>{id}</p>
    </div>
    <div className='hthree'>
      <button className='btn' type='submit'>Print</button>
    </div>
  </div>
  <div className='customer-info'>
    <p><b>Appointment : </b><span>{appointment}</span></p>
    <p><b>Email : </b><span>{email}</span></p>
    <p><b>Phone : </b><span>{phone}</span></p>
  </div>
  <div className='order-info'>
  <div className='oone'>
      <h4>Status <ul><li>{status}</li></ul></h4>
      
    </div>
    <div className='otwo'>
      <h3>Door</h3>
      <h4>{door}</h4>
    </div>
    <div className='othree'>
      <h3>Time</h3>
      <p>{time}</p>
    </div>


  </div>
  <div class="product-list">
      <div class="boxx">
      <div class='boxinred'></div>
      </div>
      <div class="box2">
        <img src="https://www.w3schools.com/howto/img_avatar.png" height="111px"/>
        
      </div>
      <div class="box3">
      <div class="datacls">
        <div class="imgcls"><h3>{nameid}</h3></div>
        <div class="imgdatacls">{info}</div>
      </div>
        
      </div>
    </div>
   
</div>

)

}

export default App;