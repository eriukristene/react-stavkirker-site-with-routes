 // this is /category/whatever-was-clicked-on page
// this will contain a component that loads Visited or Not Visited (components) stave churches, depending on which link was clicked
// same as Category.jsx in OTS
// this is a page

import React from "react";
import { useParams } from "react-router-dom";

import KirkeGallery from '../Components/KirkeGallery.jsx';

function Category({ storeData }) {

    // create an array to hold all the photos and their information text
    // need this here to pass it on to the components
    // this is where the data would go maybe in the OTS?

    const visitedPhotos = [
        {
            src: require ('../Images/borgund.jpeg'), 
            alt: 'Borgund',
            name: 'Borgund Stave Church',
            info: 'A former parish church of the Church of Norway in Lærdal Municipality in Vestland county, Norway. The old stave church is located in the village of Borgund. It was the church for the Lærdal parish (which is part of the Sogn prosti (deanery) in the Diocese of Bjørgvin) until 1868 when it was closed and turned into a museum. The brown, wooden church was built in a stave church style around the year 1200. It is classified as a triple-nave stave church of the Sogn-type.',
            slug: "borgund",
            exact: true
        },
        {
            src: require ('../Images/heddal.jpg'), 
            alt: 'Heddal',
            name: 'Heddal Stave Church',
            info: 'The church is a triple nave stave church and is Norway\'s largest stave church. It was constructed at the beginning of the 13th century. After the reformation, the church was in a very poor condition, and a restoration took place during 1849–1851. However, because the restorers lacked the necessary knowledge and skills, yet another restoration was necessary in the 1950s. The interior is marked by the period after the Lutheran Reformation in 1536–1537 and is for a great part a result of the restoration that took place in the 1950s.',
            slug: "heddal",
            exact: true
        }
      ]
      const notVisitedPhotos = [
          {
              src: require ('../Images/hore.jpg'), 
              alt: 'Høre',
              name: 'Høre Stave Church',
              info: 'The church was built ca. 1179. It is dated through a runic inscription to 1180, and through dendrochronology of the wood after 1178/1179. It is the second church on this location, the previous church was a post church (a church with earth-bound posts standing directly on the ground). There are a number of graves under the church, including those of children. It was rebuilt around 1820. In 1857 the old rooftop was taken down and a new tower was built on a reinforced construction over the ceiling. Renovation of the church was completed in 1979. Excavation uncovered artifacts including 357 coins. The oldest of the coins dates back to a period 1042–1047.',
              slug: "hore",
              exact: true
          },
          {
              src: require ('../Images/lomen.jpg'), 
              alt: 'Lomen',
              name: 'Lomen Stave Church',
              info: 'Lomen Stave Church was built in the second half of the 12th century. Through dendrochronological dating the church has been dated to 1192, but the first reference in written sources is not until 1325 and 1334, at that time as "Hvams kirke". The church was rebuilt and enlarged in 1749. The church is supported by 4 columns, and has three lavishly carved portals, chancel-arches and column capitals. During the last refurbishment of the church, an archaeological excavation was carried out and 71 artifacts were found, including pieces of jewelry and coins. Some of the coins were as old as the 12th century. Lomen Stave Church houses the pedestal of a baptismal font dating from the 1200s.',
              slug: "lomen",
              exact: true
          },
          {
              src: require ('../Images/ringebu.jpg'), 
              alt: 'Ringebu',
              name: 'Ringebu Stave Church',
              info: 'Built in the first quarter of the 13th century, the church is first mentioned in 1270, although it could be older. It was rebuilt into a cruciform church around 1630 by master-builder Werner Olsen (ca. 1600–1682) and in 1631 received its characteristic red tower. Of the original church only the nave remains, with free-standing posts in the inner area. Later restoration in 1921 brought it back a bit closer to its original shape. The church was painted in 1717, but only the lower half of the walls were done, since the ceiling at that time was lower. At one point the church was painted white within, but during the restoration work by Ragnvald Einbu in 1921 the church interior was restored to its original colouring.',
              slug: "ringebu",
              exact: true
          }
      ]
    
    let { slug } = useParams();
    let categoryData = null;

    for(var x in storeData.categories) {
        console.log(slug + "hello", storeData.categories[x].slug);
        if(storeData.categories[x].slug.indexOf(slug) !== -1) {
            categoryData = storeData.categories[x];
        }
    }

    let galleryData = [];

    switch (true) {
        case slug === "visited": 
            galleryData = visitedPhotos;
            break;
        case slug === "notvisited": 
            galleryData = notVisitedPhotos;
            break;
        default:
            console.log("No images to display");
    }

    return (
        // need to load the component and data based on which link was clicked
        // use KirkeGallery component to load the correct gallery of pictures based on what category was chosen
        // this is like ProductContainer
        <div classname="content">
            <KirkeGallery churchData={galleryData} />
        </div>

      

    );

}

export default Category;