import './main.css';
import logo from './assets/initek.png';
import canvas from './assets/home_canvas.jpg';
import { useLayoutEffect, useState } from 'react';

export default function Main() {
	const [navRedirect, setNavRedirect] = useState(false);
	const [p1t, setp1t] = useState({opacity: 1, position: 'absolute'});
	const [p1i, setp1i] = useState({marginTop: 0});
	const [p2t, setp2t] = useState({opacity: 1, pointerEvents: 'none', left: '-30vw', transition: 'opacity 1s, left 1s'});
	const [p2d, setp2d] = useState({opacity: 0, top: '20vh', transition: 'opacity 1s, top 1s ease-in-out'});
	const [p3t, setp3t] = useState({opacity: 0, right: '-27vw', transition: 'opacity 1s, right 1s'});
	const [p4f, setp4f] = useState({opacity: 0, top: '5vh', transition: 'opacity 1s ease-in-out', position: 'absolute'})

	const [servicesPage, setServicesPage] = useState(0);

	const sections = ['home', 'about us', 'services', 'contact'];



	function handleServicePageChange(index) {
		if (servicesPage === index) return;
		if ([...document.getElementsByClassName('fade')].length) return;

		const bullet = document.getElementById(`nav-bullet-${index}`);
		const selected = document.getElementsByClassName('nav-bullet selected')?.[0];

		bullet.classList.toggle('selected');
		selected.classList.toggle('selected');

		const page = document.getElementById('service-page');

		page.classList.toggle('fade');

		setTimeout(() => {
			setServicesPage(index);
		
			page.classList.toggle('fade');
		}, 200);
	};
	
	useLayoutEffect(() => {
		const handleCanvasScroll = e => {
			const position = window.scrollY/window.innerHeight;

			console.log(position)

			if (position > 0 && position < 1) handlePage1Animations(position);
			if (position > 1 && position < 2) handlePage2Animations(position);
			if (position > 2 && position < 3) handlePage3Animations();
			if (position > 3) handlePage4Animations();
		}

		document.addEventListener('scroll', handleCanvasScroll);

		return () => {
			document.removeEventListener('scroll', handleCanvasScroll);
		}
	}, []);

	function handlePage1Animations() {
		const position = window.scrollY/window.innerHeight;

		const opacity = 1-position*2;
		const marginTop = window.scrollY * -0.3;

		console.log(position)

		setp1i(p1i => ({...p1i, marginTop}));
		setp1t(p1t => ({...p1t, opacity}));
		setp2d(p2d => ({...p2d, opacity: 0, top: '20vh', transition: 'opacity 0.2s, top 0.2s'}));
		setp2t(p2t => ({...p2t, opacity: 0, left: '-30vw', transition: 'opacity 0.2s, left 0.2s'}));
	};

	function handlePage2Animations() {
		setp3t(p3t => ({...p3t, opacity: 0, right: '-27vw'}));
		setp2d(p2d => ({...p2d, opacity: 1, top: '10vh', transition: 'opacity 1s, top 1s'}));
		setp2t(p2t => ({...p2t, opacity: 1, left: '-24vw', transition: 'opacity 1s, left 1s'}));
	};

	function handlePage3Animations() {
		setp2d(p2d => ({...p2d, opacity: 1, top: '10vh', transition: 'opacity 1s, top 1s'}));
		setp2t(p2t => ({...p2t, opacity: 0, left: '-30vw'}));
		setp3t(p3t => ({...p3t, opacity: 1, right: '-21vw', transition: 'opacity 1s, right 1s'}));
		setp4f(p4f => ({...p4f, opacity: 0}));
	};
	
	function handlePage4Animations() {
		setp2d(p2d => ({...p2d, opacity: 0, top: '20vh', transition: 'opacity 0.2s, top 0.2s'}));
		setp3t(p3t => ({...p3t, opacity: 0, right: '-27vw', transition: 'opacity 0.2s, right 0.2s'}));
		setp4f(p4f => ({...p4f, opacity: 1}));
	};

	const anchors = sections.map((anchor, i) => (
		<a
			key={`a-${anchor}`}
			target='_blank'
			onClick={() => {document.getElementById(anchor)?.scrollIntoView({behavior: 'smooth'})}}
		>
			{anchor}
		</a>
	));

	const servicePages = [
		<div id='service-page'>
			<div style={{fontSize: 30}}>
				Business Phone Systems
			</div>
			<br/>
			<div style={{fontSize: 18}}>
				Initek Solutions is diversified in troubleshooting, programming and installing any of the following systems, to include voicemail and mail systems.
			</div>
			<ul style={{fontSize: 16}}>
				<li>Nortel BCM</li>
				<li>Nortel Norstar</li>
				<li>Meridian Option 11c</li>
				<li>Nortel Call Pilot</li>
				<li>Avaya IP Office</li>
				<li>VoIP phone sets</li>
				<li>Desk phones, cordless, conference phones and headsets</li>
			</ul>
			<div style={{fontSize: 18}}>
				If you require assistance in choosing the best phone system to support your business, contact us at your earliest convenience.
			</div>
		</div>,
		<div id='service-page'>
			<div style={{fontSize: 30}}>
				Cable/Fiber Installation
			</div>
			<br/>
			<div style={{fontSize: 18}}>
				Initek Solutions provides installation, repair and testing of all the following:
			</div>

			<ul style={{fontSize: 16}}>
				<li>
				Voice/ Data runs: cat5e, cat6, cat6a or any voice/data cabling (FT6 or FT4 rated, plenum, indoor, or outdoor) as per regulations.
				</li>
				<li>
				Fiber, small to large scale installation (multimode 50/125, 62.5/125, single mode, SC, LC, ST connectors, indoor or outdoor).
				</li>
				<li>
				Coaxial cabling (rg6, rg59).
				</li>
			</ul>
		</div>,
		<div id='service-page'>
			<div style={{fontSize: 30, marginBottom: 40}}>
				Networking & Testing
			</div>
			<ul style={{fontSize: 16}}>
				<li>Wireless solutions (routers, access points, modems)</li>
				<li>Patch panels and Switches</li>
				<li>Extend and terminate network services</li>
				<li>Network Racks</li>
				<li>Testing for latency and multi-pair connectivity</li>
				<li>Providing and installing UPS (Uninterrupted Power Supply)</li>
			</ul>
		</div>
	];

	const bullets = new Array(servicePages.length).fill('').map((_, index) => (
		<div 
			className={index === 0 ? 'nav-bullet selected' : 'nav-bullet'}
			id={`nav-bullet-${index}`}
			onClick={() => handleServicePageChange(index)}
		/>
	));

	return (
		<>
			<header>
				<img src={logo} alt="logo"/>
				<nav>
					{anchors}	
				</nav>
			</header>

			<main>
				<section id='home'>
					<div className='img-container' style={{width: '90vw', height: '70vh', backgroundColor: 'blue', borderRadius: 30, margin: '140px 10vw', overflow: 'hidden'}}>
						<div className='gradient top-light' style={{width: '80vw'}}/>
						<div className='gradient bot' style={{width: '80vw'}}/>
						<div className='gradient left'/>
						<img id='page1-img' src={canvas} style={{...p1i, borderRadius: 30, width: '90vw', height: '90vh'}} alt="canvas"/>
					</div>
					<div className='page-content left' style={p1t}>
						<h2 id='title-logo'>INITEK SOLUTIONS</h2>
						<p id='title-p'>Providing a wide range of voice, data, and networking solutions for businesses of all sizes, aiming to deliver cost-effective and efficient options to meet your communication and networking needs.</p>
						<a
							target='_blank'
							onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}
						>
							Book a consultation
						</a>
					</div>
				</section>

				<section id='about us'>
					<div style={{width: '90vw', margin: '140px 10vw'}}>
						<p style={{fontSize: 48, fontWeight: 'bold'}}>
							At Initek Solutions we provide innovative ideas to increase proficiency by catering to your business' operational demands. 
							{/* Our technicians are knowledgeable and experienced with installation and troubleshooting the industry's leading technology and products. Providing efficient and effective voice and data solutions to your organization is crucial in today's society.  */}
							<br/><br/>
							{/* Contact our service professionals to discuss how Initek can provide better solutions for your organization.						 */}
						</p>
						<div style={{display: 'flex', flexDirection: 'row'}}>
							<div style={{height: 400, width: 400, border: '1px solid #2f72d0', margin: 20}}>

							</div>
							<div style={{height: 400, width: 400, border: '1px solid #2f72d0', margin: 20}}>

							</div>
							<div style={{height: 400, width: 400, border: '1px solid #2f72d0', margin: 20}}>

							</div>
						</div>
					</div>
				</section>

				{/* <section id='services' style={{height: '150vh'}}>
					<div className='page-content center-right' style={p3t}>
						<div className='container-content'>
							{servicePages[servicesPage]}
							<div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}>
								{bullets}
							</div>
						</div>
					</div>
				</section>

				<section id='contact'>
					<div className='page-content center' style={p4f}>
						<h2 style={{textAlign: 'center'}}>Contact us</h2>
						<form>
							<input className='forminput' placeholder='Your Name' type='text' id='name' name='name'/><br/>
							<input className='forminput' placeholder='Company Name (optional)' type='text' id='company_name' name='company_name'/><br/>
							<input className='forminput' placeholder="Referral's Name (optional)" type='text' id='referral' name='referral'/><br/>
							<input className='forminput' placeholder='Email' type='text' id='email' name='email'/><br/>
							<input className='forminput' placeholder='Service / Product Requesting' type='text' id='service' name='service'/><br/>
							<textarea className='forminput large' placeholder='Additional Notes' type='text' id='notes' name='notes'/>
						</form>
					</div>
				</section> */}
			</main>
		</>
	);
};