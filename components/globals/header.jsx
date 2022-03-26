import React, { Component } from 'react'
import { Container, Row, Col, Nav } from 'react-bootstrap'
import anime from '../../scripts/anime.js'

class Header extends React.Component {

  // componentDidMount() {
  //   document.getElementById('navBtn').addEventListener('click', () => {
  //     console.log('click nav')

  //     let timeline = anime.timeline({
  //         loop: false,
  //         delay: 0,
  //         duration: 750,
  //         easing: "easeOutQuint"
  //     })

  //     timeline
  //     .add({
  //         targets: "#customNav",
  //         height: [0, '100vh']
  //     })
  //     .add({
  //         targets: "#customNav ul",
  //         translateY: ['-100%', '0'], 
  //         duration: 100
  //     })
  //     .add({
  //         targets: "#customNav ul li",
  //         opacity: [0, 1],
  //         translateY: [-50, 0],
  //         delay: function(el, i, l) {
  //           return i * 100;
  //         }

  //     })

  //   })
  // }

  render() {

    return (
          <header id="header">
            <nav id="customNav">
              <ul>
                <li>Profil</li>
                <li>Works</li>
                <li>Stack</li>
                <li>Contact</li>
              </ul>  
            </nav>
            <Container fluid>
              <Row>
                <Col><div className='logo'>KARIM B.</div></Col>
                <Col>
                  {/* <Button id="navBtn" variant="warning">Click</Button> */}
                  <Nav activeKey="/home">
                    <Nav.Item>
                      <Nav.Link eventKey="link-1">About</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="link-2">Works</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="link-3">Stack</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="link-4">Contact</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
              </Row>
            </Container>  
          </header>
      )

  }
}

export default Header