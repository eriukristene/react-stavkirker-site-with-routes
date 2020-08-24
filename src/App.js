import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";

/* Components */
import Content from './Components/Content.jsx';

/* Assets */
import './Assets/App.css';
import './Assets/KirkeGallery.css';

/* Router Views */
import Frontpage from "./Pages/FrontPage.jsx";
import Category from "./Pages/Category.jsx";
import Kirke from "./Pages/Kirke.jsx";

class App extends React.Component {

  constructor(props) {
    super(props);

   var initialData = {
      routes: [ // to pages
        {
          path: "/",
          exact: true,
          view: () => <Frontpage storeData={this.state} />
        },
        {
          path: "/category/:slug", // where slug is visited or notvisited
          exact: true,
          view: () => <Category storeData={this.state} />
        },
        {
          path: "/kirke/:slug", // where slug is one of the churches
          exact: true,
          view: () => <Kirke storeData={this.state} />
        }
      ], // end routes
      categories: [
        {
          name: "Visited",
          slug: "visited",
          path: "/category/visited",
          categories: [] // where is this being used
        },
        {
          name: "Not Visited",
          slug: "notvisited",
          path: "/category/notvisited",
          categories: []
        },
      ]
   }
   
   this.state = initialData;
  }

  routeChange(route) {
    console.log('route changed -->', route);
  }

  render() {
    return (
      <div className="App"> 
        <Router>
          <Content storeData={this.state} routeChange={this.routeChange} />
        </Router>
      </div>
    );
  }
}

export default App;
