import React, { Component } from 'react';
import Head from 'next/head';
import Script from 'next/script'
import Header from '../components/globals/header'
import { Container, Row, Col } from 'react-bootstrap'
import Hero from '../components/hero'
import Description from '../components/description'
import Works from '../components/works'
import Stack from '../components/stack'
import Contact from '../components/contact'
import Footer from '../components/globals/footer'

export default class Home extends React.Component {

  componentDidMount() {
    window.addEventListener('scroll', (event) => {

      let scrollY = window.scrollY
      console.log(scrollY)

      if (scrollY > window.innerHeight) {
        console.log('scroll 100%')
      }

      anime({
        targets: '#illustration svg path',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 1500,
        delay: function(el, i) { return i * 250 },
        direction: 'alternate',
        loop: true
      });

    })
  }

  render(){

    return (
      <>
        <Head>
          <title>Karim - Creative Developer</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
          {/* <link rel="stylesheet" href="https://use.typekit.net/hgs8pyn.css"></link>
          <link rel="stylesheet" href="node_modules/@glidejs/glide/dist/css/glide.core.min.css" /> */}
          {/* <link rel="stylesheet" href="node_modules/@glidejs/glide/dist/css/glide.theme.min.css" /> */}
          {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.0/anime.min.js" integrity="sha256-hBMojZuWKocCflyaG8T19KBq9OlTlK39CTxb8AUWKhY=" crossorigin="anonymous"></script> */}
        </Head>
        <div id="glitchBg"></div>
        <Container fluid>
          <Row>
            <Col>
              <Header />
              <Hero />
              <Container>
                <Row>
                  <Col xs={7}>
                    <Description />
                  </Col>
                  <Col xs={5}>
                    <div id="profilPic">
                      <img src="https://res.cloudinary.com/db9fhztig/image/upload/v1648504160/profil-krimo-bw_ap16bs.jpg" />
                    </div>
                    <Works />
                    <Stack />
                  </Col>
                </Row>
                <Row>
                  <Col xs={7}>
                    <div id="quote">
                      <p>I???m always interested about cool stuff ????. <br />Are you minding project? ????</p>
                    </div>
                  </Col>
                  <Col xs={5}>
                    <Contact />
                  </Col>
                </Row>
              </Container>
              <Footer />
            </Col>
          </Row>
        </Container>

        <Script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.0/anime.min.js" integrity="sha256-hBMojZuWKocCflyaG8T19KBq9OlTlK39CTxb8AUWKhY=" crossorigin="anonymous"></Script>
      </>
    )
  }
}
