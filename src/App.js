import React from 'react';
import header from './components/header';
import navigation from './components/navigation';
import aboutMe from './components/aboutMe';
import portfolio from './components/portfolio';
import contactMe from './components/contactMe';
import footer from './components/footer';
// import  from './components/';

// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <header></header>
      <navigation></navigation>
      <main>
        <aboutMe></aboutMe>
        <portfolio></portfolio>
        <contactMe></contactMe>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
