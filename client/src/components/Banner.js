import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import TrackVisibility from 'react-on-screen';
import playlistImage from '..//assets/img/PlayList2.png'



export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ['🕹️👾' ,'🛫💺', '🥷🏯', '💩🚽', '🚅💺', '🥳🎉', '👻','🏖️', '🕺💃','💘😍', '🌧️☔⚡', '😢☁️', '😡🤬' ];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() *100);
    const [index, setIndex] = useState(1);
    const period = 1000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick()
        }, delta )

        return () => { clearInterval(ticker)}
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
    
        setText(updatedText);
    
        if (isDeleting) {
          setDelta(prevDelta => prevDelta / 2);
        }
    
        if (!isDeleting && updatedText === fullText) {
          setIsDeleting(true);
          setIndex(prevIndex => prevIndex - 1);
          setDelta(period);
        } else if (isDeleting && updatedText === '') {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
          setIndex(1);
          setDelta(500);
        } else {
          setIndex(prevIndex => prevIndex + 1);
        }
      }

    return (
        <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                
                <h1>{`A PlayList for every situation`} </h1>
                <h1><span className="txt-rotate" dataPeriod="1000" data-rotate='[]'><span className="wrap">{text}</span></span></h1>
                  <p>Do you ever feel overwhelmed by your backlog of games or don't know which games to bring in a specific situation? We got you covered! PlayList is the ultimate application that allows you to keep track of the games you want to play and create playlists for specific events such as parties, family gatherings, having a cold one with the boys, using the restroom, and much more! </p>
                   
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img className='resize' src={playlistImage} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}