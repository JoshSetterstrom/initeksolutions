import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Header from './header';
import Home from './home';
import AboutUs from './aboutUs';
import Contact from './contact';
import Services from './services';
import HomePage from './homePage';

import aboutusImg from './assets/aboutus_img.jpg';
import homeImg from './assets/home_img.jpg';
import logo from './assets/logo.png';
import servicesImg1 from './assets/services_img1.jpg';
import servicesImg2 from './assets/services_img2.jpg';
import servicesImg3 from './assets/services_img3.jpg';
import Footer from './footer';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <div className='asd' style={{ justifyContent: 'center', alignItems: 'center', marginLeft: 10, marginTop: 10, display: 'flex', height: 60, width: 60, backgroundColor: 'white', color: 'var(--color20)', fontSize: 48, fontWeight: 600}}>
            <div style={{marginTop: -6}}>i</div>
            <div style={{marginTop: 10}}>S</div>
        </div>
        {/* <Header img={logo}/> */}
        {/* <HomePage /> */}

        {/* <main>
            <Home img={homeImg}/>
            <AboutUs img={aboutusImg}/>
            <Services imgs={[servicesImg1, servicesImg2, servicesImg3]}/>
            <Contact />
        </main> */}

        {/* <Footer /> */}
    </React.StrictMode>
);