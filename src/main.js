import './main.css';
import logo from './assets/initekd.png';
import vid from './assets/homestock.mp4';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';

const contents = [
	{
		anchor: "Home",
		render: (
			<video muted autoPlay loop>    
				{/* <source src={vid} type="video/mp4" />     */}
			</video> 
		)
	},
	{
		anchor: "About us",
		render: (
			<>
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

export default function Main() {
	const [sliderPos, setSliderPos] = useState('530px');
	const bodyRef = useRef(null);
	const sliderRef = useRef(null);
	
	useLayoutEffect(() => {
		const anchors = document.getElementsByClassName('anchors')[0];
		const vh = document.getElementsByClassName('bodyitem')[0];
		const windowMaxScroll = bodyRef.current.clientHeight - vh.clientHeight;
		
		const handleScroll = () => {
			setSliderPos(`${(530 - (anchors.clientWidth - 120) * (window.scrollY / windowMaxScroll))}px`)
		}

		document.addEventListener('scroll', handleScroll)

		return () => document.removeEventListener('scroll', handleScroll)
	}, [])

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

	const renderPages = contents.map(content => (
		<div className='bodyitem' style={{height: "100vh"}} key={content.anchor}>
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