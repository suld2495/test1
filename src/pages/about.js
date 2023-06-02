import {useEffect} from "react";

const About = () => {

    useEffect(()=>{
        console.log(process.env)
        fetch(process.env.NEXT_PUBLIC_API_URL+'api/hello')
            .then(type => type.json())
            .then(result => {
                console.log(result)
            })
    })
    return <div>
        asd
    </div>
}

export default About