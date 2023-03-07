import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Projects from './pages/Projects2';
import Footer from './Footer';
import './pages/portfolio.css';
import { FaGithub, FaLinkedin, FaBehanceSquare, FaInstagram, FaSlackHash, FaSlack } from "react-icons/fa"

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

  //   const styles = {
  //   page: {
  // margin: '0',
  // padding: '0',
  // backgroundColor: '#060015',
  //   },

  //     h1: {
  //     // position: 'fixed',
  //     textAlign: 'left',
  //     paddingLeft: '6rem',
  //     paddingBottom: '1.5rem',
  //     paddingTop: '1.5rem', 
  //     // backgroundColor: '#ff6a45',
  //     color: 'white',
  //     backgroundColor: '#060015',
  //     fontSize: '4rem', 

  //   },
  //   h2: {
  //     // position: 'fixed',
  //     textAlign: 'left',
  //     paddingLeft: '6rem',
  //     paddingBottom: '1.5rem',
  //     // paddingTop: '1.5rem', 
  //     // backgroundColor: '#ff6a45',
  //     color: 'white',
  //     backgroundColor: '#060015',

  //   },

  //   div: {
  //    paddingLeft: '6rem', 
  //    paddingRight: '6rem', 
  //    color: 'black',
  //    backgroundColor: '#060015',
  //     // display: 'flex',
  //     // justifyContent: 'center',

  //     // maxWidth: '80%', 
  //   },

  //   main: {
  // padding: '60px',
  // maxWidth: '95%',
  // margin: 'auto',
  // color: 'white',
  //   },

  //   footer: {
  //   position: 'fixed',
  //   left: 0,
  //   bottom: 0,
  //   width: '100%',
  //   backgroundColor: '#060015',
  //   color: 'white',
  //   textAlign: 'center'
  //     }
  //   }

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
