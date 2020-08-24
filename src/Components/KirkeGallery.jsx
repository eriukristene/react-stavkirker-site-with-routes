// this will function like ProductContainer and somehow load the correct list of churches based on what they chose

import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";

import KirkeBox from './KirkeBox';

/**
 * Information for each stave church is from Wikipedia.org
 */

function KirkeGallery ( { churchData }) {

    return (
        <div className="content">
            <div className="galleryContent">
                {/* Create the image gallery here */}
                {churchData.map((church, index) => (
                    <div className="kirkeContainer" key={index}>
                         <KirkeBox churchData={church} />
                    </div>
                ))}
            </div>
            <div className="text-content">
                Click on an image above to see a larger picture of the stave church!
            </div>
            <div>
                <Link to="/">Home</Link>
            </div>
        </div>
        
    );
}

export default KirkeGallery;


