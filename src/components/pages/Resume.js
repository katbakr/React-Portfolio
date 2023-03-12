import React from 'react';
import './portfolio.css'
import { FaHtml5, FaCss3, FaNodeJs, FaReact, FaGit } from "react-icons/fa"

export default function Resume() {
  return (
    <div>
      <h1>Needing A Full Stack Developer?</h1>
      <h3>Check out my resume below!</h3>
      <h5>I am currently seeking an entry level dev position.</h5>
      <form action='https://drive.google.com/file/d/1Q70pvdT-xbzf98i78JkZfTccPTAMgfes/view?usp=sharing' method="get" target="_blank">
         <button id='PDFBtn' type="button">Go to My Resume</button>
      </form>

      {/* <button id='PDFBtn' type="button" onclick="window.location.href='https://drive.google.com/file/d/1Q70pvdT-xbzf98i78JkZfTccPTAMgfes/view?usp=sharing';">
        Go to My Resume
      </button> */}
      {/* <button id='PDFBtn' src='https://drive.google.com/file/d/1Q70pvdT-xbzf98i78JkZfTccPTAMgfes/view?usp=sharing'>
     
      Click Here to Open PDF
     
      </button> */}
     
      {/* <h4>I am a hardworking, ambitious, and dedicated full stack developer.</h4> */}
      <div id='proficiencies'>
        <p id='skillsLabel'>I Have Experience with:</p>
        <ul id='skillsList'>
          <li><FaHtml5 />HTML</li>
          <li><FaCss3 />CSS and CSS frameworks (bootstrap, tailwind)</li>
          <li><FaNodeJs />Node.js</li>
          <li><FaReact />React</li>
          <li>Servers (express.js mongoDB)</li>
          <li>SQL- sequelize</li>
        </ul>
      </div>
    </div>
  );
}