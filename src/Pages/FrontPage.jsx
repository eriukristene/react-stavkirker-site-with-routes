import React from 'react';
import "bootstrap/dist/css/bootstrap.css";

// renders all the categories of churches, currently those Visited and NotVisited

/* Components */
import Categories from '../Components/Categories.jsx';

function FrontPage() {

    return (
      <div className="content">
        <Categories />
      </div>
    );
  }
  
  
  export default FrontPage;