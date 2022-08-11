import { Container, Row, Col } from "react-bootstrap";
import logo from '../assets/img/play-logo.svg';


export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <a href='/'>
            <img style={{height:'150px', width:'150px'}} src={logo} alt="Logo" />
            </a>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <h1 style={{textAlign:'center'}}>PlayList</h1>
            <p>List what you play, play what you list!</p>
            <p>Thank you for using our App! </p>
            <p>- Ángel, Gabe, Allison and Angelo</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}