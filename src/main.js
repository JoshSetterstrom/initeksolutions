import './main.css';
import logo from './assets/initekd.png';
import canvas from './assets/home_canvas.jpg';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';


export default function Main() {
	const [sliderPos, setSliderPos] = useState('530px');
	const [canvasMargin, setCanvasMargin] = useState(0);
	const [canvasBackground, setCanvasBackground] = useState(90)

	const bodyRef = useRef(null);
	const sliderRef = useRef(null);

	const contents = [
		{
			anchor: "Home",
			render: (
				<>
					<div className='canvas-cover top'/>
					<div className='canvas-cover bot' style={{background: `linear-gradient(180deg, rgba(255,255,255,0) 27%, rgba(0,0,0,1) ${canvasBackground}%)`}}/>
					<div className='canvas-cover left'/>
					<img className='canvas-img' src={canvas} style={{marginTop: `${canvasMargin}px`}} alt="canvas"/>
					<div className='textarea col'>
						<div className='home-title'>INITEK SOLUTIONS</div>
						<div className='home-content'>Providing a wide range of voice, data, and networking solutions for businesses of all sizes, we aim to deliver cost-effective and efficient options to meet your communication and networking needs.</div>
						<div style={{fontSize: 20, marginLeft: 140, marginTop: 40, color: "blue"}}>Book a consultation</div>
					</div>
				</>
			)
		},
		{
			anchor: "About us",
			render: (
				<>
				<div style={{backgroundColor: 'black'}}></div>
				Initek Solutions
					{/* <h2 style={{display: 'flex', justifyContent: 'center', margin: 0}}>Initek Solutions</h2> */}
					{/* <div style={{display: 'flex', justifyContent: 'space-between'}}>
						<p>We provide a wide range of voice, data, and networking solutions, for any sized business. Our goal is to provide cost effective and resourceful solutions for all your communications and networking demands.</p>
						<p>Our technicians understand that providing quality and effective service and support are essential in keeping our valued customers. Initek Solutions is diverse in providing support for nearly all systems and business demands.</p>
					</div> */}
				</>
			)
		},
		{
			anchor: "Services",
			render: (
				<>
				Services
					{/* <h2 style={{display: 'flex', justifyContent: 'center'}}>Services</h2> */}
					{/* <div style={{display: 'flex', justifyContent: 'space-between'}}>
						<div>
							<h3>Business Phone Systems</h3>
							<p>Initek Solutions is diversified in troubleshooting, programming and installing any of the following systems, to include voicemail and mail systems.</p>
							<p>Contact our staff for help in pairing your business demands with the right phone system.</p>
							<ol style={{listStyle: 'bullet'}}>
								<li>Avaya IP Office</li>
								<li>Meridian Option 11c</li>
								<li>Nortel Call Pilot</li>
								<li>Nortel BCM</li>
								<li>Nortel Norstar</li>
								<li>VoIP phone sets</li>
								<li>Desk phones, cordless, conference phones, and headsets</li>
							</ol>
						</div>
					</div> */}
				</>
			)
		},
		{
			anchor: "Contact",
			render: (
				<>
					Contact
				</>
			)
		},
		{
			anchor: "Consultation",
			render: (
				<>
					Consultation
				</>
			)
		},
	];
	
	
	useLayoutEffect(() => {
		const anchors = document.getElementsByClassName('anchors')[0];
		const vh = document.getElementsByClassName('bodyitem')[0];
		const windowMaxScroll = bodyRef.current.clientHeight - vh.clientHeight;

		let scrollY = window.scrollY;
		
		const handleAnchorScroll = () => {
			setSliderPos(`${(520 - (anchors.clientWidth - 130) * (window.scrollY / windowMaxScroll))}px`);
		};

		const handleCanvasScroll = e => {
			setCanvasMargin(window.scrollY * -0.3);
			setCanvasBackground(90 - ((window.scrollY/window.innerHeight)*0.22)*100)

			scrollY = window.scrollY;


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

	const header = (
		<div className="header">
			<img src={logo} alt="logo"/>
			<div className='anchors'>
				{contents.map((content, i) => createAnchor(content.anchor, i))}	
				<div className='slider' ref={sliderRef} style={{marginRight: sliderPos}}/>
			</div>
		</div>
	)
	

	const render = (
		<div className='body' ref={bodyRef}>
			{renderPages}
		</div>
	);

	return (
		<>
			{header}
			{render}
		</>
	)
}