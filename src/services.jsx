import phoneIco from './assets/phone-ico.png';


export default function Services() {
    return (
        <section id='our-services'>
            <div style={{display: 'flex', width: '90vw', margin: '140px 11vw', justifyContent: 'center'}}>
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
                        If you require assistance in choosing the best phone system to support your business, <a style={{color: '#144283', cursor: 'pointer'}}>contact us</a> at your earliest convenience.
                    </div>
                </div>
                {/* <div className='item-box'>
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
                </div> */}
            </div>
        </section>
    )
}