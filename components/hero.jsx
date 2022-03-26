import React, { Component } from 'react';
import Link from 'next/link'
import anime from '../scripts/anime.js';

class Hero extends React.Component {

    componentDidMount () {

        let timeline = anime.timeline()

        window.addEventListener('scroll', (event) => {

            let scrollY = window.scrollY

            if (scrollY < window.innerHeight) {
                anime({
                    targets: "#firstWord",
                    marginLeft: 360 + scrollY*3,
                    loop: false,
                    delay: 0,
                    easing: "easeOutQuart"
                });
    
                anime({
                    targets: "#secondWord",
                    marginRight: 360 + scrollY*4,
                    loop: false,
                    delay: 0,
                    easing: "easeOutQuart"
                });
            }

            if (scrollY > (window.innerHeight/3)) {
                document.querySelector('.social-container').classList.add('hide')
                console.log('hide')
            } else {
                document.querySelector('.social-container').classList.remove('hide')
            }
 

        })
    }

    render() {

        return (
            <div id="hero">
                <div className="hero-txt" id="firstWord">CREATIVE</div>
                <div className="hero-txt" id="secondWord">DEVELOPER</div>
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

export default Hero