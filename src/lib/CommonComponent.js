import React, {useEffect, useRef, useState, useImperativeHandle, forwardRef} from "react"
import Link from 'next/link'

const ssr = process.env.NODE_ENV === 'development' ? '' : '/index.html';

const scrollToTop = () => {
    window.scrollTo({
        top:0,
        behavior: 'smooth'
    })
}


const Footer = forwardRef((props, ref) => {
    const [topbtnDisplay, setTopbtnDisplay] = useState(false);
    const footerPos = useRef(null)


    useImperativeHandle( ref, () => {
        return{
            topbuttonFnc
        }
    },[])
    
    useEffect( () => {
        topbuttonFnc()
        window.addEventListener('scroll', topbuttonFnc);
        return () => {
            window.removeEventListener('scroll', topbuttonFnc);
        }
    },[])

    const topbuttonFnc = () => {
        let joinUsDom = document.getElementsByClassName('joinUs')[0]
        if( joinUsDom !== undefined){
            if(props.banner === 'main'){
                let bannerHeight = typeof window !== 'undefined' ? document.documentElement.clientHeight : 0
                if(window.screen.width < 640){
                    if( parseInt(window.pageYOffset) < 200 ){
                        joinUsDom.style.top = 200 + 'px'
                    }else{
                        joinUsDom.style.top = window.pageYOffset + 40 + 'px'
                    }
                }else{
                    if( parseInt(window.pageYOffset) < bannerHeight + 10 ){
                        joinUsDom.style.top = bannerHeight + 20 + 'px'
                    }else{
                        joinUsDom.style.top = window.pageYOffset + 10 + 'px'
                    }
                }
            }else{
                if(window.screen.width < 640){
                    // console.log( window.pageYOffset)
                    if( parseInt(window.pageYOffset) < 200 ){
                        joinUsDom.style.top = 200 + 'px'
                    }else{
                        joinUsDom.style.top = window.pageYOffset + 40 + 'px'
                    }
                }else{
                    // console.log(props.standardOfY)
                    if( parseInt(window.pageYOffset) < parseInt(props.standardOfY) + 10 ){
                        joinUsDom.style.top = props.standardOfY + 20 + 'px'
                    }else{
                        joinUsDom.style.top = window.pageYOffset + 10 + 'px'
                    }
                }
            }
        }


        // console.log(window.pageYOffset,window.innerHeight,footerPos.current.offsetTop)
        if( parseInt(window.pageYOffset) + parseInt(window.innerHeight) - 75 > parseInt(footerPos.current.offsetTop)){
            setTopbtnDisplay(true)
        }else{
            setTopbtnDisplay(false)
        }

    }

    return(
        <>
            {!props.isPM ? <Link href={`/AboutPage${ssr}`} >
                <div className="joinUs">
                    JOIN US
                </div>
            </Link>: <></>}


            <div className="footer" ref={footerPos}>
                {!props.isPM ? <div className={topbtnDisplay || props.showTop ? "tothetop" : "fadeOut"} onClick={() => scrollToTop()}>
                    <div className="arrow">
                        <i className="fal fa-chevron-up" />
                    </div>
                    <div className="text">
                        Top
                    </div>
                </div> :<></>}

                <div className="part-1">
                    <div className="left">
                        <div style={{marginRight:'16px'}}>
                            Connect With Us
                        </div>


                        <Link rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/company/simacro/">
                            <div className='link-btn icon-c'>
                                <i className="fab fa-linkedin" />
                            </div>
                        </Link>
                        <Link rel="noopener noreferrer" target="_blank" href="https://www.youtube.com/@simacrosupport8130">
                            <div className='link-btn icon-c'>
                                <i className="fab fa-youtube" />
                            </div>
                        </Link>

                        <div className='link-btn icon-c'>
                            <i className="fab fa-twitter" />
                        </div>

                    </div>
                    <div className="right">
                        <Link href={`/TermsPolicyPage${ssr}`} >
                            <div className='link-btn'>
                                Privacy Policy
                            </div>
                        </Link>

                        {/*<div className='link-btn'>*/}
                        {/*    Terms and Conditions*/}
                        {/*</div>*/}
                    </div>

                </div>
                <div className="part-3">
                    © 2018-2023 SIMACRO, LLC
                </div>
            </div>
        </>
    )

})

const MenuComponent = forwardRef((props, ref) => {

    useImperativeHandle(ref, () => ({
        setMenuOpen
    }));
    const [menuOpen, setMenuOpen] = useState(false);
    useEffect( () => {
        window.addEventListener('scroll', menuFnc);
        return () => {
            window.removeEventListener('scroll', menuFnc);
        }
    },[])

    const menuFnc = () => {
        if(  parseInt(window.pageYOffset) > 0  ){
            setMenuOpen(false);
        }
    }

    return (
        <>
            <div className="nav" >
                {!menuOpen ?<div className="burger" onClick={()=>setMenuOpen(true)}>
                    <i className="fal fa-bars"></i>
                </div> :<></>}
                <div className={menuOpen ? (props.isMain ? "nav__contents open main" : "nav__contents open") : "nav__contents"} >
                    {menuOpen ? <>
                        <div className="btn-x" onClick={()=>setMenuOpen(false)}>
                            <i className="fal fa-times"></i>
                        </div>
                        <div className="page-link-box">
                        <div className="page-link">
                            <Link href={`/${ssr}`}>HOME</Link>
                        </div>
                        <div className="page-link ">
                            <Link href={`/ProcessMetaversePage${ssr}`}>PROCESSMETAVERSE</Link>
                        </div>
                        <div className="page-link ">
                            <Link href={`/DigitalTwinPage${ssr}`} > ASPEN MODELING </Link>
                        </div>
                        <div className="page-link ">
                            <Link href={`/PartnersPage${ssr}`} > PARTNERS </Link>
                        </div>
                        <div className="page-link ">
                            <Link href={`/AboutPage${ssr}`} > COMPANY </Link>
                        </div>
                    </div></> : <></>}
                </div>
            </div>
        </>
    )
})

const SimacroLogoComponent = forwardRef((props, ref) => {
    return <Link href="/" >
        <div className="simacro-logo">
            <img src="/img/common/SIMACRO logo (white).svg" alt="..." />
        </div>
    </Link>
})


// SimacroLogoComponent.displayName = "SimacroLogoComponent";
// MenuComponent.displayName = "MenuComponent";
// Footer.displayName = "Footer";


export { Footer, MenuComponent, SimacroLogoComponent};


