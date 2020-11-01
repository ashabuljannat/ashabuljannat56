import React from 'react';
import './Home.css';
import $ from 'jquery';



const Home = () => {

    // $(document).ready(function(){

    //     var typed = new Typed(".typing", {
    //         strings: ["Developer", "Blogger", "Designer", "Freelancer","Social Worker"],
    //         typeSpeed: 100,
    //         backSpeed: 60,
    //         loop: true
    //     });
    
    //     var typed = new Typed(".typing-2", {
    //         strings: ["Developer", "Blogger", "Designer", "Freelancer","Social Worker"],
    //         typeSpeed: 100,
    //         backSpeed: 60,
    //         loop: true
    //     });
    
    //     $('.carousel').owlCarousel({
    //         margin: 20,
    //         loop: true,
    //         autoplayTimeOut: 2000,
    //         autoplayHoverPause: true,
    //         responsive: {
    //             0:{
    //                 items: 1,
    //                 nav: false
    //             },
    //             600:{
    //                 items: 2,
    //                 nav: false
    //             },
    //             1000:{
    //                 items: 3,
    //                 nav: false
    //             }
    //         }
    //     });
    // })


    return (
        <div>
        <section class="home" id="home">
        <div class="max-width">
            <div class="home-content">
                <div class="text-1">
                    Hello, my name is</div>
                <div class="text-2">
                    MD. Ashabul <span style={{color: "aqua"}}>Jannat</span> Alif</div>
                <div class="text-3">
                    And I'm a <span class="typing"></span>  Developer, Blogger, Designer, Freelancer, Social Worker</div>
                <a href="#">Hire me</a>
            </div>
        </div>
    </section>
        </div>
    );
};

export default Home;