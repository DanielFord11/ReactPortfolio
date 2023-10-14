import React from 'react';
import './FeaturedProjects.css';
import'../Assets/Health.png'
import healthImage from '../Assets/Health.png';
import ufoImage from '../Assets/UFOs.png';
import refugeeImage from '../Assets/Refugee.png';
import collegeImage from '../Assets/college.png';
import ghostWriterImage from '../Assets/ghostWriter.png';

function FeaturedProjects() {
  return (
    <section className="Featured_Projects_Section">
      <div className="Featured_Projects">
        <h1 id="Project_Landing">03. Some Things I've Built</h1>
        <div className="Project_1">
           <h1>AI Generated News Site</h1>
           <a href="https://danielford11.github.io/Project-2/"></a>
           <img id="NewSite_Photo" src={ghostWriterImage} alt="New Site Photo" height="620rem" />
           <span>
             <p>
               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam esse, hic quaerat consequuntur beatae
               cumque sed magni id harum adipisci, earum blanditiis culpa accusamus distinctio! Debitis facere laborum
               tenetur alias?
             </p>
           </span>
         </div>
         <div className="Project_2">
           <h1>College Calculator</h1>
           <a href="https://danielford11.github.io/Project-2/"></a>
           <img id="College_Photo" src={collegeImage} alt="College Data Photo" height="620rem" />
           <span>
             <p>
               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam esse, hic quaerat consequuntur beatae
               cumque sed magni id harum adipisci, earum blanditiis culpa accusamus distinctio! Debitis facere laborum
               tenetur alias?
             </p>
           </span>
         </div>
         <div className="Project_3">
           <h1>UFO Sighitings NLP Semantic Similarity</h1>
           <a href="https://danielford11.github.io/Project-2/"></a>
           <img id="UFO_Photo" src={ufoImage} alt="UFO Data Photo" height="320rem" />
           <span>
             <p>
               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam esse, hic quaerat consequuntur beatae
               cumque sed magni id harum adipisci, earum blanditiis culpa accusamus distinctio! Debitis facere laborum
               tenetur alias?
             </p>
           </span>
         </div>
        <div className="Project_4">
          <h1>Refugee Analysis</h1>
          <a href="https://danielford11.github.io/Project-2/">
          <img id="UFO_Photo" src={refugeeImage} alt="Refugee Data Photo" height="320rem" />
          </a>
          <span>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam esse, hic quaerat consequuntur beatae
              cumque sed magni id harum adipisci, earum blanditiis culpa accusamus distinctio! Debitis facere laborum
              tenetur alias?
            </p>
          </span>
        </div>
        <div className="Project_5">
          <h1>d3 JS Health Visualizations</h1>
          <a href="https://danielford11.github.io/Project-2/">
          <img id="Health_Photo" src={healthImage} alt="Health Data Photo" height="320rem" />
          </a>
          <span>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam esse, hic quaerat consequuntur beatae
              cumque sed magni id harum adipisci, earum blanditiis culpa accusamus distinctio! Debitis facere laborum
              tenetur alias?
            </p>
          </span>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProjects;
