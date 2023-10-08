import React from 'react';
import './About.css'; // You can create a CSS file for styling

function About() {
  return (
    <section className="About_Section">
      <div className="About_inner">
        <div className="About_H3_Container">
          <h3 id="About_Header">01. About Me</h3>
        </div>

        <div className="About_Paragraphs">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere cupiditate quaerat maiores
            molestiae! Repellat, et unde? Perspiciatis reiciendis in sunt laboriosam, amet illum mollitia!
            Nobis, maxime tempore. Corporis, iusto sit!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere cupiditate quaerat maiores
            molestiae! Repellat, et unde? Perspiciatis reiciendis in sunt laboriosam, amet illum mollitia!
            Nobis, maxime tempore. Corporis, iusto sit!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere cupiditate quaerat maiores
            molestiae! Repellat, et unde? Perspiciatis reiciendis in sunt laboriosam, amet illum mollitia!
            Nobis, maxime tempore. Corporis, iusto sit!
          </p>
        </div>

        <div className="About_Photo">
          <img id="About_Photo" src="./Assets/AboutMe.png" alt="About Me Photo" height="320rem" />
        </div>

        <ul className="Skills">
          <li>JavaScript</li>
          <li>Python</li>
          <li>Data Science</li>
          <li>React</li>
          <li>Node.js</li>
          <li>Agile</li>
          <li>Product MGMT</li>
        </ul>
      </div>
    </section>
  );
}

export default About;
