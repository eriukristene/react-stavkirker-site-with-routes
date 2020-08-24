// same as FeaturedCategories in OTS
// this is a component

import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";

/* Category images */
import Visited from '../Images/gol-visited.jpg';
import NotVisited from '../Images/urnes-notvisited.jpg';

/* Assets */
import '../Assets/KirkeGallery.css';


function Categories() {

    return (
        <div className="content">
            <div className="galleryContent">
                <div className="kirkeContainer"><Link to="/category/visited"><img src={Visited} style={{width:"100%", cursor:"pointer", height:"100%"}} alt="Visited" />Visited</Link></div>
                <div className="kirkeContainer"><Link to="/category/notvisited"><img src={NotVisited} style={{width:"100%", cursor:"pointer", height:"100%"}} alt="Not Visited" />Not Visited</Link></div>
            </div>
            <div className="text-content">
                Click on an image above to see churches I have visited or churches I have not visited!
            </div>
        </div>    
            
    );
  }
  
  
  export default Categories;