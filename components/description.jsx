import React, { Component } from 'react';
import anime from '../scripts/anime.js';

class Description extends React.Component {

    componentDidMount () {

        let timeline = anime.timeline()

        window.addEventListener('scroll', (event) => {

            let scrollY = window.scrollY
 
            anime({
                targets: "#description .rs-gif",
                translateY: -scrollY/2,
                loop: false,
                delay: 0,
                easing: "easeOutQuint"
            });

            anime({
                targets: "#description .title",
                translateX: -scrollY,
                loop: false,
                delay: 0,
                easing: "easeOutQuint"
            });
        })
    }

    render() {

        return (
            <div id="description">
                <img src="https://res.cloudinary.com/db9fhztig/image/upload/v1647382530/rs_nqfpou.gif" width="480" height="264" className="rs-gif" />
                <h2 className="title">WHO AM I ?</h2>
            </div>
        )

    }
}

export default Description