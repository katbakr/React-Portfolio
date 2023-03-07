import React from 'react';
import './portfolio.css'
import backend from '../images/backend.png'
import jate from '../images/jate.png'
import Project2 from '../images/project2.png'
import noteTaker from '../images/noteTaker.png'



export default function Projects() {
  return (
    <div>
    <div id='cardsList'>
      <div id="card">
        <h5>Day in the Leaf</h5>
        <img
          src={Project2}
          alt="Day in the Leaf website"
          id="projImages"
        />
        <div id="card-body">

          <a href="https://github.com/mtownsend509/A-Day-in-the-Leaf" target="_blank" rel="noreferrer">
            <button id='cardBtn'>GitHub</button>
          </a>
          <a href="https://a-day-in-the-leaf.herokuapp.com/" target="_blank" rel="noreferrer">
            <button id='cardBtn'>Website</button>
          </a>
        </div>
      </div>
      <div id="card">
        <h5>JATE PWA</h5>
        <img
          src={jate}
          alt="jate appliation"
          id="projImages"
        />
        <div id="card-body">

          <a href="https://github.com/katbakr/PWA-Text-Editor" target="_blank" rel="noreferrer">
            <button id='cardBtn'>GitHub</button>
          </a>
          <a href="https://secret-citadel-06710.herokuapp.com/" target="_blank" rel="noreferrer">
            <button id='cardBtn'>Website</button>
          </a>
        </div>
      </div>
      <div id="card">
        <h5>Note Taker</h5>
        <img
          src={noteTaker}
          alt="note taker website"
          id="projImages"
        />
        <div id="card-body">

          <a href="https://github.com/katbakr/note-taker" target="_blank" rel="noreferrer">
            <button id='cardBtn'>GitHub</button>
          </a>
          <a href="https://wk11-note-taker2.herokuapp.com/" target="_blank" rel="noreferrer">
            <button id='cardBtn'>Website</button>
          </a>
        </div>
      </div>
      <div id="card">
        <h5>E-Commerce Backend</h5>
        <img
          src={backend}
          alt="place holder for backend application"
          id="projImages"
        />
        <div id="card-body">

          <a href="https://github.com/katbakr/ORM--E-commerce-Back-End" target="_blank" rel="noreferrer">
            <button id='cardBtn'>GitHub</button>
          </a>
        </div>
      </div>
      <div id="card">
        <h5>Social Network API</h5>
        <img
          src={backend}
          alt="place holder for backend application"
          id="projImages"
        />
        <div id="card-body">

          <a href="https://github.com/katbakr/Social-Network-API" target="_blank" rel="noreferrer">
            <button id='cardBtn'>GitHub</button>
          </a>
        </div>
      </div>
      <div id="card">
        <h5>README.md Generator</h5>
        <img
          src={backend}
          alt="place holder for backend application"
          id="projImages"
        />
        <div id="card-body">

          <a href="https://github.com/katbakr/readme-generator" target="_blank" rel="noreferrer">
            <button id='cardBtn'>GitHub</button>
          </a>
        </div>
      </div>
    </div>
    </div>
    
  );
}