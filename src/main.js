import './main.css';
import Header from './header';
import Home from './home';
import AboutUs from './aboutUs';
import Contact from './contact';
import Services from './services';
import HomePage from './homePage';

export default function Main() {
	const sections = ['home', 'about-us', 'our-services', 'contact-us'];



	return (
		<>
			<Header />
			<HomePage sections={sections}/>

			<main>
				<Home />
				<AboutUs />
				<Services />
				<Contact />
			</main>
		</>
	);
};