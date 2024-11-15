import './main.css';
import Header from './header';
import Home from './home';
import AboutUs from './aboutUs';
import Contact from './contact';
import Services from './services';
import HomePage from './homePage';

import aboutusImg from './assets/aboutus_img.jpg';
import emailIco from './assets/email-ico.png';
import homeImg from './assets/home_img.jpg';
import logo from './assets/logo.png';
import mapsIco from './assets/maps-ico.png';
import phoneIco from './assets/phone-ico.png';
import servicesImg1 from './assets/services_img1.jpg';
import servicesImg2 from './assets/services_img2.jpg';
import servicesImg3 from './assets/services_img3.jpg';
import { useEffect, useState } from 'react';


export default function Main() {
	const sections = ['home', 'about-us', 'our-services', 'contact-us'];
	const [loading, setLoading] = useState(true);

	const imgs = [aboutusImg, emailIco, homeImg, logo, mapsIco, phoneIco, servicesImg1, servicesImg2, servicesImg3];

	// async function loadImgs() {
	// 	await Promise.all(imgs);
				
	// 	setTimeout(() => setLoading(false), 10)
	// }

	// useEffect(() => {
	// 	loadImgs()
	// }, [])

	return (
		<>
			<Header img={logo}/>
			{/* <HomePage sections={sections}/> */}

			<main>
				<Home img={homeImg}/>
				<AboutUs img={aboutusImg}/>
				<Services imgs={[servicesImg1, servicesImg2, servicesImg3]}/>
				<Contact imgs={[emailIco, mapsIco, phoneIco]}/>
			</main>
		</>
	);
};