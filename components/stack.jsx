import React, { Component } from 'react';
import anime from '../scripts/anime.js';
import Parallax from 'parallax-js';

class Stack extends React.Component {

    componentDidMount () {

        // let timeline = anime.timeline()

        // window.addEventListener('scroll', (event) => {

        //     let scrollY = window.scrollY

        //     if (scrollY < window.innerHeight) {
        //         anime({
        //             targets: "#firstWord",
        //             marginLeft: 360 + scrollY*3,
        //             loop: false,
        //             delay: 0,
        //             easing: "easeOutQuart"
        //         });
    
        //         anime({
        //             targets: "#secondWord",
        //             marginRight: 360 + scrollY*4,
        //             loop: false,
        //             delay: 0,
        //             easing: "easeOutQuart"
        //         });
        //     }

        //     if (scrollY > (window.innerHeight/3)) {
        //         document.querySelector('.social-container').classList.add('hide')
        //         console.log('hide')
        //     } else {
        //         document.querySelector('.social-container').classList.remove('hide')
        //     }
 

        // })

        // anime({
        //     targets: ".logos-container img",
        //     translateY: [0, '-30px'],
        //     loop: true,
        //     direction: 'alternate',
        //     delay: function() { return anime.random(0, 400); },
        //     easing: "easeInOutQuart", 
        //     duration: 5000
        // });

        var imgs = document.querySelectorAll('.logos-container img')
        for (let img of imgs) {
            new Parallax(img)
        }
    }

    render() {

        return (
            <div id="stack">
                <h2>FAV_<br />STACK</h2>
                <div className="logos-container">
                    <img className="react-logo" src="https://res.cloudinary.com/db9fhztig/image/upload/v1648324272/react-logo_ok3jnm.svg" />
                    <img className="tailwind-logo" src="https://res.cloudinary.com/db9fhztig/image/upload/v1648324270/tailwind-css-2_rqti0v.svg" />
                    <img className="next-logo" src="https://res.cloudinary.com/db9fhztig/image/upload/v1648332986/nextjs-logo-FFF_sypifl.svg" />
                    <img className="strapi-logo" src="https://res.cloudinary.com/db9fhztig/image/upload/v1648324270/strapi-logo_dmowo3.svg" />
                    <img className="graphql-logo" src="https://res.cloudinary.com/db9fhztig/image/upload/v1648324270/graphql-logo_eaovg6.svg" />
                    <img className="bootstrap-logo" src="https://res.cloudinary.com/db9fhztig/image/upload/v1648324270/bootstrap-5-logo_urlpqe.svg" />
                    <img className="woo-logo" src="https://res.cloudinary.com/db9fhztig/image/upload/v1648324270/woocommerce-logo_jvo0pq.svg" />
                    <img className="anime-logo" src="https://res.cloudinary.com/db9fhztig/image/upload/v1648324204/anime-mini-logo_schixq.svg" />
                    <img className="shopi-logo" src="https://res.cloudinary.com/db9fhztig/image/upload/v1648324270/shopify-logo_yw6msf.svg" />
                    <img className="glide-logo" src="https://res.cloudinary.com/db9fhztig/image/upload/v1648332981/glidejs-logo-FFF_a6bls2.svg" />
                </div>
            </div>
        )

    }
}

export default Stack