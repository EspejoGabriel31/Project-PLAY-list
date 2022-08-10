
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'
import {useState, useEffect} from 'react'

import './App.css';
import Home from './components/Home'
import New from './components/New';
import About from './components/About';
import GameCatalog from './components/GameCatalog';

import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import NavBar  from './components/NavBar';
import { Banner } from './components/Banner';
import  ImageSlider  from './/components/Slider'

function App() {

  const [data, setData] = useState(null)

  useEffect(() => {
    fetch('/api')
    .then((res) => res.json())
    .then((data) => {
      setData(data.message)
    })
  }, [])

  return (
    
    <div className="App">

      <Router>
        <header>
          <h1 className="title">PLAY-list</h1>
          <Container>
            <Nav defaultActiveKey="/" variant="tabs" fill>
              <Nav.Item>
                <Nav.Link href="/">
                <Link to="/">Home</Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey={"newPage"}>
                  <Link to="/new">Create</Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey={"?"}>
                  <Link to="/game-catalog">Game Catalog</Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey={"aboutPage"}>
                  <Link to="/about">About Us</Link>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Container>
        </header>
      

        <div className="display">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<New />} />
            <Route path="/game-catalog" element={<GameCatalog/>}/>
            <Route path="/about" element={<About />}/>
          </Routes>
        </div>
      </Router>
        <p>
          {!data ? 'Loading...' : data}
        </p>
        <NavBar/>
    </div>
    
  );
}

export default App;