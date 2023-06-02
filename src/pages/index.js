import React, {useRef, useState, useEffect, forwardRef} from 'react';
import Link from 'next/link'
import {Footer, MenuComponent, SimacroLogoComponent} from '@/lib/CommonComponent'


const MainPage  = () => {
    const joinPos = useRef(null)
    const page1Pos = useRef(null)
    const page2Pos = useRef(null)
    const page3Pos = useRef(null)
    const nameInput = useRef(null)
    const emailInput = useRef(null)
    const [nameBlank, setNameBlank] = useState(false);
    const [emailBlank, setEmailBlank] = useState(false);
    const [isScrollStop, setIsScrollStop] = useState(false);
    const commonRef = useRef(null)
    let timer = null;



    useEffect( () => {

        window.addEventListener('scroll', ScrollMove);
        return () => {
            window.removeEventListener('scroll', ScrollMove);
        }
    },[])
    const ScrollMove = () => {
        setIsScrollStop(false)
        if(timer !== null) {
            clearTimeout(timer);
        }
        timer = setTimeout(function() {
            setIsScrollStop(true)
        }, 1000);
    }

    const removeScrollEvent = () => {
        window.removeEventListener('scroll', commonRef.topbuttonFnc);
    }

    const scrollToPage = (page) => {
        let target
        if(page === 'page1Pos'){
            target = page1Pos
        }else if(page === 'page2Pos'){
            target = page2Pos
        }else if(page === 'page3Pos'){
            target = page3Pos
        }else if(page === 'joinPos'){
            target = joinPos
        }

        window.scrollTo({
            top:parseInt(target.current.offsetTop),
            behavior:'smooth'
        })
    }

    const submitFnc = () => {
        let tempe = emailInput.current.value.replaceAll(" ", "");
        if(tempe === ""){ setEmailBlank(true)}
        else{
            setEmailBlank(false)
        }
        let tempn = nameInput.current.value.replaceAll(" ", "");
        if(tempn === ""){ setNameBlank(true)}
        else{
            setNameBlank(false)
        }
    }

    return(
        <>
            <MenuComponent isMain={true} removeScrollEvent={removeScrollEvent} />

            <SimacroLogoComponent/>

            <div className="adPage">
                <div className="adPage__img-box">
                    <video autoPlay={true} muted={true} loop={true} src="/video/230415_video_web_home_v2.mp4"
                           disablePictureInPicture
                           controlsList="nodownload"
                           id="myVideo" />
                    {/*<img src={img_gif} alt=""/>*/}
                    <div className="adPage__img-box__titleBox">
                        <div className="square"><span>■</span><br/></div>

                        <div className="adPage__img-box__titleBox__firstLine">
                            ProcessMetaverse<sup>TM</sup>
                        </div>
                        <div className="adPage__img-box__titleBox__secondLine">
                            AR/XR-powered process digital twin solution
                        </div>
                    </div>
                    <div className="adPage__img-box__arrow" onClick={() => {
                        if(window.screen.width < 640){
                            scrollToPage('joinPos')
                        }else{
                            scrollToPage('page1Pos')
                        }
                    }}>
                        <i className="fal fa-chevron-down"></i>
                    </div>
                </div>
                <div className='adPage__loginBox' ref={joinPos}>
                    <div className='adPage__loginBox__title'>
                        <div className='adPage__loginBox__title__first'>
                            JOIN US
                        </div>
                        <div className='adPage__loginBox__title__second'>
                            Be the first to learn about our innovative tech solution
                        </div>
                    </div>
                    <div className='adPage__loginBox__inputBox'>
                        <input ref={nameInput} placeholder='Your name' />
                        {nameBlank ? <span className="warn-msg">please write your name</span> : <span className="warn-msg"> <br/> </span>}
                        <input ref={emailInput} placeholder='Email address' />
                        {emailBlank ? <span className="warn-msg">please write your email</span> : <span className="warn-msg"> <br/> </span>}
                    </div>
                    <div className='adPage__loginBox__submit' onClick={()=>submitFnc()}>SUBMIT</div>
                </div>
            </div>

            <NavigatorDots ref={page1Pos} scrollToPage={scrollToPage} />

            <div className="section-e aioPage" >
                <div className="aioPage__contents">
                    <div className="aioPage__title subtitle">
                        ALL-IN-ONE DIGITAL TWIN SOLUTION
                    </div>
                    <div className="three-objection-box row">
                        <div className="inner-box">
                            <div className="image">
                                <img src="/img/mainpage/main-2-1.png" alt=""/>
                            </div>
                            <div className="textBox">
                                <div className="textBox__subTitle">
                                    EXTEND YOUR VISION
                                </div>
                                <div className= "textBox__paragraph">
                                    Digital Twin Media to gain <br />
                                    new insights into your process
                                </div>
                            </div>
                        </div>
                        <div className="inner-box">
                            <div className="image">
                                <img src="/img/mainpage/main-2-2.png" alt=""/>
                            </div>
                            <div className="textBox">
                                <div className="textBox__subTitle">
                                    VISUALIZE YOUR INSIGHT
                                </div>
                                <div className= "textBox__paragraph">
                                    Industrial AR/XR solution
                                    for
                                    <span style={{display:"block"}}>chemical and bio-manufacturing process</span>
                                </div>
                            </div>
                        </div>
                        <div className="inner-box">
                            <div className="image">
                                <img src="/img/mainpage/main-2-3.png" alt=""/>
                            </div>
                            <div className="textBox">
                                <div className="textBox__subTitle">
                                    ENSURE YOUR SAFETY
                                </div>
                                <div className= "textBox__paragraph">
                                    Analyze immeasurable data and <br/>
                                    optimize to secure your safety
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*<div className="navigator-arrow" onClick={() => scrollToPage('page2Pos')}>*/}
            {/*    <i className={isScrollStop ? "fal fa-chevron-down stop" :"fal fa-chevron-down"} />*/}
            {/*</div>*/}

            <NavigatorDots ref={page2Pos} scrollToPage={scrollToPage} />

            <div className="section-e brickPage" >
                <div className="brickPage__title subtitle">
                    IMPLEMENTATION SERVICE
                </div>
                <div className='brickPage__contents'>
                    {/*<div className="brickPage__contents__ad">*/}
                    {/*    <div className="img6 imgbox">*/}
                    {/*        <img src="/img/mainpage/main-3-6.png" />*/}
                    {/*    </div>*/}
                    {/*    <p className="item-1">Scientific simulation to help get your process unstuck</p>*/}

                    {/*    <p className="item-2">Gain insight into your process and evaluate project risk</p>*/}

                    {/*    <p className="item-3">Dynamic modeling to explore the workaround of design deficiencies</p>*/}

                    {/*    <p className="item-4">Minimize the costs without compromising process performance</p>*/}

                    {/*</div>*/}
                    <div className="brickPage__contents__item">
                        <p>
                            <span className="sub">Reaction and Reactor Modeling</span><br/>
                            Design and scale-up of commercial reactors, enabling prediction of the system behavior under different operating conditions without the need for expensive and time-consuming experimentation
                        </p>
                        <div className="img1 imgbox">
                            <img src="/img/mainpage/main-3-1.png"  alt="..."/>
                        </div>
                        <span className="normal">Reactor</span>
                    </div>
                    <div className="brickPage__contents__item">
                        <p>
                            <span className="sub">Bioprocess</span><br/>
                            Computer modeling of bioreactor and bio separation is an effective method for highperformance process efficiency in yield, productivity or titer of desired product</p>
                        <div className="img2 imgbox">
                            <img src="/img/mainpage/main-3-2.png"  alt="..."/>
                        </div>
                        <span className="normal">Bioprocess</span>
                    </div>
                    <div className="brickPage__contents__item">
                        <p>
                            <span className="sub">Aspen-CFD Hybrid Modeling</span><br/>
                            Reduced order model (ROM), which captures the most important process characteristics without computational expense of detailed CFD simulation, can be implemented in Aspen Custom Modeler (ACM)
                        </p>
                        <div className="img3 imgbox">
                            <img src="/img/mainpage/main-3-3.png" />
                        </div>
                        <span className="normal">Aspen-CFD</span>
                    </div>
                    <div className="brickPage__contents__item">
                        <p>
                            <span className='sub'>Aspen Polymers Process Modeling</span><br/>
                            Use of Aspen Polymers for modeling and simulation of industrial polymer manufacturing processes</p>
                        <div className="img4 imgbox">
                            <img src="/img/mainpage/main-3-4.png" />
                        </div>
                        <span className="normal">Polymer</span>

                    </div>
                    <div className="brickPage__contents__item">
                        <p>
                            <span className='sub'>Separation Process Modeling and Simulation</span>
                            Adsorption, chromatography, simulated moving bed, membrane, counter-current extraction, batch/continuous distillation
                        </p>
                        <div className="img5 imgbox">
                            <img src="/img/mainpage/main-3-5.png" />
                        </div>
                        <span className="normal">Separation</span><br/>
                    </div>
                    <div className="brickPage__contents__item">
                        <p>
                            <span className="sub"> Software Development Service </span><br/>
                            Custom model extension for Aspen software, Windows application development, Web application development
                        </p>
                        <div className="img6 imgbox">
                            <img src="/img/mainpage/main-3-6.png" />
                        </div>
                        <span className="normal">Software</span>
                    </div>

                </div>
            </div>

            {/*<div className="navigator-arrow" onClick={() => scrollToPage('page3Pos')}>*/}
            {/*    <i className={isScrollStop ? "fal fa-chevron-down stop" :"fal fa-chevron-down"} />*/}
            {/*</div>*/}

            <NavigatorDots ref={page3Pos} scrollToPage={scrollToPage} />

            <PartnersBanner />

            <Footer ref={commonRef} banner="main" />
        </>
    )
}


