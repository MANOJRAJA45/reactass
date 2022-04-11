import React from "react";
import {Link} from "react-router-dom";
import "../components/Landingpage.css";

function Landingpage(){
    return (
        <div className="landingpage">
          <div className="imagediv">
            <img src="https://kalamtimes.com/uploads/images/news/20211216/x1639667879_i.jpg.pagespeed.ic.gec0lV9caj.jpg" height="625px"alt="landing img"/>

          </div>
          <div className="enterdiv">
            <h1 className="textdiv">The<br/>45 Team</h1>
            <Link to ="/postview">
            <button className="btn">ENTER</button>
            </Link>
          </div>
            

        </div>

    )
}
export default Landingpage;