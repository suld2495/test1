import React, {useRef, useState, useEffect} from 'react';
import {Footer, MenuComponent, SimacroLogoComponent} from '@/lib/CommonComponent'



const helper = {
    getDelta(event) {
        if(event.wheelDelta) {
            return event.wheelDelta;
        } else {
            return -event.detail;
        }
    },

    debounce(method, delay, context) {
        let inDebounce;
        return function() {
            clearTimeout(method.inDebounce);
            inDebounce = setTimeout(() => {
                method.apply(context, arguments);
            }, delay);
        }
    }
}
class ScrollPages {
    constructor(currentPageNumber, totalPageNumber, pages){
        this.currentPageNumber = currentPageNumber;
        this.totalPageNumber = totalPageNumber;
        this.pages = pages;
        this.viewHeight = document.documentElement.clientHeight;
        this.inThrottle = false;

    }



    mouseScroll = async (event) => {
        let delta = helper.getDelta(event);

        if (!this.inThrottle) {
            this.inThrottle = true
            let ball = document.getElementsByClassName('ball')[0]
            if( ball !== undefined){
                // console.log(this.pages.style.top)

                if (delta < 0) {
                    this.scrollDown();
                    setTimeout(() => {
                        this.inThrottle = false;
                    }, 1500)
                } else {
                    this.scrollUp();
                    setTimeout(() => {
                        this.inThrottle = false;
                        if(-this.viewHeight * (this.currentPageNumber - 1) > -1){
                            ball.style.opacity = 0
                        }
                    }, 500)
                }
            }
        }
    }

    scrollDown() {
        if (this.currentPageNumber !== this.totalPageNumber){
            this.pages.style.top = (-this.viewHeight * this.currentPageNumber) + 'px';
            this.currentPageNumber++;
            this.ballFadeInOut();
        }
    }
    scrollUp(pageNumber) {
        if (this.currentPageNumber !== 1) {
            if(pageNumber === undefined){
                this.pages.style.top = (-this.viewHeight * (this.currentPageNumber - 2)) + 'px';
                this.currentPageNumber--;
                this.ballFadeInOut();
            }else{
                this.pages.style.top = (-this.viewHeight * (pageNumber - 2)) + 'px';
                this.currentPageNumber = pageNumber;
                this.ballFadeInOut();
            }
        }
    }

    resize() {
        this.viewHeight = document.documentElement.clientHeight;
        this.pages.style.height = this.viewHeight + 'px';
        this.pages.style.top = -this.viewHeight * (this.currentPageNumber-1) + 'px';
    }

