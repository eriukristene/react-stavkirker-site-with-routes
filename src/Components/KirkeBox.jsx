import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";

// this functions like ProductBox in OTS
// renders an image of a church that will link to more specific information about that church
function KirkeBox ({ churchData }) {

    return (
        <Link to={"/kirke/" + churchData.slug}> 
            <img src={churchData.src} alt={churchData.alt} style={{width:"100%", cursor:"pointer", height:"100%"}} />
            <div>{churchData.name}</div>
        </Link>
    );

}
  
export default KirkeBox;



