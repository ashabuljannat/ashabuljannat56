import React from 'react';
import './Navbar.css';
import $ from 'jquery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp, faBars, faHeart } from '@fortawesome/free-solid-svg-icons'



const navbar = () => {

      $(document).ready(function(){
        
        $(window).scroll(function(){
            if(this.scrollY > 20){
                $('.navbar').addClass("sticky");
            }else{
                $('.navbar').removeClass("sticky");
            }
            
            if(this.scrollY > 500){
                $('.scroll-up-btn').addClass("show");
            }else{
                $('.scroll-up-btn').removeClass("show");
            }
        });

        $('.scroll-up-btn').click(function(){
            $('html').animate({scrollTop: 0});
            $('html').css("scrollBehavior", "auto");
        });
    
        $('.navbar .menu li a').click(function(){
            $('html').css("scrollBehavior", "smooth");
        });
    
    
        $('.menu-btn').click(function(){
            $('.navbar .menu').toggleClass("active");
            $('.menu-btn i').toggleClass("active");
        });

      });

    return (
        <div>
        <div className="scroll-up-btn">
        <FontAwesomeIcon icon={faAngleUp} /> 
        </div>
      
        <nav class="navbar">
        <div class="max-width">
            <div class="logo">
                <a href="/">We <FontAwesomeIcon icon={faHeart } /><span> Muhammad(s)</span></a></div>
               
            <ul class="menu">
                <li><a href="/" class="menu-btn">Home</a></li>
                <li><a href="/about" class="menu-btn">About</a></li>
                <li><a href="#services" class="menu-btn">Services</a></li> 
                <li><a href="/skill" class="menu-btn">Skills</a></li>
                <li><a href="/projects" class="menu-btn">Projects</a></li>
                <li><a href="/blog" class="menu-btn">Blogs</a></li>
                <li><a href="/contact" class="menu-btn">Contact</a></li>
            </ul>
            <div class="menu-btn">
               <FontAwesomeIcon icon={faBars} /> 
            </div>

        </div>
        </nav>
        </div>
    );
};

export default navbar;