    ballFadeInOut() {
        let ball = document.getElementsByClassName('ball')[0]
        let boxDom = document.getElementsByClassName('contentsBox')
        let lineDom = document.getElementsByClassName('centerLine')
        let footerDom = document.getElementsByClassName('footer')[0]
        let joinUsDom = document.getElementsByClassName('joinUs')[0]
        if(ball !== undefined){
            this.viewHeight = document.documentElement.clientHeight;
            let currentPage = this.currentPageNumber



            if(-this.viewHeight * (currentPage - 1) > -1){
                ball.style.opacity = 0
            }

            if(currentPage === 1){
                ball.style.top = this.viewHeight * 0.9 + 'px'
            }else if(currentPage === 2) {
                setTimeout(() => {
                    ball.style.opacity = 1
                }, 700);
                ball.style.top = this.viewHeight * 0.9 + 'px'


            }else if(currentPage > 2 && currentPage < 6){
                ball.style.opacity = 1
                ball.style.top = boxDom[currentPage-2].offsetTop - this.viewHeight * (currentPage) +boxDom[currentPage-2].offsetHeight/2 + 'px'
            }else if(currentPage === 6){
                ball.style.opacity = 1
                ball.style.top = boxDom[3].offsetTop - this.viewHeight * (currentPage-1) - footerDom.offsetHeight +boxDom[3].offsetHeight + 90 + 'px'
                lineDom[3].style.height = boxDom[3].offsetTop - this.viewHeight * (currentPage-1) - footerDom.offsetHeight +boxDom[3].offsetHeight + 180 + 'px'
            }

            this.pages.style.height = this.viewHeight + 'px';
            if(currentPage === 6){
                this.viewHeight = document.documentElement.clientHeight;
                this.pages.style.top = - this.viewHeight * (currentPage - 1) - footerDom.offsetHeight + 'px';
            }else{
                this.viewHeight = document.documentElement.clientHeight;
                this.pages.style.top = -this.viewHeight * (currentPage - 1) + 'px';
            }

            console.log(currentPage)
            if(window.screen.width < 640){
                if(currentPage === 1){
                    joinUsDom.style.opacity = 1
                    joinUsDom.style.top = 300 + 'px'
                }else if(currentPage === 2){
                    joinUsDom.style.opacity = 1
                    joinUsDom.style.top = 10 + 'px'
                }else{
                    joinUsDom.style.opacity = 0
                }
            }else{
                if(currentPage === 1){
                    joinUsDom.style.opacity = 1
                    joinUsDom.style.top = 440 + 'px'
                }else if(currentPage === 2) {
                    joinUsDom.style.opacity = 1
                    joinUsDom.style.top = 40 + 'px'
                }else{
                    joinUsDom.style.opacity = 0
                }
            }


        }

    }
    init() {
        let handleResize = helper.debounce(this.resize, 500, this);

        this.pages.style.height = this.viewHeight + 'px';
        this.ballFadeInOut();
        if (navigator.userAgent.toLowerCase().indexOf('firefox') === -1) {
            document.addEventListener('wheel', this.mouseScroll);
        } else {
            document.addEventListener('DOMMouseScroll', this.mouseScroll);
        }
        document.addEventListener('touchstart', (event) => {
            this.startY = event.touches[0].pageY;
        });
        document.addEventListener('touchend', (event) => {
            let endY = event.changedTouches[0].pageY;
            if (this.startY - endY < 0) {
                this.scrollUp();
            }
            if (this.startY - endY > 0) {
                this.scrollDown();
            }
        });
        document.addEventListener('touchmove', (event) => {
            event.preventDefault();
        });
        window.addEventListener('resize', handleResize);
    }
}

const IconBox = ({activateList}) => {
    return <div className="iconBox">
        <div className="icon-c">

            <img src={activateList[0] ? "/img/metaversepage/iconBox/Processmetaverse page_icon_overlay screen_colored.png" : "/img/metaversepage/iconBox/Processmetaverse page_icon_overlay screen.png"} alt="..."/>
        </div>
        <div className="icon-c">
            <img src={activateList[1] ? "/img/metaversepage/iconBox/Processmetaverse page_icon_computer_colored.png" : "/img/metaversepage/iconBox/Processmetaverse page_icon_computer.png"} alt="..."/>
        </div>
        <div className="icon-c">
            <img src={activateList[2] ? "/img/metaversepage/iconBox/Processmetaverse page_icon_mobile tablet_colored.png" : "/img/metaversepage/iconBox/Processmetaverse page_icon_mobile tablet.png"} alt="..."/>
        </div>
        <div className="icon-c">
            <img src={activateList[3] ? "/img/metaversepage/iconBox/Processmetaverse page_icon_vr headset_colored.png" : "/img/metaversepage/iconBox/Processmetaverse page_icon_vr headset.png"} alt="..."/>
        </div>
    </div>
}

