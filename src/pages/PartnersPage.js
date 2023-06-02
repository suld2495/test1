import React, {useRef, useState, useEffect} from 'react';

import {Footer, MenuComponent, SimacroLogoComponent} from '@/lib/CommonComponent'


const Partner = (props) => {
    return  <div className="partnerCard">
        <div className="partnerCard__content">
            <div
                // href={props.link}
               className="partnerCard__content__imgBox">
                <img alt="..." src={props.imgLink}/>
            </div>
            <div style={{padding:'8px 10px',marginTop:'8px'}}>
                <p>{props.desc}</p>
                <p>{props.rel}</p>
            </div>
        </div>
    </div>
}

const PartnersPage = () => {
    const commonRef = useRef(null)

    const lang = ""
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const removeScrollEvent = () => {
        // window.removeEventListener('scroll', commonRef.topbuttonFnc);
    }
    return (
        <>
            <MenuComponent removeScrollEvent={removeScrollEvent} />
            <SimacroLogoComponent/>
            <div className="partnerPage"  id="partnerTop">
                <div className="topBanner textHighlight partnerBanner">
                    <img className="backImage" src="/img/partnerspage/partnersBanner.jpg" alt=""/>
                    <div className="title">PARTNERS</div>
                    <div className="squareBox" />
                </div>
                <div className = "navigator-dots" style={{height:'20px'}}>
                    <div className="green-circle circle-btn"/>
                    <div className="yellow-circle circle-btn"/>
                    <div className="purple-circle circle-btn"/>
                </div>
                <div className="section-e partnerPage__titleSection">
                    <div className="partnerPage__titleSection__title">SIMACRO Global Partners</div>
                    <div className="partnerPage__titleSection__subText">Lead the future with SIMACRO</div>
                    <div className="partnerPage__titleSection__contents">
                        <div className="circleBox">
                            <img src="/img/partnerspage/global2.png" alt="..." />
                            <div className='circleBox__text'>
                                2020 ~ 2022 <br/>
                                Commercial Projects
                            </div>
                        </div>
                        <div className="circleBox">
                            <img src="/img/partnerspage/global1.png" alt="..." />
                            {/*<div className="circle">12</div>*/}
                            <div className='circleBox__text'>
                                Digital Twin<br/>
                                Implementation
                            </div>
                        </div>
                        <div className="circleBox">
                            <img src="/img/partnerspage/global3.png" alt="..." />

                            {/*<div className="circle">28</div>*/}
                            <div className='circleBox__text'>Industrial Partners</div>
                        </div>

                    </div>
                </div>
                <div className="section-e partnerPage__partnerSection">
                    <div className='exBox'>
                        <div className="exBox__title">
                            <span>■</span><br/>
                            We Work With the Best Partners
                        </div>
                    </div>
                    <div className='partnerCon'>
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
                <div className="section-e partnerPage__globalSection">
                    <div className='exBox'>
                        <div className="exBox__title">
                            <span>■</span><br/>
                            SIMACRO’s Global Partner Network
                        </div>
                        <div className="partnerPage__globalSection__sub">
                            In partnership with world-class process modeling & biochemical corporations,
                            <span className="d-block">SIMACRO provides the best solution to customers with our partners software and technologies.</span>
                        </div>
                    </div>
                </div>
                <div className="section-e partnerPage__globalCardSection" >
                    <Partner imgLink="/img/partnerspage/partners/AspenTech.png" link="https://www.aspentech.com/en"
                             desc="Aspen Technology works with more than 2,300 of the world’s leading industrial organizations. Their customers include 19 of the 20 largest petroleum companies, 19 of the 20 largest chemical companies and the 20 largest engineering and construction firms in the oil and gas industry."
                             rel="SIMACRO is a global partner of Aspen Technology for implementation services and channel sales." />
                    <Partner imgLink="/img/partnerspage/partners/OLI.png" link="https://www.olisystems.com/"
                             desc={lang === "kor" ? "OLI Systems는 전해질 열역학 분야를 전문적으로 다루며 뛰어난 전해질 모델링 소프트웨어 및" +
                                 " 툴을 50년 이상 제공해왔습니다. 주기율표의 85개 이상의 원소에 대한 폭넓은 화학종에 대한 노하우를 바탕으로" +
                                 " 전문적인 소프트웨어 기능을 제공합니다." : "OLI Systems specializes in electrolyte thermodynamics and has" +
                                 " provided exceptional electrolyte modeling software and tools for 50+ years. They provide a unique software" +
                                 " capability upon extensive chemical speciation know-how for over 85 elements of the periodic table."}
                             rel="SIMACRO is a sole agent of OLI Systems in South Korea for software sales and services." />
                    <Partner imgLink="/img/partnerspage/partners/Artisan.png" link="https://www.artisanind.com/"
                             desc={lang === "kor" ? "Artisan Industries Inc.는 열분리 솔루션 제공 업체로 85년 이상의 경험을 통해 고객의 특정" +
                                 " 애플리케이션 요구 사항을 해결했습니다. 복잡한 분리공정 문제를 해결하기 위해 엔지니어링 전문 지식과 기술을 활용하여" +
                                 " 고객의 요구를 충족하는 맞춤형 솔루션을 제공합니다.." : "Artisan Industries Inc. is a provider of thermal separation" +
                                 " solutions and has over 85 years of experience solving customers’ specific application requirements. Utilizing" +
                                 " engineering expertise and capabilities to solve complex separations, they provides uniquely tailored solutions to" +
                                 " meet client’s needs."}
                             rel="SIMACRO is an agent of Artisan Industries in South Korea for sales and services." />
                    <Partner imgLink="/img/partnerspage/partners/Simuarts.jpg" link="https://simuarts.co.jp/en"
                             desc={lang === "kor" ? "Simuarts Corporation은 컨설팅, 기술 서비스 제공 및 Aspen 소프트웨어 서비스를" +
                                 " 제공합니다. Simuarts Corporation 기존의 정제 및 석유 화학 공정뿐만 아니라 CO2 분리 및 재생 에너지 공정분야에서도 다양한 경험이" +
                                 " 있습니다." : "Simuarts Corporation provides consulting, technical services and Aspen Technology Inc." +
                                 " software service. They are highly experienced not only in traditional refining and petrochemical processes but also" +
                                 " in CO2 separation and renewable energy processes."}
                             rel="SIMACRO is a partner of Simuarts Corporation since 2019." />
                    <Partner imgLink="/img/partnerspage/partners/GMA.png" link="https://mehos.net/"
                             desc={lang === "kor" ? "Greg Mehos & Associates LLC는 벌크 고체 저장, 취급 및 처리의 기본에 대한 지식을 제공하는 컨설팅" +
                                 " 회사입니다. 또한 교육 세미나와 분말 흐름 속성 테스트를 제공합니다." : "Greg Mehos & Associates LLC is a consulting" +
                                 " company providing knowledge on the fundamental of bulk solids storage, handling and processing. They also provide" +
                                 " training seminars and powder flow property testing."}
                             rel="SIMACRO is a partner of Greg Mehos & Associated LLC." />
                    <Partner imgLink="/img/partnerspage/partners/Suphat.png" link="https://www.linkedin.com/in/suphat-watanasiri-02867b3b/"
                             desc={lang === "kor" ? "Suphat Watanasiri Consulting LLC는 Aspen Technology의 기술 수석 이사인 Suphat Watanasiri가" +
                                 " 관리합니다. 35 년 이상의 열 물리적 특성 모델링 경험을 바탕으로 Suphat Watanasiri Consulting LLC는 열 물리적 특성에" +
                                 " 대한 전문적인 분석을 제공합니다." : "Suphat Watanasiri Consulting LLC is managed by Suphat Watanasiri, a Senior" +
                                 " Director of Technology at Aspen Technology. With his 35+ years of experience in thermophysical properties modeling," +
                                 " Suphat Watanasiri Consulting LLC provides specialized analysis of thermophysical properties."}
                             rel="SIMACRO is a partner of Suphat Watanasiri Consulting LLC." />
                    <Partner imgLink="/img/partnerspage/partners/Hanwhasystems.jpg" link="https://www.hanwhasystems.com/en/index.do"
                             desc={lang === "kor" ? "한화 시스템은 방산 전자 및 정보 인프라 분야에서 차별화된 스마트 기술을 제공하는 글로벌 종합" +
                                 " 솔루션 기업입니다." : "Hanwha Systems is a leading global total solutions company providing" +
                                 " differentiated smart technologies in defense electronics and information infrastructure."}
                             rel="SIMACRO is a partner of Hanwha Systems." />
                    <Partner imgLink="/img/partnerspage/partners/Anukoolan.jfif" link="https://www.anukoolan.com/"
                             desc={lang === "kor" ? "Anukoolan은 upstream 및 downstream 산업, 프로그램 교육 및 재무 회계와 같은 다양한 부문에서" +
                                 " 기관을 지원하는 최적화 솔루션 회사입니다." : "Anukoolan is an optimization solutions company supporting organizations" +
                                 " in various sectors such as upstream & downstream industries, programs education and financial accounting."}
                             rel="SIMACRO is a partner of Anukoolan." />
                    <Partner imgLink="/img/partnerspage/partners/paul.png" link="https://bpt.no/"
                             desc="Paul M. Mathias Consulting, LLC is managed by Dr. Paul Mathias. With his 43+ years of experience in modeling of thermophysical properties and chemical processes, Paul M. Mathias Consulting provides specialized analyses and design of a wide variety of chemical processes."
                             rel="SIMACRO is a partner of Paul M. Mathias Consulting, LLC." />
                    <div style={{padding:'16px',width:460}}>

                    </div>
                </div>
                <div className="section-e partnerPage__contactSection" >
                    <div className="" style={{fontWeight:700,lineHeight:1.2}}>
                        SIMACRO is open to expanding our technology network. <br/>
                        For partnership inquiries, contact us.</div>
                    <div className="" style={{lineHeight:1.2}}>
                        <a href="mailto: support@simacro.com" className=" text-primary">support@simacro.com</a>
                    </div>
                </div>

            </div>
            <Footer ref={commonRef} standardOfY={420}/>
        </>
    )
}

export default PartnersPage;