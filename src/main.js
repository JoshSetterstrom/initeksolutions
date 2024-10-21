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
	const [sliderPos, setSliderPos] = useState('400px');
	const [canvasMargin, setCanvasMargin] = useState({marginTop: 0, left: 0});
	const [canvasBackground, setCanvasBackground] = useState(90);
	const [page1textarea, setPage1textarea] = useState(1);
	const [page2textarea, setPage2textarea] = useState({opacity: 0, left: -30});
	const [image1_3, setImage1_3] = useState({marginTop: 0});
	const [servicesPage, setServicesPage] = useState(2);

	const bodyRef = useRef(null);
	const sliderRef = useRef(null);

	const servicePages = [
		<div style={{marginRight: 30, minHeight: 460, maxHeight: 460}}>
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
		<div style={{marginRight: 30, minHeight: 460, maxHeight: 460}}>
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
		<div style={{marginRight: 30, minHeight: 460, maxHeight: 460}}>
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
				className='nav-bullet'
				id={`nav-bullet-${index}`}
				onClick={() => setServicesPage(index)}
			/>
		))		
	};

	function handleCanvasMouseMove(e) {
		// setCanvasMargin(canvasMargin => ({marginTop: canvasMargin.marginTop + e.movementY*0.02, left: canvasMargin.left + e.movementX*0.02}))
	}

	const contents = [
		{
			anchor: "Home",
			render: (
				<>
					<div className='canvas-cover top'/>
					<div className='canvas-cover bot' style={{background: `linear-gradient(180deg, rgba(255,255,255,0) 27%, rgba(0,0,0,1) ${canvasBackground}%)`}}/>
					<div className='canvas-cover left'/>
					<img className='canvas-img' src={canvas} style={{...canvasMargin}} alt="canvas" onMouseMove={handleCanvasMouseMove}/>
					<div className='textarea col' style={{opacity: page1textarea}}>
						<div className='home-title'>INITEK SOLUTIONS</div>
						<div className='home-content'>Providing a wide range of voice, data, and networking solutions for businesses of all sizes, aiming to deliver cost-effective and efficient options to meet your communication and networking needs.</div>
						<div className='book-button'>Book a consultation</div>
					</div>
				</>
			)
		},
		{
			anchor: "About us",
			render: (
				<div className='textarea col' style={{textAlign: 'end'}}>
					<div style={{...page2textarea, display: 'flex', flexDirection: 'column', position: 'relative', width: '50vw'}}>
						<div style={{marginBottom: 30, fontSize: 40}}>About us</div>
						<div style={{marginLeft: 130, fontSize: 18, whiteSpace: 'pre-line'}}>
							At Initek Solutions we provide innovative ideas to increase proficiency by catering to your business' operational demands. Our technicians are knowledgeable and experienced with installation and troubleshooting the industry's leading technology and products. Providing efficient and effective voice and data solutions to your organization is crucial in today's society. 
							<br/><br/>
							Contact our service professionals to discuss how Initek can provide better solutions for your organization.						
						</div>
					</div>
				</div>
			)
		},
		{
			anchor: "Services",
			render: (
				<div style={{width: '100vw', display: 'flex', flexDirection: 'row'}}>
					<div style={{width: '100vw', height: '100vh'}}>
						{createGradient('page3gradientop', 'top', '#000000 5%', '#00000000 30%', {width: '100vw'})}
						{createGradient('page3gradienbottom', 'bottom', '#000000 5%', '#00000000 30%', {width: '70vw'})}
						<img src={starFront} id='3-image1' alt='3-image1' style={{...image1_3, display: 'flex', position: 'absolute', height: '100vh', opacity: 1, width: 2000}}/>
						<img src={startBack} id='3-image2' alt='3-image2' style={{display: 'flex', position: 'absolute', height: '100vh', opacity: 0.5, width: 'auto'}}/>
					</div>
					{/* <div style={{display: 'flex', position: 'absolute', zIndex: 1, marginTop: '50vh', left: '20vw', fontSize: 40}}>Services</div> */}
					{createGradient('page3gradienright', 'right', '#000000 15%', '#00000000 100%', {height: '100vh', width: 300, position: 'relative'}, '270deg')}
					<div style={{zIndex: 1, width: '60vw', height: '100vh', backgroundColor: 'black', borderRadius: 10, justifyContent: 'center', alignContent: 'center', paddingRight: 40, paddingLeft: 40, minWidth: 400}}>
						{servicePages[servicesPage]}
						<div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}>
							{bullets()}
						</div>
					</div>
				</div>
			)
		},
		{
			anchor: "Contact",
			render: (
				<>
					{/* Contact */}
				</>
			)
		}
	];
	
	
	useLayoutEffect(() => {
		const anchors = document.getElementsByClassName('anchors')[0];
		const vh = document.getElementsByClassName('bodyitem')[0];
		const windowMaxScroll = bodyRef.current.clientHeight - vh.clientHeight;
		
		const handleAnchorScroll = () => {
			setSliderPos(`${(390 - (anchors.clientWidth - 130) * (window.scrollY / windowMaxScroll))}px`);
		};

		const handleCanvasScroll = e => {
			const position = window.scrollY/window.innerHeight

			setCanvasMargin(canvasMargin => ({...canvasMargin, marginTop: window.scrollY * -0.3}));
			setCanvasBackground(90 - (position*0.22)*100);
			setPage1textarea(1-position*1.6);

			if (position > 0.5 && position < 1) {
				const change = (position-0.5)*2;
				
				setPage2textarea(page2textarea => ({...page2textarea, opacity: change}))
			}

			if (position > 1.2) {
				const change = 1-(position-1.2)/(1.6-1.2)

				setCanvasMargin(canvasMargin => ({...canvasMargin, left: 0}))
				setPage2textarea(page2textarea => ({...page2textarea, opacity: change}))
			}

			if (position > 1.2) {
				setImage1_3({marginTop: 500-position*250})
			}

		}

		document.addEventListener('scroll', handleAnchorScroll);
		document.addEventListener('scroll', handleCanvasScroll);

		return () => {
			document.removeEventListener('scroll', handleAnchorScroll);
			document.removeEventListener('scroll', handleCanvasScroll);
		}
	}, []);

	const createAnchor = (anchor, i) => {
		return (
			<div 
				className='anchor'
				onClick={() => {
					const vh = document.getElementsByClassName('bodyitem')[0];

					window.scrollTo({top: vh.clientHeight*i, behavior: 'smooth'})
				}}
				key={anchor+i}
				id={anchor}
			>
				{anchor}
			</div>
		);
	};

	const renderPages = contents.map((content, i) => (
		<div className='bodyitem' key={content.anchor}>
			{content.render}
		</div>
	));

	return (
		<>
			<div className="header">
				<img src={logo} alt="logo"/>
				<div className='anchors'>
					{contents.map((content, i) => createAnchor(content.anchor, i))}	
					<div className='slider' ref={sliderRef} style={{marginRight: sliderPos}}/>
				</div>
			</div>

			<div className='body' ref={bodyRef}>
				<div className='divider'/>
				{renderPages}
			</div>
		</>
	)
}