const ProcessMetaversePage  = () => {
    const commonRef = useRef(null)
    const menuRef = useRef(null)
    const positionRef = useRef(null)

    let s;

    const removeScrollEvent = () => {
        window.removeEventListener('scroll', commonRef.topbuttonFnc);
    }

    useEffect( () => {
        s = new ScrollPages(1,6,document.getElementById('all-pages'))
        s.init();
        window.addEventListener('wheel', menuFnc);
        return () => {
            window.removeEventListener('wheel', menuFnc);
        }
    },[])
    const menuFnc = () => {
        let ball = document.getElementsByClassName('ball')[0]
        menuRef.current.setMenuOpen(false);
    }

    return(
        <>
            <div className="fullscreen-container">
                {/*<div className="ball" />*/}
                <img src="/img/metaversepage/ball.png" className="ball" alt="..." />
                <div id="all-pages">
                    <section className="page bannerPage">
                        <MenuComponent isMain={false} removeScrollEvent={removeScrollEvent} ref={menuRef}/>
                        <SimacroLogoComponent/>
                        <div className="joinUs isPM" style={{top:'440px'}}>
                            JOIN US
                        </div>

                        <div className="topBanner">
                            <img className="backImage" src="/img/metaversepage/Image20230510092005.png" alt=""/>
                            <div className="title">
                                PROCESSMETAVERSE
                                <sup>TM</sup>
                            </div>
                            {/*<div className="subTitle">*/}
                            {/*    AR/XR-powered process digital twin solution*/}
                            {/*</div>*/}
                        </div>

                        <div className="bannerPage__contents" >
                            <img src="/img/metaversepage/qutoeImage2.png" className="circleImage" alt="..." />
                            <div className="bannerPage__contents__textBox">
                                <img src="/img/metaversepage/Quotation1.png" alt="" />
                                <div className="bannerPage__contents__textBox__text">
                                    Cutting-edge industrial AR/XR solution <br />
                                    powered by real-time digital twin <br />
                                    enables the visualization of fragmented data <br />
                                    into meaningful information,<br />
                                    facilitating the optimization of<br />
                                    chemical/bio-processes<br />
                                    and enhancing safety measures
                                    {/*Industrial AR (augmented reality) solution powered by real-time DT (digital twin). <br />*/}
                                    {/*It visualizes fragmented real-time data that cannot be analyzed or measured into meaningful information, ensuring chemical/bioprocess optimization and safe operation*/}
                                </div>
                                <img src="/img/metaversepage/Quotation2.png" alt="" />
                            </div>
                            <div className="bannerPage__contents__lineBox">
                                <div className="line" />
                            </div>

                            <div className="bannerPage__contents__imgBox">
                                <img src="/img/metaversepage/QuotationImage.png" alt="" />
                            </div>
                        </div >

                        <div className="navigator-arrow" onClick={() => s.scrollDown()} style={{margin:0}}>
                            <i className="fal fa-chevron-down stop" />
                        </div>
                    </section>
                    <section className="page">

                        <div className="useCasePage">
                            <div className="useCasePage__imgBox">
                                <img src="/img/metaversepage/QuotationImage.png" alt="" />
                            </div>
                            <div className = "navigator-dots" style={{height:'120px'}}>
                                <div className="green-circle circle-btn"/>
                                <div className="yellow-circle circle-btn"/>
                                <div className="purple-circle circle-btn"/>
                            </div>

                            <div className="useCasePage__useBox">
                                <div className="useCasePage__title">
                                    USE CASES
                                </div>
                                <img src="/img/metaversepage/useCase.png" alt="" />
                            </div>
                            <div className="navigator-arrow" onClick={() => s.scrollDown()}>
                                <i className="fal fa-chevron-down stop" />
                            </div>
                        </div>
                        <div className="lineBox top">
                            <div className="centerLine" />
                        </div>
                    </section>
                    <section className="page" ref={positionRef}>
                        <div className="lineBox mid">
                            <div className="centerLine" />
                        </div>
                        <div className="processPage tower">
                            <div className="titleBox__left" >
                                <div className="trapezoid">
                                    <div className="trapezoid__subtitle">
                                        PLANT SITE
                                    </div>
                                    <div className="triangle" />
                                    <IconBox activateList={[false,false,true,true]} />
                                </div>
                            </div>
                            <div className="contentsBox">
                                <div className="textBox">
                                    <div className="borderLine" />
                                    <p>AR-Digital Twin technology revolutionizes chemical/bio manufacturing plant sites by providing real-time operational and safety insights through augmented reality, allowing users to make immediate and informed decisions. </p>
                                    <p>With the ability to monitor and analyze plant operations in real-time, AR-Digital Twin technology can also optimize plant efficiency and reduce downtime. Additionally, the technology can enhance safety and security by providing real-time data on restricted areas and guidance on optimal access routes, ensuring compliant and efficient operations.</p>
                                </div>
                                <div className="imgBox">
                                    <img src="/img/metaversepage/field.png" alt=""/>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="page">
                        <div className="lineBox mid">
                            <div className="centerLine"/>
                        </div>
                        <div className="processPage field">
                            <div className="titleBox__right" >
                                <div className="trapezoid">
                                    <IconBox activateList={[true,true,false,false]} />

                                    <div className="triangle" />
                                    <div className="trapezoid__subtitle">
                                        PLANT CONTROL
                                    </div>
                                </div>
                            </div>
                            <div className="contentsBox">
                                <div className="imgBox">
                                    <img src="/img/metaversepage/control.png" alt=""/>
                                </div>
                                <div className="textBox">
                                    <div className="borderLine" />
                                    <p>AR-Digital Twin technology can transform the way operators in the plant control room work by providing real-time monitoring and analysis of plant operations through an intuitive and easy-to-use interface. </p>
                                    <p>With the power of augmented reality, operators can quickly identify and resolve issues, optimize plant performance, and make informed decisions with unmatched accuracy. This technology seamlessly integrates with existing systems and devices, preserving your infrastructure while providing a significant upgrade to your technology capabilities.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="page">
                        <div className="lineBox mid">
                            <div className="centerLine"/>
                        </div>
                        <div className="processPage lab">
                            <div className="titleBox__left" >
                                <div className="trapezoid">
                                    <div className="trapezoid__subtitle">
                                        DIGITAL LAB
                                    </div>
                                    <div className="triangle" />
                                    <IconBox activateList={[true,true,true,true]} />
                                </div>
                            </div>
                            <div className="contentsBox">
                                <div className="textBox">
                                    <div className="borderLine" />
                                    <p>AR-Digital Twin technology can revolutionize laboratory operations by providing real-time monitoring and analysis of experiments and equipment through an intuitive and easy-to-use interface. With the power of augmented reality, laboratory researchers and technicians can quickly identify and resolve issues, optimize experimental conditions, and make informed decisions with unmatched accuracy. </p>
                                    <p>
                                        The technology can also provide valuable R&D and safety insights data to optimize chemical and biological plant processes. Additionally, a real-time database can be implemented for the maintenance and safety of the laboratory, ensuring compliance and efficiency in all operations. With seamless integration into existing laboratory systems and devices, this technology provides a significant upgrade to laboratory capabilities and safety measures.
                                    </p>
                                </div>
                                <div className="imgBox">
                                    <img src="/img/metaversepage/lab.png" alt=""/>
                                </div>

                            </div>
                        </div>
                    </section>
                    <section className="page">
                        <div className="lineBox bot">
                            <div className="centerLine"/>
                        </div>
                        <div className="processPage virtual">
                            <div className="titleBox__right" >
                                <div className="trapezoid">
                                    <IconBox activateList={[false,true,true,false]} />
                                    <div className="triangle" />
                                    <div className="trapezoid__subtitle">
                                        CHEM VISUALIZATION
                                    </div>
                                </div>
                            </div>
                            <div className="contentsBox">
                                <div className="imgBox">
                                    <img src="/img/metaversepage/virtual.png" alt=""/>
                                </div>
                                <div className="textBox">
                                    <div className="borderLine" />

                                    <p>By using AR-Digital Twin technology to improve the usability of legacy modeling software interfaces like Aspen Plus, you can expect to achieve a significant improvement in the efficiency and accuracy of modeling processes. With the help of augmented reality, complex modeling tasks can be simplified and made more intuitive, allowing users to better understand the data and optimize their models in real-time. </p>
                                    <p>This technology can also provide users with valuable insights and analytics, enabling them to make informed decisions and improve the overall performance of their models. By seamlessly integrating with existing software interfaces, AR-Digital Twin technology can provide a significant upgrade to modeling capabilities without the need for costly and time-consuming software upgrades.</p>
                                </div>
                            </div>
                        </div>

                        <div style={{position: "relative"}}>
                            <div className="tothetop" onClick={() => {
                                console.log(s)
                                s.scrollUp(1)
                            }}>
                                <div className="arrow">
                                    <i className="fal fa-chevron-up" />
                                </div>
                                <div className="text">
                                    TOP
                                </div>
                            </div>
                        </div>
                    </section>
                    <Footer ref={commonRef} standardOfY={420} showTop={true} isPM={true} />
                </div>
            </div>
        </>
    )
}

export default ProcessMetaversePage