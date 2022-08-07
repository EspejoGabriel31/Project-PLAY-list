import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'

// import {useState, useEffect} from 'react'
import './App.css';
import Home from './components/Home'
import New from './components/New';
import About from './components/About';


import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

function App() {

  // const [data, setData] = useState(null)

  // useEffect(() => {
  //   fetch('/api')
  //   .then((res) => res.json())
  //   .then((data) => {
  //     setData(data.message)
  //   })
  // }, [])

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
            <Route path="/" element={<About />}/>
          </Routes>
        </div>
      </Router>
        {/* <p>
          {!data ? 'Loading...' : data}
        </p> */}

    </div>
  );
}

export default App;
