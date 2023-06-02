import React, {useRef, useState} from 'react';

import {Footer, MenuComponent, SimacroLogoComponent} from '@/lib/CommonComponent'
import Link from "next/link";

// let server = 'http://localhost:5000';
let server = 'https://server.simacro.com';

const AboutPage = () => {
    const commonRef = useRef(null)

    const removeScrollEvent = () => {
        window.removeEventListener('scroll', commonRef.topbuttonFnc);
    }

    return<>
        <MenuComponent isMain={false} removeScrollEvent={removeScrollEvent} />
        <SimacroLogoComponent/>
        <div className="aboutPage">
            <div className="topBanner textHighlight companyBanner">
                <img className="backImage" src="/img/companyPage/companyBanner.jpg" alt=""/>
                <div className="title">COMPANY</div>
                <div className="squareBox" />
            </div>
            <div className="section-e missionSection">
                <div className="aboutPage__subtitle">
                    About SIMACRO
                </div>
                <div className="missionSection__contentBox">
                    <div className="missionSection__contentBox__textBox">
                        <div className="square"><span>■</span><br/></div>
                        <div className="subtitle">
                            Our Mission is to provide exceptional digital <br/>
                            modeling services and tools to help scientists and <br/>
                            engineers reach efficient, cost-saving solutions.
                        </div>
                        <div className="textbox">
                            We believe close partnership is key to solving challenging process problems. <br/>
                            We will be with you every step of the way
                        </div>
                    </div>
                    <div className="missionSection__contentBox__imgBox">
                        <div className='missionSection__contentBox__imgBox__box1'>
                            <img src="/img/companyPage/1_1.png" alt="..." />
                        </div>
                        <div className='missionSection__contentBox__imgBox__box2'>
                            <img src="/img/companyPage/1_2.png" alt="..." />
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-e storySection">
                <div className="aboutPage__subtitle">
                    Our Story
                </div>
                <div className="storySection__contentBox">
                    <div className="content">
                        <div className="picture">
                            <img src="/img/newsPage/lotte.jpg" alt="" />
                        </div>
                        <div className="textbox">
                            <p>
                                Engineers at SIMACRO implemented rigorous Aspen-based process modeling and simulation studies, and provided expert recommendations and engineering support for LOTTE Chemical.
                            </p>
                            <Link rel="noopener noreferrer" target="_blank" href="https://www.businesswire.com/news/home/20220619005002/en/LOTTE-Chemical-and-Sasol-Chemicals-exploring-collaboration-to-develop-materials-for-electric-vehicle-batteries?utm_campaign=shareaholic&utm_medium=linkedin&utm_source=socialnetwork" className="partnerButton">
                                <span>Read more  <i className="fas fa-arrow-right" /> </span>
                            </Link>
                        </div>
                    </div>

                    <div className="content">
                        <div className="picture">
                            <img src="/img/newsPage/mrLangmuir.jpg" alt="" />
                        </div>
                        <div className="textbox">
                            <p>
                                Mr. Langmuir is a web software application to extract the adsorption equilibrium isotherm parameters from the experimental data and/ provides various types of built-in equilibrium isotherm models.</p>
                            <Link rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/posts/simacro_mr-langmuir-is-a-web-software-application-activity-6661041523146186752-ksgn?utm_source=share&utm_medium=member_desktop" className="partnerButton">
                                <span>Read more  <i className="fas fa-arrow-right" /> </span>
                            </Link>
                        </div>
                    </div>
                    <div className="content">
                        <div className="picture">
                            <img src="/img/newsPage/optimize.jpg" alt="" />
                        </div>
                        <div className="textbox">
                            <p>
                                #SIMACRO was honored to be part of #OPTIMIZE2021 and to have a great opportunity to deliver our success story in such a premier global event.
                            </p>
                            <Link rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/posts/simacro_simacro-optimize2021-digitaltwin-activity-6806574184605601792-6f7b?utm_source=share&utm_medium=member_desktop" className="partnerButton">
                                <span>Read more  <i className="fas fa-arrow-right" /> </span>
                            </Link>
                        </div>
                    </div>
                    <div className="content">
                        <div className="picture">
                            <img src="/img/newsPage/aspen.jpg" alt="" />
                        </div>
                        <div className="textbox">
                            <p>
                                We extended our partnership with AspenTech and officially became an AspenTech’s reseller partner globally having no geographic limitation. </p>
                            <Link rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/posts/simacro_aspentechnology-partnership-digital-activity-6640285569836474369-y7O4?utm_source=share&utm_medium=member_desktop" className="partnerButton">
                                <span>Read more  <i className="fas fa-arrow-right" /> </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-e locationSection">
                <div className="locationSection__leftBox">
                    <span>Location</span>
                    <div className="backImage">
                        <img src="/img/companyPage/bostonImage.jpg" alt=""/>
                    </div>
                    <div className="frontImage" >
                        <img src="/img/companyPage/SeoulImage.jpg" alt=""/>
                    </div>
                </div>
                <div className="locationSection__rightBox">
                    <div>
                        <div className="square"></div>
                        <div className="nation-c">Korea</div>
                        <div className="address">11, Teheran-ro 7-gil <br/>
                            Gangnam-gu, Seoul 06134
                        </div>
                    </div>
                    <div>
                        <div className="square"></div>
                        <div className="nation-c">United States</div>
                        <div className="address">1 Broadway, Cambridge <br/>
                            MA 02142
                        </div>
                    </div>

                    <div>
                        <i className="fas fa-envelope" style={{color:'rgb(180, 88, 109)'}} />  <span style={{color:'rgba(0,0,0,0.7)'}}>support@simacro.com</span>
                    </div>
                </div>
            </div>
            <ContactSection />
        </div>

        <Footer ref={commonRef} standardOfY={420} isPM={true}/>
    </>
}
const ContactSection = () => {
    const [submitStatus, setSubmitStatus] = useState(0)
    const [checkBox, setCheckbox] = useState(false)
    const [isFieldBlank, setIsFieldBlank] = useState([false,false,false,false]);

    const [info, setInfo] = useState({
        name:'',
        email: '',
        type:'',
        details:'',
    })
    const contact = async () => {
        setSubmitStatus(1)

        setTimeout(() => {
            let blankSpace = [false,false,false,false]
            info.name === "" ? blankSpace[0] = true : false
            info.email === "" ? blankSpace[1] = true : false
            info.type === "" ? blankSpace[2] = true : false
            info.details === "" ? blankSpace[3] = true : false
            setIsFieldBlank(blankSpace)

            if(blankSpace.some( x => x === true)){
                setSubmitStatus(0)
                return false
            }else{
                fetch(server + '/mail/form', {
                    method: 'post', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(info)
                })
                    .then(response => response.json())
                    .then(async (res) => {
                        if(res.status === 'success'){
                            setSubmitStatus(2)
                        }else{
                            setSubmitStatus(3)
                        }
                    })
                    .catch( () => {
                        setSubmitStatus(3)
                    })
            }
        }, 1000)


    }

    return  <div className="section-e contactSection">
        <div className="aboutPage__subtitle">
            Contact Us
        </div>
        <div className="contactSection__contentBox">
            <div className="name">
                <span ><div style={{width:60}}>Name</div> <input placeholder='Your name' className="input" onChange={ e => setInfo({...info,name:e.target.value})} /></span>
                {isFieldBlank[0] ? <span className="warning">Please write your name</span> : <div />}
            </div>
            <div className="eMail">
                <span ><div style={{width:60}}>E-mail </div><input placeholder='chemys@email.com' className="input" onChange={ e => setInfo({...info,email:e.target.value})} /></span>
                {isFieldBlank[1] ? <span className="warning">Please write your email</span> : <div />}

            </div>
            <div className="type">
                <span ><div style={{width:60}}>Type</div><input placeholder='Type of inquiry' className="input" onChange={ e => setInfo({...info,type:e.target.value})} /></span>
                {isFieldBlank[2] ? <span className="warning">Please write type</span> : <div />}

            </div>
            <div className="details">
                <span ><div style={{width:60}}>Details</div>  <textarea placeholder='Note' className="input detail" onChange={ e => setInfo({...info,details:e.target.value})}></textarea></span>
                {isFieldBlank[3] ? <span className="warning">Please write details</span> : <div />}

            </div>
            <div className="agreeBox">
                <div className={(checkBox ? "checkbox checked":"checkbox")}>
                    {checkBox ? <i className="fas fa-check-circle checkIcon" onClick={() => setCheckbox(prev => !prev)} /> :
                        <i className="fa fa-circle-o checkIcon" onClick={() => setCheckbox(prev => !prev)} />
                    }

                    <div>I agree to the collection and use of personal information</div>
                </div>
            </div>
            {submitStatus === 0 ? <div className={checkBox ? "submitBox" : "submitBox disabled"} onClick={ () => checkBox ? contact() : ''}>
                SUBMIT
            </div> : submitStatus === 1 ? <div className="submitBox disabled">
                <i className="fas fa-circle-notch fa-spin" style={{marginRight:'8px'}} /> Submitting...
            </div> : submitStatus === 2 ? <div className="submitComplete">Your message was sent, thank you! </div>:
                <div className="submitFailed">Error</div>}


        </div>


    </div>


}

export default AboutPage;