import React, { Component } from 'react';

class Hero extends React.Component {

    componentDidMount () {

        let timeline = anime.timeline()

        window.addEventListener('scroll', (event) => {

            let scrollY = window.scrollY
 
            anime({
                targets: "#firstWord",
                marginLeft: 360 + scrollY*2,
                loop: false,
                delay: 0,
                easing: "easeOutQuint"
            });

            anime({
                targets: "#secondWord",
                marginRight: 360 + scrollY*2,
                loop: false,
                delay: 0,
                easing: "easeOutQuint"
            });
        })
    }

    render() {

        return (
            <div id="hero">
                <div id="firstWord">CREATIVE</div>
                <div id="secondWord">DEVELOPER</div>
            </div>
        )

    }
}

export default Hero