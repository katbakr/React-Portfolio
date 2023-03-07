import React from 'react';
import logo from '../images/logo.png';
import './portfolio.css'


// const styles = {}

     // intro: {
     //     display: 'flex',
     //     flexDirection: 'column',
     //     justifyContent: 'center',
     // },

  


// };


// }


export default function Home() {
    return (
        <div id='container' >
            <div id='intro'>
                <h2>I'm</h2>
                <h1>Katrina</h1>
                <h2>Baker</h2>
                <p>
                    Aspiring full stack developer, <br/>with high abition and drive.
                </p>
            </div>
            <div id='logo'>
                <img src={logo} alt='logo' />
            </div>
        </div>
    );
}