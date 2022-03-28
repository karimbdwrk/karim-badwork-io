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
                                <p className="work-description">Agence Immobilière 100% Digitale</p>
                            </div>
                            <div className="stack">
                                <p>UX, UI & Dev</p>
                            </div>
                        </div>
                        <div className="work">
                            <div className="work-title">
                                <h3>Quartier_<br /> 10h10</h3>
                                <p className="work-description">Agence d'ID</p>
                            </div>
                            <div className="stack">
                                <p>UX, UI & Dev</p>
                            </div>
                        </div>
                        <div className="work">
                            <div className="work-title">
                                <h3>Encre_<br /> Atelier</h3>
                                <p className="work-description">E-shop Artwear & Home</p>
                            </div>
                            <div className="stack">
                                <p>UX & Dev</p>
                            </div>
                        </div>
                        <div className="work">
                            <div className="work-title">
                                <h3>Cubeek_<br /> 3D</h3>
                                <p className="work-description">E-shop Impression 3D</p>
                            </div>
                            <div className="stack">
                                <p>UX & UI</p>
                            </div>
                        </div>
                        <div className="work">
                            <div className="work-title">
                                <h3>Clin_<br /> d'Œil Paris</h3>
                                <p className="work-description">E-shop Créateur Textile <span>(soon)</span></p>
                            </div>
                            <div className="stack">
                                <p>UX, UI & Dev</p>
                            </div>
                        </div>
                        <div className="work">
                            <div className="work-title">
                                <h3>Agence_<br /> Leon</h3>
                                <p className="work-description">Agence de Conseil en Relations Médias</p>
                            </div>
                            <div className="stack">
                                <p>UX & Dev</p>
                            </div>
                        </div>
                        <div className="work">
                            <div className="work-title">
                                <h3>Nascita_<br /> Italia</h3>
                                <p className="work-description">E-shop Épicerie Fine Italienne</p>
                            </div>
                            <div className="stack">
                                <p>UX, UI & Dev</p>
                            </div>
                        </div>
                        <div className="work">
                            <div className="work-title">
                                <h3>Structure_<br /> Paris</h3>
                                <p className="work-description">E-shop Sneakers & Street Culture</p>
                            </div>
                            <div className="stack">
                                <p>Dev</p>
                            </div>
                        </div>
                        <div className="work">
                            <div className="work-title">
                                <h3>Parashop_<br /></h3>
                                <p className="work-description">E-shop Santé, Beauté & Bien-être</p>
                            </div>
                            <div className="stack">
                                <p>Dev</p>
                            </div>
                        </div>
                        <div className="work">
                            <div className="work-title">
                                <h3>P F D_<br /></h3>
                                <p className="work-description">E-shop d'Objets Pub</p>
                            </div>
                            <div className="stack">
                                <p>Dev</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}

export default Works