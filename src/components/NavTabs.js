import React from 'react';
import './pages/portfolio.css';

// const styles = {
//     ul: {
//         backgroundColor: '#060015',
//     },
//     a: {
//         color: 'purple'
//     },
//     navLinkColor: {
//          backgroundColor:'white',
//          color: 'purple',
//          marginLeft: '.25rem',
//          marginTop: '.5rem',
//     }
// }
// style={styles.a}
// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-pills" id='navbar'>
      <li id='navBtn' className="nav-item">
        <a 
          href="#home"
          onClick={() => handlePageChange('Home')}
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </a>
      </li>
      <li id='navBtn' className="nav-item">
        <a 
          href="#about" 
          onClick={() => handlePageChange('About')}
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About Me
        </a>
      </li>
      <li id='navBtn' className="nav-item">
        <a 
          href="#projects2"
          onClick={() => handlePageChange('Projects')}
          // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
        >
          My Projects
        </a>
      </li>
      <li id='navBtn' className="nav-item">
        <a 
          href="#resume"
          onClick={() => handlePageChange('Resume')}
          // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>
      </li>
      <li id='navBtn' className="nav-item">
        <a 
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact Me
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
