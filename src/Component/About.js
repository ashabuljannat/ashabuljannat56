import React from 'react';
import'./About.css';
import profile from '../Image/profile.jpg'
import Education from './Education';


const About = () => {
    return (
         
          
            <section class="about" id="about">
            <div class="max-width">
                <h2 class="title">
                    About me</h2>
                <div class="about-content">
                    <div class="column left">
                        <img src={profile} alt=""/>
                    </div>
                    <div class="column right">
                        <div class="text">
                            I'm Alif and I'm a <span class="typing-2"></span> <br/>
                            Developer, Blogger, Designer, Freelancer, Social Worker</div>
                        <p>
                            Hello, My name is Ashabul jannat. I am a Devolper and also a Designer.If you have asany Project or if you want make a software for your bisnes conatact me.
                            I make as soon as possibale.You really like my work,if you don’t i change this until you like I give you seticfaction result.
                            I am a Devolper and also a Designer.If you have asany Project or if you want make a software for your bussniess conatact me.I make your project as soon as possible.   
                        </p>
                        <a href="https://drive.google.com/file/d/1O2HkH1lh1Z-_uCLHdZDZ1fYsB6u9gIYv/view?usp=sharing">Download CV</a><a href="/about">Read more</a>
                    </div>
                   
                   <Education></Education>
                    
                    
                   
                    
                    
                   
                </div>
           
            </div>
        </section>
         
      
    );
};

export default About;