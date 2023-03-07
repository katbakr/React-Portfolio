import React from 'react';
import './portfolio.css'
import pickup from '../images/pickup'
import fiero from '../images/fiero'
import plants from '../images/plants'

export default function About() {
  return (
    <div id='aboutMe'>
      <h1 id='AMtitle'>Hello World!</h1>
      <p>
        I started started coding Fall of 2022, and boy has it been a fun and challenging adventure!
      </p>
      <p>I am born and raised in the Pacific Northwest. I got interested in programming because of my interest in the tech industy. I love gaming and find development and design extremely interesting. After finishing my Full stack certification through University of Washington, I plan to start working towards a four year computer science degree with a local university. 
        <br/><br/> I come from a primarily customer service based background. I am currently seeking jobs in tech either starting in entry level development or IT support. 
        
        <br/><br/> My hobbies are:</p>
      <ul>
        <li>Reading, I love romance, mystery, horror, and fantasy books!</li>
        <li>Playing video games. Some of my favorites lately are Hunt Showdown, Bloons Tower Defense 6, Paladins, and Stray. </li>
        <li>Watching shows. I am currently about halfway done with Hunter x Hunter!</li>      
        <li>Baking. I'm not great at it but I have fun while trying! (Kind of like coding)</li>
        <li>Working on cars! In 5 years of driving I've owned and sold 8 cars/pickups. I love flipping cars and I find a lot of satisfaction from diagnosing and fixing problems. Unfortunatly that also means I have probably spent at least 100 hours broken down on the side of the road waiting for tow trucks! lol</li>
        <li>Being a plant mom! Recently I've been really exploring my love for plants and gardening. </li>
      </ul>
      <div id='imgContainer'>
      
      <img src={pickup} id='aboutMepic'></img>
      
     
      <img src={fiero} id='aboutMepic'></img>
      
      
      <img src={plants} id='aboutMepic'></img>
      
      </div>
    </div>
   
  );
}
