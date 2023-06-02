import React, {useRef} from 'react'
import {Footer, MenuComponent, SimacroLogoComponent} from '@/lib/CommonComponent'
// import clientPromise from "../lib/mongodb";

const EvenBox = ({data, isLast}) => {
    let detail = data.detail || []
    let title = data.title
    let scope = data.scope
    let software = data.software || []
    let img = data.img

    return <>
        <div className="section-e dt-even">
            <div className="contents">
            <div className="contents__titleBox">
                {title}
            </div>
            <div className="contents__textBox">
                <div>
                    <div className="square" style={{color:"rgb(180, 88, 109)"}}><span>■</span><br/></div>
                    <div className="contents__textBox__title" >
                        Project Scope
                    </div>
                    <div className="text">
                        {scope}
                    </div>
                </div>
                <div>
                    <div className="square" style={{color:"rgb(180, 88, 109)"}}><span>■</span><br/></div>
                    <div className="contents__textBox__title">
                        Service Detail
                    </div>
                    <div className="text">
                        <ul>
                            {detail.map(a => <li key={a}>{a}</li>)}
                        </ul>
                    </div>
                </div>
                <div>
                    <div className="square" style={{color:"rgb(180, 88, 109)"}}><span>■</span><br/></div>
                    <div className="contents__textBox__title">
                        Software
                    </div>
                    <div className="text">
                        <ul>
                            {software.map(a => <li key={a}>{a}</li>)}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="contents__imgBox">
                <img src={img} alt='err' />
            </div>
        </div>
        </div>
        {!isLast ? <div className="dtLine" /> : <></>}
    </>
}
const OddBox = ({data, isLast}) => {
    let detail = data.detail || []
    let title = data.title
    let scope = data.scope
    let software = data.software || []
    let img = data.img
    return <>
        <div className="section-e dtpage_2 dt-odd">
            <div className="contents">
            <div className="contents__titleBox">
                {title}
            </div>
            <div className="contents__imgBox">
                <img src={img} alt='err' style={{width:'80%'}} />
            </div>
            <div className="contents__textBox">
                <div>
                    <div className="square" style={{color:"rgb(180, 88, 109)"}}><span>■</span><br/></div>
                    <div className="contents__textBox__title" >
                        Project Scope
                    </div>
                    <div className="text">
                        {scope}
                    </div>
                </div>
                <div>
                    <div className="square" style={{color:"rgb(180, 88, 109)"}}><span>■</span><br/></div>
                    <div className="contents__textBox__title">
                        Service Detail
                    </div>
                    <div className="text">
                        <ul>
                            {detail.map(a => <li key={a}>{a}</li>)}
                        </ul>
                    </div>
                </div>
                <div>
                    <div className="square" style={{color:"rgb(180, 88, 109)"}}><span>■</span><br/></div>
                    <div className="contents__textBox__title">
                        Software
                    </div>
                    <div className="text">
                        <ul>
                            {software.map(a => <li key={a}>{a}</li>)}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </div>
        {!isLast ? <div className="dtLine" /> : <></>}
    </>
}
const DigitalTwinPage  = ({data}) => {

    const commonRef = useRef(null)
    const removeScrollEvent = () => {
        window.removeEventListener('scroll', commonRef.topbuttonFnc);
    }

    return(
        <>
            <MenuComponent isMain={false} removeScrollEvent={removeScrollEvent} />
            <SimacroLogoComponent/>
            <div className="topBanner textHighlight dtBanner">
                <img className="backImage" src="/img/digitaltwinpage/dtBanner.jpg" alt=""/>
                <div className="title dtTitle">ASPEN MODELING SERVICE
                </div>
                <div className="squareBox" />
            </div>
            {data.map((item, index,row ) => {
                let isLast = index + 1 === row.length

                if (index % 2 === 0) {
                    return <EvenBox data={data[index]} isLast={isLast} key={index} />
                } else {
                    return <OddBox data={data[index]} isLast={isLast} key={index} />
                }
            })}

            <div style={{margin:'100px 0'}} />

            <Footer ref={commonRef} standardOfY={420}/>
        </>
    )
}

