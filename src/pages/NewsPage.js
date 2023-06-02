
import React, {useState, useEffect} from 'react';


const NewsPage = () => {
    const [newsData, setNewsData] = useState([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1])

    const [paginationSelectedIdx, setPaginationSelectedIdx] = useState(1)
    const [paginationMaxIdx, setPaginationMaxIdx] = useState(1)

    const [newsObjectClicked, setNewsObjectClicked] = useState(true)


    useEffect(() => {

        setPaginationMaxIdx( parseInt(newsData.length/24) + 1)
    }, [])

    const paginationBox = (nowselectedIdx, maxIdx) => {
        let caseStr = 0;
        let left3dots = false;
        let right3dots = false;
        if(maxIdx < 5){
            caseStr = "onlynumber";
        }
        if(maxIdx > 4){
            if( (maxIdx - nowselectedIdx > 2) ){
                right3dots = true
            }
            if( (nowselectedIdx > 3 )){
                left3dots = true
            }
            caseStr = "with3dots"
        }

        if(caseStr === "onlynumber"){
            const tempArr = []
            let tempN = 1;
            for (let i=0; i<maxIdx; i++){
                tempArr.push(tempN)
                tempN++
            }
            return (
                <div className="center">
                   {tempArr.map( (item, idx) => (
                    <div key={item} onClick={e => setPaginationSelectedIdx(Number(e.target.id))} id={item} className={(paginationSelectedIdx === parseInt(item) ? "pagination-number selected-pagination" : "pagination-number")}> {item} </div>
                   ))}
                </div>
            )
        }

        if(caseStr === "with3dots"){

            return (

                <div className="center">
                    {paginationSelectedIdx !== 1 ? <div onClick={() => setPaginationSelectedIdx(1)}> 1 </div> : <></>}
                    {/* {left3dots ?<div> <i className="far fa-ellipsis-v fa-rotate-90"></i> </div>
                    
                    : 
                    <></>
                    } */}
                    {paginationSelectedIdx === paginationMaxIdx-1 || paginationSelectedIdx === paginationMaxIdx  ? <div onClick={()=>setPaginationSelectedIdx(paginationMaxIdx-3)}> {paginationMaxIdx-3} </div> : <></>}
                    {paginationSelectedIdx === paginationMaxIdx ? <div onClick={()=>setPaginationSelectedIdx(paginationMaxIdx-2)}> {paginationMaxIdx-2} </div>: <></>}


                    {
                        <>
                            {paginationSelectedIdx !== 2 && paginationSelectedIdx !== 1 ? <div onClick={e => setPaginationSelectedIdx(Number(e.target.id))} id={paginationSelectedIdx-1} className="pagination-number"> {paginationSelectedIdx-1} </div> : <></>}
                            <div onClick={e => setPaginationSelectedIdx(Number(e.target.id))} id={paginationSelectedIdx} className="pagination-number selected-pagination"> {paginationSelectedIdx} </div>
                            {paginationSelectedIdx !== paginationMaxIdx-1 && paginationSelectedIdx !== paginationMaxIdx ?  <div onClick={e => setPaginationSelectedIdx(Number(e.target.id))} id={paginationSelectedIdx+1} className="pagination-number"> {paginationSelectedIdx+1} </div> : <></>}
                        </>
                    }
                    
                    {paginationSelectedIdx === 1 ? <div onClick={() => setPaginationSelectedIdx(3)}> 3 </div> : <></>}
                    {paginationSelectedIdx === 2 || paginationSelectedIdx === 1 ? <div onClick={() => setPaginationSelectedIdx(3)}> 4 </div> :<></>}
                    


                    {/* {right3dots ? <div> <i className="far fa-ellipsis-v fa-rotate-90"></i>  </div> 
                    
                    : 
                    <></>
                    } */}
                    {paginationSelectedIdx !== paginationMaxIdx ? <div onClick={()=>setPaginationSelectedIdx(paginationMaxIdx)}> {paginationMaxIdx} </div> : <></>}
                </div>
            )
        }

        return (
            <>
                {left3dots || right3dots ? <></>:<></> }
            </>
        )
    }

    return (
        <>
            
            <div className="topBanner newspage1-1">
                <div className="simacro-logo">

                </div>
                <div className="dt-title1">
                    NEWS
                </div>

            </div>
            <div style={{color:"red", fontWeight:"500", backgroundColor:"blue"}}
            onClick={()=>setNewsObjectClicked(prev => !prev)}>testBTN</div>
            <div className={(newsObjectClicked ? "section-c newspage1-2 not-display" : "section-c newspage1-2")}>
                <div className="post-counter">
                    All Post <span>{newsData.length}</span>
                </div>

                <div className="post-container">
                
                    {newsData.slice( (0)*24 ,(paginationSelectedIdx)*24 ).map( function(item){

                        return(
                            <div key={item} className="post-object">
                                <div className='post-img'>
                                    <img  alt="err"/>
                                </div>
                                <div className='post-text'>
                                    <div className='text-title'>How ProcessMetaverse </div>
                                    <div className='text-info'>Digital twin will be trained in Object detection AI Model</div>
                                    <div className='text-date'>2023-03-02</div>
                                </div>
                            </div>

                        )
                    })}

                                
                    
            </div>              
                {/* <div className="table-pagination-box-newspage">
                    <div className="border-box">
                        <div className="left-arrow" onClick={function(){
                            if(paginationSelectedIdx !== 1){
                                setPaginationSelectedIdx(prev => Number(prev)-1)
                            }
                        }}>
                            <i className="fas fa-chevron-left"></i> 
                        </div>
                        <div>

                            {paginationBox(paginationSelectedIdx, paginationMaxIdx)}

                        </div>

                        <div className="right-arrow" onClick={function(){
                            if(paginationSelectedIdx < paginationMaxIdx){
                                setPaginationSelectedIdx(prev => Number(prev) + 1)
                                console.log(paginationSelectedIdx)
                            }
                        }}>
                            <i className="fas fa-chevron-right"></i>
                        </div>
                    </div>
                    

                </div>               */}
                <div className="btn-plus">
                    <div className="icon-plus-c" onClick={()=> paginationSelectedIdx !== paginationMaxIdx ? setPaginationSelectedIdx( prev => prev+1) : setPaginationSelectedIdx(prev=>prev)}><i class="fal fa-plus"></i></div>
                </div>
            </div>
            
            <div className={(newsObjectClicked ? "section-c newspage1-2" : "section-c newspage1-2 not-display")}>

                <div className="btn-back">
                    ← Back
                </div>

                <div className="post-object-clicked">
                    <div className="text-title">
                        HOW PROCESS METAVERSE
                    </div>
                    <div className="text-date">
                        2023-03-02
                    </div>
                    <div className="post-img">
                        <img/>
                    </div>
                    <div className="text-info">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                        aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                        takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                        tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
                        rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet
                    </div>
                    
                </div>

                <div className="post-object-readmore">
                    <div className="text-title">
                        Read More
                    </div>
                    <div className="readmore-box">
                        <div className="three-object-box">
                            <div className="post-object">
                                <div className='post-img'>
                                    <img  alt="err"/>
                                </div>
                                <div className='post-text'>
                                    <div className='text-title'>How ProcessMetaverse </div>
                                    <div className='text-info'>Digital twin will be trained in Object detection AI Model</div>
                                    <div className='text-date'>2023-03-02</div>
                                </div>
                            </div>
                            <div className="post-object">
                                <div className='post-img'>
                                    <img  alt="err"/>
                                </div>
                                <div className='post-text'>
                                    <div className='text-title'>How ProcessMetaverse </div>
                                    <div className='text-info'>Digital twin will be trained in Object detection AI Model</div>
                                    <div className='text-date'>2023-03-02</div>
                                </div>
                            </div>
                            <div className="post-object">
                                <div className='post-img'>
                                    <img  alt="err"/>
                                </div>
                                <div className='post-text'>
                                    <div className='text-title'>How ProcessMetaverse </div>
                                    <div className='text-info'>Digital twin will be trained in Object detection AI Model</div>
                                    <div className='text-date'>2023-03-02</div>
                                </div>
                            </div>
                        </div>
                        <div className="btn-list-box">
                            <div className="btn-list">
                                List
                            </div>
                        </div>


                    </div>
                    

                </div>



            </div>


            <div className="footer">
                <div className="part-1">
                    <div className="left">
                        <div className='link-btn'>
                            Connect With Us
                        </div>
                        <div>
                            
                        </div>
                    </div>
                    <div className="right">
                        <div className='link-btn'>
                        Privacy
                        </div>
                        <div className='link-btn'>
                        Security Policy 
                        </div>
                    </div>
                    
                </div>
                <div className="part-3">
                    © 2018-2023 SIMACRO, LLC
                </div>


        </div>
        </>
    )
}

export default NewsPage;