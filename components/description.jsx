import React, { Component } from 'react';
import Link from 'next/link'
import { Container, Row, Col } from 'react-bootstrap'
import anime from '../scripts/anime.js'
import Parallax from 'parallax-js'

class Description extends React.Component {

    // componentDidMount () {

    //     let timeline = anime.timeline()

    //     window.addEventListener('scroll', (event) => {

    //         let scrollY = window.scrollY
 
    //         anime({
    //             targets: ".rs-gif",
    //             translateY: -scrollY/2,
    //             loop: false,
    //             delay: 0,
    //             easing: "easeOutQuint"
    //         });
    //     })

    //     var description = document.querySelector('.desc-container')
    //     console.log(description)
    //     new Parallax(description)
    // }

    render() {

        return (
            <div id="description">
                <div data-depth="0.2" className="desc-container">
                    <h2>Salut 👋, <br />moi c'est Karim</h2>
                    <p>UI / UX Designer 🖍️ & Front End Developer 🧑‍💻.  <br />
                    Mon objectif est la création d’interfaces élégantes & professionnelles, pour construire des experiences percutantes & intuitives 📱.</p>
                </div>
                <div className="social-container">
                    <Link href="#">
                        <a><img src="https://res.cloudinary.com/db9fhztig/image/upload/v1648312775/behance-logo-000_kpalvj.svg" /></a>
                    </Link>
                    <Link href="#">
                        <a><img src="https://res.cloudinary.com/db9fhztig/image/upload/v1648312782/github-logo-000_tf6lvr.svg" /></a>
                    </Link>
                </div>
            </div>
        )

    }
}

export default Description