// getServerSideProps
// getStaticProps
export const getStaticProps = async () => {
    try {
        // const client = await clientPromise;
        // const db = client.db("web");
        // let data = await db
        //     .collection("digitalTwin")
        //     .find({})
        //     .sort({})
        //     .limit(1000)
        //     .toArray();
        //
        // data = JSON.parse(JSON.stringify(data))


        // let myobj = { title:"Simulated Moving Bed (SMB) Modeling",
        //     index:19,
        //     scope:"Troubleshoot tech transfer issue and develop improved SMB model in conjunction with parallel in-house experimentation",
        //     detail:[
        //         "Achieved same high purities as standard six-column SMB, while improving at the same time the process productivity substantially",
        //         "Showed increased productivity and solvent consumption of I-SMB from partial feed and withdrawal operation vs. standard SMB"
        //     ],
        //     software:[
        //         "Aspen Custom Modeler"
        //     ],
        //     img:"/img/digitaltwinpage/img-21.png" }
        // db.collection("digitalTwin").insertOne(myobj, function(err, res) {
        //     if (err) throw err;
        //     console.log("1 document inserted");
        // });




        let data = [
            {
                "_id": "644f258987f23140951bdc74",
                "title": "Dynamic Digital Twin of Polymer Resin Manufacturing Plant",
                "scope": "Development of a dynamic plant model for producing multiple grades of polymer resin products with identification of polymer reactions, reactor configuration, and kinetic model parameters. Separation and purification steps are incorporated and the model validated against actual plant data. Finally, the model can be used to optimize the production process for improved efficiency and cost-effectiveness.",
                "detail": [
                    "Dynamics model implementation of Aspen Polymer reaction models, customized TFE and hydrogenation reactor models",
                    "Implementation of catalyst add - removal scheme, dynamically and periodiclaly.",
                    "Matching plant behavior and expected off-spec time when changing resin grades from one to the other",
                    "Development of Aspen Simulator Workbook for easier, automated manipulation and grade changes"
                ],
                "software": [
                    "Aspen Polymers",
                    "Aspen Plus",
                    "Aspen Plus Dynamics",
                    "Aspen Custom Modeler",
                    "Aspen Simulation Workbook"
                ],
                "img": "/img/digitaltwinpage/img-2.png",
                "index": 0
            },
            {
                "_id": "644f2a0387f23140951bdc76",
                "title": "Modeling of Electrolyte Organic Solvents Manufacturing Process",
                "scope": "Development of a conceptual design package of the manufacturing process of ethyl methyl carbonate (EMC) and diethyl carbonate (DEC) by transesterification of dimethyl carbonate (DMC)",
                "detail": [
                    "Recommendation of the optimal process with the product purity of 99.99 wt% and minimum energy consumption",
                    "Evaluation of customized membrane pervaporation unit, reactors, and separators"
                ],
                "software": [
                    "Aspen Custom Modeler"
                ],
                "img": "/img/digitaltwinpage/img-4.png",
                "index": 2
            },
            {
                "_id": "644f29d287f23140951bdc75",
                "title": "Dynamic Digital Twin of Industrial Crystallizers in Bio-manufacturing",
                "scope": "Development of three different types of heterogeneous suspension crystallizer models, i.e. forced-circulation crystallizer (FC), drafted-tube baffle crystallizer (DTB), and Oslo crystallizer, and model validation with empirical data",
                "detail": [
                    "Estimation of crystallization kinetics based either on nucleation rate or crystal growth rate",
                    "Development of a base Mixed-suspension, mixed-product removal (MSMPR) crystallizer model that is subsequently elaborated into three heterogeneous suspension crystallizer models",
                    "Validation of three different types of crystallizer models with both lab-scale experiments and on-site crystallizers"
                ],
                "software": [
                    "Aspen Plus",
                    "Aspen Custom Modeler"
                ],
                "img": "/img/digitaltwinpage/img-3.png",
                "index": 1
            },
            {
                "_id": "644f2d0787f23140951bdc78",
                "title": "Heterogeneous Catalytic Reactor Modeling",
                "index": 3,
                "scope": "Develop Aspen Custom Modeler (ACM) model for both dynamic and steady-state heterogenous hydrotreating trickle-bed",
                "detail": [
                    "IPredict conversion, selectivity,catalyst deactivation and productivity",
                    "Predict temperature and concentration profiles",
                    "Simulate masstransfer limitations between interfaces of gas-liquid, liquid-catalyst, and gas-catalyst",
                    "Simulate heat gain/loss by the reaction as well as thermal conduction through reactor wall and the water jackets."
                ],
                "software": [
                    "Aspen Custom Modeler",
                    "Aspen Plus Dynamic"
                ],
                "img": "/img/digitaltwinpage/img-5.png"
            },
            {
                "_id": "644f329e87f23140951bdc7a",
                "title": "Hydrotreating Bubble Column Reactor",
                "index": 5,
                "scope": "Validate and develop in-house reaction model for hydrotreating bubble column",
                "detail": [
                    "Computational fluid dynamics (CFD) reduced order model",
                    "Rigorous chemical thermodynamics",
                    "Gas-liquid and liquid-solid mass transferlimited heterogeneous reaction kinetics"
                ],
                "software": [
                    "Aspen Plus",
                    "Aspen Custom Modeler",
                    "Aspen Plus Dynamic"
                ],
                "img": "/img/digitaltwinpage/img-7.png"
            },
            {
                "_id": "644f46e287f23140951bdc82",
                "title": "Non-Ideal Mixing Reactor CFD-Aspen ROM",
                "index": 10,
                "scope": "Modeling of reactors that exhibit non-ideal mixing problems. Use of CFD for the physics of mixing and use of Aspen for the reaction chemistry of the system",
                "detail": [
                    "Construct ACM-based reduced order model (ROM) that combines CFD analysis with rigorous Aspen Custom Modeler (ACM) reaction chemistry",
                    "The CFD-ACM process model has been applied by connecting with the Aspen Dynamics in-built unit operation models, such as flash drum, heat exchangers, mixer and splitter"
                ],
                "software": [
                    "R-FLOW/CFD",
                    "ANSYS/FLUENT",
                    "Aspen Custom Modeler",
                    "Aspen Plus Dynamic"
                ],
                "img": "/img/digitaltwinpage/img-12.png"
            },
            {
                "_id": "644f481b87f23140951bdc87",
                "title": "Polymer Thin Film Evaporation Analysis",
                "index": 15,
                "scope": "Simulate performance of thin film evaporator designs from two different vendors to help make investment decision",
                "detail": [
                    "Developed multi-stage, non-equilibrium, mass transfer limited models of thin film evaporator designs capturing polymer and oligomer thermodynamics",
                    "Helped client decide on TFE vendor based on simulation’s performance"
                ],
                "software": [
                    "Aspen Plus",
                    "Aspen Polymers",
                    "Aspen Custom Modeler"
                ],
                "img": "/img/digitaltwinpage/img-17.png"
            },
            {
                "_id": "644f487887f23140951bdc89",
                "title": "Adsorption Process Modeling",
                "index": 17,
                "scope": "Process modeling of gas adsorption separation/purification by Pressure Swing Adsorption (PSA) and Temperature Swing Adsorption (TSA)",
                "detail": [
                    "Aspen Adsorption has many success stories regarding design, optimization and trouble-shooting for adsorption separation processes for gas mixtures. It can beused to model and simulate the industrial gas adsorption separation process operating on the principle of PSA, or the industrial air dryer operating on the principle of TSA"
                ],
                "software": [
                    "Aspen Adsorption",
                    "Aspen Custom Model",
                    "Aspen Plus Dynamics"
                ],
                "img": "/img/digitaltwinpage/img-19.png"
            },
            {
                "_id": "644f327287f23140951bdc79",
                "title": "Hydrogen Production by Water Electrolyzer",
                "index": 4,
                "scope": "Develop custom dynamic model of hydrogen production by water electrolyze",
                "detail": [
                    "Aspen Custom Modeler dynamic simulation model of alkaline electrolysis process to produce hydrogen from water, which represents the pilot-scale system at the client site"
                ],
                "software": [
                    "Aspen Custom Modeler"
                ],
                "img": "/img/digitaltwinpage/img-6.png"
            },
            {
                "_id": "644f330a87f23140951bdc7d",
                "title": "Bio-Reactor Modeling with Rigorous Solution Chemistry",
                "index": 7,
                "scope": "Use of a rigorous Aspen electrolyte solution thermodynamics for the design of industrial bio-reactor for the production of amino acids",
                "detail": [
                    "Constructed a solution thermodynamic model of complex ionic mixtures (T, P, xi, pH)",
                    "Constructed a reaction kinetics model with dependency of key operationalparameters(pH, modulation buffer)",
                    "Modeling and simulation of the batch experiments made in the laboratory",
                    "Fitting of the reaction kinetics parameters"
                ],
                "software": [
                    "Aspen Plus",
                    "Aspen Custom Modeler",
                    "Aspen Plus Dynamic"
                ],
                "img": "/img/digitaltwinpage/img-9.png"
            },
            {
                "_id": "644f461287f23140951bdc80",
                "title": "Biomanufacturing Plant Modeling and Optimization",
                "index": 8,
                "scope": "Design new downstream process simulation model for amino acid separation optimization",
                "detail": [
                    "Multi-column separation & purification",
                    "Thin-film evaporation system to recover high-value chemicals used for solvent gradient",
                    "Integrated process model for entire downstream plant"
                ],
                "software": [
                    "Aspen Plus",
                    "Aspen Custom Modeler",
                    "Aspen Plus Dynamic"
                ],
                "img": "/img/digitaltwinpage/img-10.png"
            },
            {
                "_id": "644f463f87f23140951bdc81",
                "title": "Modeling of drug production steps, e.g. extraction and chromatography",
                "index": 9,
                "scope": "Develop model of downstream purification ofcell-derived product for process improvement",
                "detail": [
                    "Developed custom separations model simulations",
                    "Identifiedkey equipment and operational improvement options in extraction, MPLC, and HPLC steps"
                ],
                "software": [
                    "Aspen Custom Modeler"
                ],
                "img": "/img/digitaltwinpage/img-11.png"
            },
            {
                "_id": "644f485487f23140951bdc88",
                "title": "Temperature Swing Adsorption (TSA)",
                "index": 16,
                "scope": "Model / simulate industrial air dryer operating on the principle of Temperature Swing Adsorption (TSA) in Aspen Adsorption.Troubleshoot cause of off-spec effluent",
                "detail": [
                    "Developed a KHAN Air Dryer model. The dryer is commonly used in petrochemical gas processing. It is a TSA process, and is typically filled with BASF's F-200 activated alumina.",
                    "Troubleshooted cause of off-spec effluent",
                    "Identified cause of off-spec, and action was taken"
                ],
                "software": [
                    "Aspen Adsorption"
                ],
                "img": "/img/digitaltwinpage/img-18.png"
            },
            {
                "_id": "644f48b787f23140951bdc8a",
                "title": "Non-Conventional Hybrid Separation Control Model",
                "index": 18,
                "scope": "Develop non-conventional hybrid separation model in collaboration with Professor William L. Luyben at Lehigh University",
                "detail": [
                    "Implemented and helped develop column / membrane hybrid process control cascade-structured model in ACM and Aspen Plus Dynamics",
                    "Published in Ind. Eng. Chem. Res. 2009, 48(7), pp3484-3495"
                ],
                "software": [
                    "Aspen Custom Modeler",
                    "Aspen Plus Dynamics"
                ],
                "img": "/img/digitaltwinpage/img-20.png"
            },
            {
                "_id": "644f478e87f23140951bdc84",
                "title": "Reactor Design and Optimization Service",
                "index": 12,
                "scope": "Develop CFD-Aspen ROM to analyze reactor configuration performance",
                "detail": [
                    "Developed CFD-Aspen ROM of loop reactor with rigorous electrolyte chemistry and varying design parameters that can:",
                    "Choose best reactor configuration",
                    "Minimize reactor size with no compromise to product quality",
                    "Demonstrate efficiency of model-based design over traditional design in lowering CAPEX/OPEX, and gaining process insights (design methodology, process optimization and controllability, digitalization readiness)"
                ],
                "software": [
                    "NSYS/FLUENT",
                    "Aspen Plus",
                    "Aspen Custom Modeler",
                    "Aspen Plus Dynamics"
                ],
                "img": "/img/digitaltwinpage/img-14.png"
            },
            {
                "_id": "644f32de87f23140951bdc7c",
                "title": "Blowdown Tank Simulation Model",
                "index": 6,
                "scope": "Advance in-house process modeling capability and develop custom blowdown tank models",
                "detail": [
                    "Parameter estimation",
                    "Sensitivity analysis",
                    "Temperature-dependent model and mode prediction"
                ],
                "software": [
                    "Aspen Custom Modeler"
                ],
                "img": "/img/digitaltwinpage/img-8.png"
            },
            {
                "_id": "644f470a87f23140951bdc83",
                "title": "Non-Ideal Mixing Analysis of Loop Reactor CoPolymerization",
                "index": 11,
                "scope": "Troubleshoot abnormal behavior of non-conventional reactor",
                "detail": [
                    "Developed multicompartment cell model using Aspen Custom Modeler",
                    "Compared ACM model to Aspen RCSTR model",
                    "Analyzed non-idealities with varying circulation rates for loop reactor copolymerization",
                    "Exported ACM model into Aspen Plus for process design"
                ],
                "software": [
                    "Aspen Plus",
                    "Aspen Custom Modeler",
                    "Aspen Polymers"
                ],
                "img": "/img/digitaltwinpage/img-13.png"
            },
            {
                "_id": "644f47c987f23140951bdc85",
                "title": "Polymer Process Modeling",
                "index": 13,
                "scope": "We have a long history in problem solving, design and optimization of polymer processes. Our skills have been highly appreciated by many polymer producers around the world. Validated polymer process models can be used for process and operations improvement studies instead of relying solely on experiments and plant trials.",
                "detail": [
                    "Our experiences cover following processes:",
                    "Gas HDPE/LLDPE (e.g. UNIPOL)",
                    "Slurry HDPE (reactor type: Loop, CSTR)",
                    "Gas PP (e.g. UNIPOL, Novolen, Amoco)",
                    "Slurry PP (e.g. Spheripol)"
                ],
                "software": [
                    "Aspen Plus",
                    "Aspen Polymers",
                    "Aspen Custom Modeler",
                    "Aspen Plus Dynamics"
                ],
                "img": "/img/digitaltwinpage/img-15.png"
            },
            {
                "_id": "644f47f987f23140951bdc86",
                "title": "UNIPOL Reactor Dynamics",
                "index": 14,
                "scope": "Process modeling and simulation of UNIPOL reactor, product discharge system, purge bin, and beyond",
                "detail": [
                    "Developed the following models for UNIPOL PE, resulting in improvement in process performance and operation:",
                    "Full steady-state plant model",
                    "Steady-state and dynamic reactor models with Ziegler-Natta polymerization kinetics",
                    "Product discharge system dynamics simulation"
                ],
                "software": [
                    "Aspen Plus",
                    "Aspen Polymers",
                    "Aspen Custom Modeler",
                    "Aspen Plus Dynamics"
                ],
                "img": "/img/digitaltwinpage/img-16.png"
            },
            {
                "_id": "644f48e387f23140951bdc8b",
                "title": "Simulated Moving Bed (SMB) Modeling",
                "index": 19,
                "scope": "Troubleshoot tech transfer issue and develop improved SMB model in conjunction with parallel in-house experimentation",
                "detail": [
                    "Achieved same high purities as standard six-column SMB, while improving at the same time the process productivity substantially",
                    "Showed increased productivity and solvent consumption of I-SMB from partial feed and withdrawal operation vs. standard SMB"
                ],
                "software": [
                    "Aspen Custom Modeler"
                ],
                "img": "/img/digitaltwinpage/img-21.png"
            }
        ]

        return {
            props: { data },
        };
    } catch (e) {
        console.error(e);
    }
};
// export const getServerSideProps = async () => {
//     try {
//         const client = await clientPromise;
//         const db = client.db("web");
//
//         // let myobj = { title:"Simulated Moving Bed (SMB) Modeling",
//         //     index:19,
//         //     scope:"Troubleshoot tech transfer issue and develop improved SMB model in conjunction with parallel in-house experimentation",
//         //     detail:[
//         //         "Achieved same high purities as standard six-column SMB, while improving at the same time the process productivity substantially",
//         //         "Showed increased productivity and solvent consumption of I-SMB from partial feed and withdrawal operation vs. standard SMB"
//         //     ],
//         //     software:[
//         //         "Aspen Custom Modeler"
//         //     ],
//         //     img:"/img/digitaltwinpage/img-21.png" }
//         // db.collection("digitalTwin").insertOne(myobj, function(err, res) {
//         //     if (err) throw err;
//         //     console.log("1 document inserted");
//         // });
//
//
//         const data = await db
//             .collection("digitalTwin")
//             .find({})
//             .sort({})
//             .limit(1000)
//             .toArray();
//
//         return {
//             props: { data: JSON.parse(JSON.stringify(data)) },
//         };
//     } catch (e) {
//         console.error(e);
//     }
// }

export default DigitalTwinPage
