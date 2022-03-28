import React, { Component } from 'react';
// import Link from 'next/link'
import anime from '../scripts/anime.js';
import ContactForm from './contactForm.jsx';

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

        const bubbles = document.querySelectorAll('.bubble')
        let preventDelay = 0

        const contactOffset = document.getElementById('contact').offsetTop

        console.log('contactOffset :', contactOffset)


        window.addEventListener('scroll', (event) => {

            let scrollY = window.scrollY

            if (scrollY > contactOffset) {
                document.getElementById('contact').classList.add('show-bubbles')
            } else {
                document.getElementById('contact').classList.remove('show-bubbles')
            }

        })

        for (let bubble of bubbles) {

            let nbrOfI = 0

            //function to print occurrence of character
            function printans( ans )
            {
            for( let [ key ,value] of ans)
            {
                // if()
                // console.log(`${key}  occurs  ${value} times` );
                if (key === 'i' || key === 'l' || key === 'Ç' || key === '.' || key === ':') nbrOfI += value
                if (key === 'k' || key === 'd' || key === '@' || key === 'w' || key === 'f' || key === 'h') nbrOfI -= value
                // console.log(nbrOfI)
                
            }
            
            }
            
            // function count occurrence of character
            function count( str , outp_map )
            {
            for( let i = 0 ;i < str.length ;i++)
            {
            
                let k = outp_map.get(str[i]);
                outp_map.set(str[i], k+1) ;
                    
                
            }
            //calling  print function
            printans(outp_map);
            }
            
            //function create map to count character
            function count_occurs( test , callback )
            {
            //checking string is valid or not
            if( test.length === 0 )
            {
                console.log(" empty string ");
                return ;
            }
            else
            {
                // map for storing count values
                let ans = new Map();
                for( let i = 0 ;i < test.length;i++)
                {
                ans.set(test[i], 0);
                }
                
                callback( test ,ans);
                
            }
            
            }
            
            // test string
            let test =  "helloworld";
            count_occurs( bubble.innerText ,count);


            //////////////////////////////////////////////////////////


            let t1 = preventDelay
            console.log('t1 :', t1)
            let t2 = bubble.innerText.length
            let br = bubble.querySelectorAll('br').length + 1
            console.log('br :', br)
            console.log('t2 :', t2)
            preventDelay += t2

            let animation = anime.timeline({
                targets: bubble,
                easing: "easeOutQuart"
            });
        
            animation
            .add({
                translateY: ['100px', 0],
                opacity: [0, 1],
                delay: 100 * t1 + anime.random(500, 1500)
            }, '+=1000')
            .add({
                width: (30 + (t2 * 10) - ((nbrOfI * 1/br) * 4)) / br,
                // width: bubble.querySelector('.txt').offsetWidth,
                height: 23 * br + (br * 10),
                delay: 50 * t2
            }, '-=500')
            .add({
                targets: bubble.querySelector('.loader'),
                opacity: 0
            }, '-=1500')
            .add({
                targets: bubble.querySelector('.txt'),
                opacity: 1
            }, '-=500')

            animation.finished.then(console.log('finished'));
            // console.log('bubble height :', bubble.querySelector('.txt').offsetHeight, '\nbubble width :', bubble.querySelector('.txt').offsetWidth)

        }

        // anime({
        //     targets: bubbles,
        //     translateY: ['100px', 0],
        //     opacity: [0, 1],
        //     loop: false,
        //     delay: function(el, i, l) {
        //         return i * 500;
        //     },
        //     easing: "easeOutQuart",
        //     complete: function(anim) {
        //         console.log('finish')
        //     }
        // });

    }

    render() {

        return (
            <div id="contact">
                <div className="bubbles">
                    <div className="bubble">
                        <div className="loader"><span></span><span></span><span></span></div>
                        <span className="txt">Alors ?</span>
                    </div>
                    <div className="bubble">
                        <div className="loader"><span></span><span></span><span></span></div>
                        <span className="txt">Ça te plait ?</span>
                    </div>
                    <div className="bubble">
                        <div className="loader"><span></span><span></span><span></span></div>
                        <span className="txt">N'hésite pas à me contacter<br /> 
                        via le formulaire ou par mail :</span>
                    </div>
                    <div className="bubble">
                        <div className="loader"><span></span><span></span><span></span></div>
                        <span className="txt"><a>karim@badwork.fr</a></span>
                    </div>
                </div>
                <div className="my-contact-form">
                    <ContactForm />
                </div>
            </div>
        )

    }
}

export default Contact