import './header.css';
import logo from './assets/initek.png';


export default function Header() {
    const sections = ['home', 'about-us', 'our-services', 'contact-us'];

    const anchors = sections.map((anchor, i) => (
		<a
			key={`a-${anchor}`}
			target='_blank'
			onClick={() => {document.getElementById(anchor)?.scrollIntoView({behavior: 'smooth'})}}
		>
			{anchor.replace('-', ' ').toUpperCase()}
		</a>
	));

    return (
        <header>
            <img src={logo} alt="logo"/>
            <nav>
                {anchors}
            </nav>
        </header>
    )
}