const NavigatorDots = forwardRef(({scrollToPage},ref) => {
    // onClick={()=> scrollToPage('page1Pos')}
    return <div className = "navigator-dots" ref={ref}>
        <div className="green-circle circle-btn"/>
        <div className="yellow-circle circle-btn"/>
        <div className="purple-circle circle-btn"/>
    </div>
})

const PartnersBanner = ({serverAddress}) => {
    return <div className="section-e row partnerSection">
        <div className="col-lg-4 col-md-12 partnerStringCon">
            <h2 className="partnerStringCon__title">
                We Work With the
                <span className="d-block">Best Partners</span>
            </h2>
            <p className="partnerStringCon__paragraph">
                We are very familiar with a number of delivery methods and are
                confident we can find the process that will best help you meet your goals
            </p>
            <Link href={`/PartnersPage${process.env.NODE_ENV === 'development' ? '/' : '/index.html'}`} className="partnerButton">
                read more <i className="fal fa-chevron-right" />
            </Link>
        </div>
        <div className="col-lg-8 col-md-12 partnerImageCon">
            <div className="partnerBox">
                <img alt='Aspen' src="/img/mainpage/Brand/Aspen.jpg"/>
            </div>
            <div className="partnerBox">
                <img alt='CJCJ' src="/img/mainpage/Brand/cjLogo.jpg"/>
            </div>
            <div className="partnerBox">
                <img alt='LGChem' src="/img/mainpage/Brand/lgChem.jfif"/>
            </div>
            <div className="partnerBox">
                <img alt='Asahi' src="/img/mainpage/Brand/AsahiKasei.png"/>
            </div>
            <div className="partnerBox">
                <img alt='JPower' src="/img/mainpage/Brand/JPower.png"/>
            </div>
            <div className="partnerBox">
                <img alt='Samyang' src="/img/mainpage/Brand/samyang.jpg"/>
            </div>
            <div className="partnerBox">
                <img alt='OCI' src="/img/mainpage/Brand/OCI.png"/>
            </div>
            <div className="partnerBox">
                <img alt='Mitsubishi' src="/img/mainpage/Brand/MCC.png"/>
            </div>
            <div className="partnerBox">
                <img alt='Heliogen' src="/img/mainpage/Brand/Heliogen.png"/>
            </div>
            <div className="partnerBox">
                <img alt='LotteChem' src="/img/mainpage/Brand/LotteChemical.jpg"/>
            </div>
            <div className="partnerBox">
                <img alt='KP' src="/img/mainpage/Brand/KP.png"/>
            </div>
            <div className="partnerBox">
                <img alt='Simuarts' src="/img/mainpage/Brand/simuarts.PNG"/>
            </div>
            <div className="partnerBox">
                <img alt='' src="/img/mainpage/Brand/Samsung.png"/>
            </div>
            <div className="partnerBox">
                <img alt='' src="/img/mainpage/Brand/HSC.PNG"/>
            </div>
            <div className="partnerBox">
                <img alt='' src="/img/mainpage/Brand/AGC.png" />
            </div>
            <div className="partnerBox">
                <img alt='' src="/img/mainpage/Brand/HDO.png" />
            </div>
            <div className="partnerBox">
                <img alt='' src="/img/mainpage/Brand/google.png" />
            </div>
            <div className="partnerBox">
                <img alt='' src="/img/mainpage/Brand/KolonLS.jpg" />
            </div>
            <div className="partnerBox">
                <img alt='' src="/img/mainpage/Brand/ASC.png" />
            </div>
            <div className="partnerBox">
                <img alt='' src="/img/mainpage/Brand/kawasaki.png" />
            </div>
            <div className="partnerBox">
                <img alt='' src="/img/mainpage/Brand/Baker.png" />
            </div>
            <div className="partnerBox">
                <img alt='' src="/img/mainpage/Brand/OLI.png" />
            </div>
            <div className="partnerBox">
                <img alt='' src="/img/mainpage/Brand/posco.png" />
            </div>
            <div className="partnerBox">
                <img alt='' src="/img/mainpage/Brand/poscoENC.png" />
            </div>
            <div className="partnerBox">
                <img alt='' src="/img/mainpage/Brand/ascend.png" />
            </div>
            <div className="partnerBox">
                <img alt='' src="/img/mainpage/Brand/ampac.png" />
            </div>

        </div>
    </div>
}




export default MainPage;