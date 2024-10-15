import './main.css';
import logo from './assets/initek.png';
import canvas from './assets/home_canvas.jpg';
import starFront from './assets/start_front.jpg';
import startBack from './assets/start_back.jpg';
import { useLayoutEffect, useRef, useState } from 'react';


export default function Main() {
	const [sliderPos, setSliderPos] = useState('400px');
	const [canvasMargin, setCanvasMargin] = useState(0);
	const [canvasBackground, setCanvasBackground] = useState(90);
	const [page1textarea, setPage1textarea] = useState(1);
	const [page2textarea, setPage2textarea] = useState({opacity: 0, left: -160});

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
						<div style={{marginLeft: 130, fontSize: 22, whiteSpace: 'pre-line'}}>
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
				<div 
					// style={{background: 'radial-gradient(circle, rgba(255,255,255,1) 66%, rgba(3,14,34,0) 100%)'}}
				>
				<img src={startBack} style={{display: 'flex', position: 'absolute', height: '120vh', opacity: 1}}/>
				<img src={starFront} style={{opacity: 0.2}}/>
				{/* Services */}
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

			setCanvasMargin(window.scrollY * -0.3);
			setCanvasBackground(90 - (position*0.22)*100);
			setPage1textarea(1-position*1.6);

			if (position > 0.5 && position < 1) {
				const change = (position-0.5)*2;
				const left = -160+change*140;
				
				setPage2textarea(page2textarea => ({...page2textarea, opacity: change, left: left > -60 ? -60 : left}))
			}

			if (position > 1) {
				const change = (position-1.5)/-0.5;
				const left = -160+change*140;

				setPage2textarea(page2textarea => ({...page2textarea, opacity: change, left: left > -60 ? -60 : left}))
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