import './main.css';
import phoneIco from './assets/phone-ico.png';
import Header from './header';
import Home from './home';
import AboutUs from './aboutUs';
import Contact from './contact';
import Services from './services';

export default function Main() {
	return (
		<>
			<Header />

			<main>
				<Home />
				<AboutUs />
				<Services />
				<Contact />
			</main>
		</>
	);
};