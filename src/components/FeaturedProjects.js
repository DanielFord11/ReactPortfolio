import React from 'react';
import './FeaturedProjects.css'; // You can create a CSS file for styling

function FeaturedProjects() {
  return (
    <section className="Featured_Projects_Section">
      <div className="Featured_Projects">
        <h1 id="Project_Landing">03. Some Things I've Built</h1>

        <div className="Project_1">
          <h1>UFO Semantic Similarity</h1>
          <a href="https://danielford11.github.io/Project-2/">
            <img src="Assets/UFO_ML.png" alt="UFO ML Project IMG" />
          </a>
          <span>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam esse, hic quaerat consequuntur beatae
              cumque sed magni id harum adipisci, earum blanditiis culpa accusamus distinctio! Debitis facere laborum
              tenetur alias?
            </p>
          </span>
        </div>

        <div className="Project_2">
          <h1>Weather Analysis</h1>
          <a href="https://danielford11.github.io/HTML_CSS_Dashboard/wind_speed.html">
            <img src="Assets/Weather_Analysis.png" alt="Plotly Graphs Juxtaposing Weather Variables" />
          </a>
          <span>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam esse, hic quaerat consequuntur beatae
              cumque sed magni id harum adipisci, earum blanditiis culpa accusamus distinctio! Debitis facere laborum
              tenetur alias?
            </p>
          </span>
        </div>

        <div className="Project_3">
          <h1>Refugee Analysis</h1>
          <img src="#" alt="UFO NLP Machine Learning" />
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
