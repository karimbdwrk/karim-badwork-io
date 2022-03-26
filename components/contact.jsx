import React, { Component } from 'react';
// import Link from 'next/link'
// import anime from '../scripts/anime.js';

class Contact extends React.Component {

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
    }

    render() {

        return (
            <div id="contact">
                <div className="bubbles">
                    <div className="bubble">
                        <span>Alors ?</span>
                    </div>
                    <div className="bubble">
                        <span>Ça te plait ?</span>
                    </div>
                    <div className="bubble">
                        <span>N'hésite pas à me contacter<br /> 
                        il y a un formulaire de contact ou <br />
                        tu peux m'envoyer un mail :</span>
                    </div>
                    <div className="bubble">
                        <span>karim@badwork.fr</span>
                    </div>
                </div>
                <div className="my-contact-form">FORM</div>
            </div>
        )

    }
}

export default Contact