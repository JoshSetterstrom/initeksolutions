import './main.css';
import logo from './assets/initek.png';
import canvas from './assets/home_canvas.jpg';
import starFront from './assets/start_front.jpg';
import startBack from './assets/start_back.jpg';
import { useLayoutEffect, useRef, useState } from 'react';


function createGradient(id, direction, color1, color2, style={}, degree=null) {
	const directions = {
		top: ['180deg', {height: '100vh', ...style}],
		right: ['270deg', {width: '100vw', ...style}],
		bottom: ['0deg', {height: '100vh', ...style}],
		left: ['90deg', {width: '100vw', ...style}]
	}

	const ele = <div 
		className='gradient' 
		id={id}
		style={{
			...directions[direction][1],
			background: `linear-gradient(${degree || directions[direction][0]}, ${color1}, ${color2})`
		}}
	/>
	
	return ele
}


export default function Main() {
	const [page1, setPage1] = useState({img: {marginTop: 0}, text: {opacity: 1}});

	const [p2t, setp2t] = useState({opacity: 0});
	const [p2d, setp2d] = useState({opacity: 1, top: '50vh'})

	const [page2, setPage2] = useState({text: {marginTop: 0, opacity: 0}});
	const [page3, setPage3] = useState({img: {marginTop: -30}, text: {opacity: 0}});

	const [page2textarea, setPage2textarea] = useState({opacity: 0, left: -30});
	const [image1_3, setImage1_3] = useState({marginTop: 0});
	const [servicesPage, setServicesPage] = useState(0);

	const servicePages = [
		<div id='service-page' style={{marginRight: 30, minHeight: 460, maxHeight: 460}}>
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
		<div id='service-page' style={{marginRight: 30, minHeight: 460, maxHeight: 460}}>
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
		<div id='service-page' style={{marginRight: 30, minHeight: 460, maxHeight: 460}}>
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
	]

	function bullets() {
		return new Array(servicePages.length).fill('').map((_, index) => (
			<div 
				className={index === 0 ? 'nav-bullet selected' : 'nav-bullet'}
				id={`nav-bullet-${index}`}
				onClick={() => {
					handleServicePageChange(index)
				}}
			/>
		))		
	};

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
		}, 200)
	}

	const contents = [
		{
			anchor: "home",
			render: (
				<section id='home'>
					<div className='canvas-cover top'/>
					<div className='canvas-cover bot'/>
					<div className='canvas-cover left'/>
					<img src={canvas} style={{...page1.img}} alt="canvas"/>
					<div className='textarea col' style={{...page1.text}}>
						<div className='home-title'>INITEK SOLUTIONS</div>
						<div className='home-content'>Providing a wide range of voice, data, and networking solutions for businesses of all sizes, aiming to deliver cost-effective and efficient options to meet your communication and networking needs.</div>
						<div className='book-button'>Book a consultation</div>
					</div>
				</section>
			)
		},
		{
			anchor: "aboutus",
			render: (
				<section id='aboutus'>
					{/* <div className='divider'/> */}
					<div style={{...page2textarea, display: 'flex', flexDirection: 'column', position: 'relative', width: '50vw'}}>
						<div style={{marginBottom: 30, fontSize: 40}}>About us</div>
						<div style={{marginLeft: 130, fontSize: 18, whiteSpace: 'pre-line'}}>
							At Initek Solutions we provide innovative ideas to increase proficiency by catering to your business' operational demands. Our technicians are knowledgeable and experienced with installation and troubleshooting the industry's leading technology and products. Providing efficient and effective voice and data solutions to your organization is crucial in today's society. 
							<br/><br/>
							Contact our service professionals to discuss how Initek can provide better solutions for your organization.						
						</div>
					</div>
				</section>
			)
		},
		{
			anchor: "services",
			render: (
				<section id='services'>
					<div style={{width: '100vw', height: '100vh'}}>
						{createGradient('page3gradientop', 'top', '#000000 5%', '#00000000 30%', {width: '100vw'})}
						{createGradient('page3gradienbottom', 'bottom', '#000000 5%', '#00000000 30%', {width: '70vw'})}
						<img src={starFront} id='3-image1' alt='3-image1' style={{...image1_3, display: 'flex', position: 'absolute', height: '100vh', opacity: 1, width: 2000}}/>
						<img src={startBack} id='3-image2' alt='3-image2' style={{display: 'flex', position: 'absolute', height: '100vh', opacity: 0.5, width: 'auto'}}/>
					</div>
					{/* <div style={{display: 'flex', position: 'absolute', zIndex: 1, marginTop: '50vh', left: '20vw', fontSize: 40}}>Services</div> */}
					{createGradient('page3gradienright', 'right', '#000000 15%', '#00000000 100%', {height: '100vh', width: 300, position: 'relative'}, '270deg')}
					<div style={{zIndex: 1, width: '60vw', height: '100vh', backgroundColor: 'black', borderRadius: 10, justifyContent: 'center', alignContent: 'center', paddingRight: 40, paddingLeft: 40, minWidth: 400}}>
						<div style={{...page3}}>
							{servicePages[servicesPage]}
							<div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}>
								{bullets()}
							</div>
						</div>
					</div>
				</section>
			)
		},
		{
			anchor: "contact",
			render: (
				<section id='contact'>
					<h2>Consultation</h2>
					<form>
						<input className='forminput' placeholder='Your Name' type='text' id='name' name='name'/><br/>
						<input className='forminput' placeholder='Company Name (optional)' type='text' id='company_name' name='company_name'/><br/>
						<input className='forminput' placeholder="Referral's Name (optional)" type='text' id='referral' name='referral'/><br/>
						<input className='forminput' placeholder='Email' type='text' id='email' name='email'/><br/>
						<input className='forminput' placeholder='Service / Product Requesting' type='text' id='service' name='service'/><br/>
						<textarea className='forminput large' placeholder='Additional Notes' type='text' id='notes' name='notes'/>
					</form>
				</section>
			)
		}
	];
	
	
	useLayoutEffect(() => {
		const handleCanvasScroll = e => {
			const position = window.scrollY/window.innerHeight

			if (position < 0.5) handlePage1Animations(position);
			if (position > 0.5 && position < 1) handlePage2Animations(position);
			if (position > 1) handlePage3Animations(position)
			// if (position > 1.2 && position < 1.8) handlePage3Animations(position);
			// if (position > 2) handlePage4Animations(position)
		}

		document.addEventListener('scroll', handleCanvasScroll);

		return () => {
			document.removeEventListener('scroll', handleCanvasScroll);
		}
	}, []);

	const anchors = contents.map((anchor, i) => (
		<a
			key={`a-${anchor.anchor}`}
			target='_blank'
			onClick={() => {document.getElementById(anchor.anchor)?.scrollIntoView({behavior: 'smooth'})}}
		>
			{anchor.anchor}
		</a>
	));

	function handlePage1Animations(position) {
		const opacity = 1-position*1.6;
		const marginTop = window.scrollY * -0.3;

		setPage1(page1 => ({...page1, text: {opacity}, img: {...page1.img, marginTop}}));
	};

	function handlePage2Animations(position) {
		const opacity = (position-0.5)*2;

		console.log(10 + opacity)

		setp2d(p2d => ({
			...p2d,
			// top: '20vh'
		}))

		// setPage2(page2 => ({...page2, text: {opacity}}));
	};

	function handlePage3Animations(position) {

	}

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
					<div className='gradient top-light'/>
					<div className='gradient bot'/>
					<div className='gradient left'/>
					<img id='page1-img' src={canvas} style={{...page1.img}} alt="canvas"/>
					<div className='page-content left' style={{...page1.text}}>
						<h2 id='title-logo'>INITEK SOLUTIONS</h2>
						<p id='title-p'>Providing a wide range of voice, data, and networking solutions for businesses of all sizes, aiming to deliver cost-effective and efficient options to meet your communication and networking needs.</p>
						<a
							target='_blank'
							onClick={() => {document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}}
						>
							Book a consultation
						</a>
					</div>
				</section>

				<section id='aboutus'>
					{/* <div className='page-content center-left'>
						<h2>About us</h2>
						<p>
							At Initek Solutions we provide innovative ideas to increase proficiency by catering to your business' operational demands. Our technicians are knowledgeable and experienced with installation and troubleshooting the industry's leading technology and products. Providing efficient and effective voice and data solutions to your organization is crucial in today's society. 
							<br/><br/>
							Contact our service professionals to discuss how Initek can provide better solutions for your organization.						
						</p>
					</div> */}
					<div className='divider' style={{...p2d}}/>
				</section>

				<section id='services'>
					{/* <img src={starFront} id='page3-img1' alt='page3-img1' style={{...page3.img, opacity: 1, height: '70vh'}}/>
					<img src={starFront} alt='page3-img2' style={{opacity: 0.5, transform: 'rotate(180deg)'}}/>
					<div className='gradient top' style={{height: 300}}/>
					<div className='gradient bot2'/>
					<div className='gradient right' style={{right: 680, width: 300}}/>
					<div className='page-content right'>
						<div className='container'/>
						<div className='container-content' style={{...page3.text}}>
							{servicePages[servicesPage]}
							<div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}>
								{bullets()}
							</div>
						</div>
						<div className='divider' style={{...page3.text, right: 680, position: 'absolute', top: '10vh'}}/>
					</div> */}
				</section>

				<section id='contact'>
					{/* <h2>Consultation</h2>
					<form>
						<input className='forminput' placeholder='Your Name' type='text' id='name' name='name'/><br/>
						<input className='forminput' placeholder='Company Name (optional)' type='text' id='company_name' name='company_name'/><br/>
						<input className='forminput' placeholder="Referral's Name (optional)" type='text' id='referral' name='referral'/><br/>
						<input className='forminput' placeholder='Email' type='text' id='email' name='email'/><br/>
						<input className='forminput' placeholder='Service / Product Requesting' type='text' id='service' name='service'/><br/>
						<textarea className='forminput large' placeholder='Additional Notes' type='text' id='notes' name='notes'/>
					</form> */}
				</section>
			</main>
		</>
	)
}