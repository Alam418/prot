import React, { useEffect, useState } from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import headerImg from "../assets/media/background.png"

export const Banner = () => {
    // const [loopNum, setLoopNumber] = useState(0);
    // const [isDeleting, setIsDeleting] = useState(false);
    // const toRotate = ["kami", "bukan", "wibu"];
    // const [text, setText] = useState('');
    // const [delta, setDelta] = useState(300 - Math.random() * 100);
    // const period = 2000;

    // useEffect(() => {
    //     const ticker = setInterval(() => {
    //         tick();
    //     }, delta);

    //     return () => { clearInterval(ticker) };
    // }, [text])

    // const tick = () => {
    //     let i = loopNum % toRotate.length;
    //     let fullText = toRotate[i];
    //     let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    //     setText(updatedText);
    //     if (isDeleting) {
    //         setDelta(prevDelta => prevDelta / 2)
    //     }

    //     if (!isDeleting && updatedText === fullText) {
    //         setIsDeleting(true);
    //         setDelta(period);
    //     } else if (isDeleting && updatedText === '') {
    //         setIsDeleting(false);
    //         setLoopNumber(loopNum + 1);
    //         setDelta(500);
    //     }

    // }


    return (
        <section className='banner' id='home'>
            <Container>
                <h1 className='tagline'>AgoZ</h1>
                <h1><span className='wrap'> kami asik</span></h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel condimentum neque, id ullamcorper velit. Duis non libero id ipsum consectetur facilisis.</p>
                <button onClick={() => console.log('connect')}>See More</button>
            </Container>
        </section>
    )


}