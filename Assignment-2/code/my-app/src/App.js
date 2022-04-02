import logo from './logo.svg';
import './App.css';



function App(props) {
 const {employee}=props;
 const {profileImg,age,bloodGroup,location,name}=employee;
    
return(
  <div className="container">
  
  <div class="imagediv">
    <img src={profileImg} height="160px"/>
    <h2>{name}</h2>
    
  </div>
  <div className="locadiv">
    <p>Location</p>
    <h1>{location}</h1>
  </div>
  <div className="blooddiv">
    <p>Blood group</p>
    <h1>{bloodGroup}</h1>
  </div>
  <div className="agediv">
    <p>Age</p>
    <h3>{age}</h3>
  </div>

</div>
)
}



export default App;
