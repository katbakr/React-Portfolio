import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Projects from './pages/Projects2';
// import Footer from './Footer';
import './pages/portfolio.css';
import { FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa"

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Projects') {
      return <Projects />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);



  return (
    <div id='page'>
      {/* <img ></img> */}
      {/* <h1 id='header'>Hello World!</h1> */}
      {/* <h2 style={styles.h2}>I'm Katrina Baker</h2> */}
      <main>
        <div id='navbar'>
          {/* We are passing the currentPage from state and the function to update it */}
          <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
          {/* Here we are calling the renderPage method which will return a component  */}
        </div>
        <div >
          {renderPage()}
        </div>
      </main>
      <footer id='footer'>
        <ul>
          <a href='https://www.linkedin.com/in/katrina-m-b1b142254/' target='blank'>
            <li> <FaLinkedin /> </li>
          </a>
          <a href='https://github.com/katbakr'>
            <li> <FaGithub /> </li>
          </a>
          <a href='https://stackoverflow.com/users/21058793/katrina-baker'>
            <li> <FaStackOverflow /> </li>
          </a>
          {/* <a href='https://stackoverflow.com/users/21058793/katrina-baker'>
            <li> <FaSlack/> </li>
          </a> */}
        </ul>
        {/* <div id='footerText'>
            <p >this is footer</p>
        </div> */}
      </footer>
    </div>
  );
}
