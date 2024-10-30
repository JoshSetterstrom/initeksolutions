import './main.css';
import logo from './assets/initek.png';
import emailIco from './assets/email-ico.png';
import phoneIco from './assets/phone-ico.png';
import mapsIco from './assets/maps-ico.png';
import canvas from './assets/home_canvas.jpg';
import starFront from './assets/start_front.jpg';
import { useLayoutEffect, useState } from 'react';

export default function Main() {
	const [navRedirect, setNavRedirect] = useState(false);
	const [p1t, setp1t] = useState({opacity: 1, position: 'absolute', left: 0});
	const [p1i, setp1i] = useState({marginTop: 0});
	const [p2t, setp2t] = useState({opacity: 1, pointerEvents: 'none', left: '-30vw', transition: 'opacity 1s, left 1s'});
	const [p2d, setp2d] = useState({opacity: 0, top: '20vh', transition: 'opacity 1s, top 1s ease-in-out'});
	const [p3t, setp3t] = useState({opacity: 0, right: '-27vw', transition: 'opacity 1s, right 1s'});
	const [p4f, setp4f] = useState({opacity: 0, top: '5vh', transition: 'opacity 1s ease-in-out', position: 'absolute'})

	const [servicesPage, setServicesPage] = useState(0);

	const sections = ['home', 'about us', 'our services', 'contact us'];



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
			{anchor.toUpperCase()}
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
				<section id='home' style={{justifyContent: 'center', alignItems: 'center'}}>
					<div className='img-container' style={{width: '80vw', height: '70vh', backgroundColor: 'black', borderRadius: 30, overflow: 'hidden'}}>
						<div className='gradient top-light' style={{width: '80vw'}}/>
						<div className='gradient bot' style={{width: '80vw'}}/>
						<div className='gradient left'/>
						<img id='page1-img' src={canvas} style={{...p1i, borderRadius: 30, width: 2000, height: '90vh'}} alt="canvas"/>
					</div>
					<div className='page-content left' style={p1t}>
						<h2 id='title-logo'>INITEK SOLUTIONS</h2>
						<p id='title-p'>Providing a wide range of voice, data, and networking solutions for businesses of all sizes, aiming to deliver cost-effective and efficient options to meet your communication and networking needs.</p>
						<button
							onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}
						>
							Book a consultation
						</button>
					</div>
				</section>

				<section id='about us'>
					<div style={{display: 'flex', width: '90vw', margin: '140px 10vw', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
						<div style={{height: '90%', width: '50%', border: '1px solid #144283'}}>Image here</div>
						<div style={{width: '50%', textAlign: 'end', marginLeft: 30}}>
							<h2 style={{}}>We provide innovative ideas to increase proficiency by catering to your business' operational demands</h2>
							<p style={{fontSize: 20}}>
								Our technicians are knowledgeable and experienced with installation and troubleshooting the industry's leading technology and products. 
								Providing efficient and effective voice and data solutions to your organization is crucial in today's society.
							</p>
						</div>
					</div>
				</section>

				<section id='our services'>
					<div style={{display: 'flex', width: '90vw', margin: '140px 11vw', justifyContent: 'center', backgroundColor: '#000812', borderRadius: 10}}>
						<div className='item-box'>
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
						</div>
						<div className='item-box'>
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
						</div>
						<div className='item-box'>
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
					</div>
				</section>

				<section id='contact us'>
					<div style={{display: 'flex', width: '90vw', margin: '140px 10vw', justifyContent: 'center'}}>
						<div style={{display: 'flex', flexDirection: 'column', width: '36vw', margin: 40}}>
							<h2 style={{width: 600, marginTop: 0, fontSize: 32}}>Book an appointment with us today</h2>
							<p style={{width: 600, fontSize: 20, margin: 0, marginBottom: 30, color: '#6C9ADA'}}>If you have any questions, feel free to email or give us a call.</p>
							<form style={{display: 'flex', flexWrap: 'wrap'}}>
								<div className='form-container'>
									<label className='formlabel' for="name">Full Name</label><br/>
									<input className='forminput' type='text' id='name' name='name'/>
								</div>
								<div className='form-container'>
									<label className='formlabel' for="phone">Phone</label><br/>
									<input className='forminput' type='text' id='phone' name='name'/>
								</div>
								<div className='form-container'>
									<label className='formlabel' for="company_name">Company Name</label><br/>
									<input className='forminput' type='text' id='company_name' name='company_name'/>
								</div>
								<div className='form-container'>
									<label className='formlabel' for="email">Email Address</label><br/>
									<input className='forminput' type='text' id='email' name='email'/>
								</div>
								<div className='form-container'>
									<label className='formlabel' for="notes">Additional Notes</label><br/>
									<textarea className='forminput large' type='text' id='notes' name='notes'/>
								</div>
							</form>
							<div style={{display: 'flex', justifyContent: 'flex-end'}}>
								<button style={{marginTop: 12, marginRight: 40, width: 200, lineHeight: 1.2}}>Submit</button>
							</div>
						</div>
						<div className='contact-info'>
							<div style={{margin: 20, fontSize: 20, marginBottom: 40}}>
								<div style={{display: 'flex', marginBottom: 10, lineHeight: 1.5}}>
									<img src={emailIco} height={30}/>
									<div style={{height: 20, width: 2, backgroundColor: 'white', margin: '5px 20px'}}/>
									Email us
								</div>
								ContactUs@initeksolutions.com
							</div>
							<div style={{margin: 20, fontSize: 20, marginBottom: 40}}>
								<div style={{display: 'flex', marginBottom: 10, lineHeight: 1.5}}>
									<img src={phoneIco} height={30}/>
									<div style={{height: 20, width: 2, backgroundColor: 'white', margin: '5px 20px'}}></div>
									Call us
								</div>
								(604)-123-1234
							</div>
							<div style={{margin: 20, fontSize: 20, marginBottom: 40}}>
								<div style={{display: 'flex', marginBottom: 10, lineHeight: 1.5}}>
									<img src={mapsIco} height={30}/>
									<div style={{height: 20, width: 2, backgroundColor: 'white', margin: '5px 20px'}}></div>
									Find us
								</div>
								123 Fake Street, Vancouver, BC
							</div>
						</div>

					</div>
				</section>
			</main>
		</>
	);
};