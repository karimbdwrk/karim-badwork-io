import React, { Component } from 'react';
import anime from '../scripts/anime.js';
import Parallax from 'parallax-js'

class Works extends React.Component {

    componentDidMount () {

    //     let timeline = anime.timeline()

    //     window.addEventListener('scroll', (event) => {

    //         let scrollY = window.scrollY
 
    //         anime({
    //             targets: "#memoEmoji",
    //             translateY: -scrollY/2,
    //             loop: false,
    //             delay: 0,
    //             easing: "easeOutQuint"
    //         });
    //     })

        // var workTitles = document.getElementsByClassName('work-title')
        // for (let title of workTitles) {
        //     new Parallax(title)
        // }
    }

    render() {

        return (
            <div id="works">
                <div className="selected-works">
                    <h2>SELECTED_<br /> &nbsp;&nbsp;WORKS</h2>
                    <div className="works-list">
                        <div className="work">
                            <div className="work-title">
                                <h3>Koleeum_<br /> Immo</h3>
                                <p className="work-description">Agence immobilière 100% digitale</p>
                            </div>
                            <div className="stack">
                                <p>UX & Dev</p>
                            </div>
                        </div>
                        <div className="work">
                            <div className="work-title">
                                <h3>Koleeum_<br /> Immo</h3>
                                <p className="work-description">Agence immobilière 100% digitale</p>
                            </div>
                            <div className="stack">
                                <p>UX & Dev</p>
                            </div>
                        </div>
                        <div className="work">
                            <div className="work-title">
                                <h3>Koleeum_<br /> Immo</h3>
                                <p className="work-description">Agence immobilière 100% digitale</p>
                            </div>
                            <div className="stack">
                                <p>UX & Dev</p>
                            </div>
                        </div>
                        <div className="work">
                            <div className="work-title">
                                <h3>Koleeum_<br /> Immo</h3>
                                <p className="work-description">Agence immobilière 100% digitale</p>
                            </div>
                            <div className="stack">
                                <p>UX & Dev</p>
                            </div>
                        </div>
                        <div className="work">
                            <div className="work-title">
                                <h3>Koleeum_<br /> Immo</h3>
                                <p className="work-description">Agence immobilière 100% digitale</p>
                            </div>
                            <div className="stack">
                                <p>UX & Dev</p>
                            </div>
                        </div>
                        <div className="work">
                            <div className="work-title">
                                <h3>Koleeum_<br /> Immo</h3>
                                <p className="work-description">Agence immobilière 100% digitale</p>
                            </div>
                            <div className="stack">
                                <p>UX & Dev</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}

export default Works