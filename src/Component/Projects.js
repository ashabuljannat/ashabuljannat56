import { faHtml5, faJs, faReact } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Projects.css'




const Projects = () => {
    

    return (
        <div>
        <section class="services projects" id="services">
        <div class="max-width project">
            <h2 class="title">
                My Projects</h2>
            <div class="serv-content proj">
                <div class="card">
                    <div class="box">
               <i><FontAwesomeIcon icon={faHtml5 } /></i>
                        <div class="text">
                            Web Design</div>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem quia sunt, quasi quo illo enim.
                </p>
            </div>
            </div>
                <div class="card">
                  <div class="box">
                      <i ><FontAwesomeIcon icon={faJs } /></i>
                  <div class="text">
                Js Programming
                </div>
                        <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem quia sunt, quasi quo illo enim.</p>
                    </div>
               </div>
                <div class="card">
                    <div class="box">
                        <i ><FontAwesomeIcon icon={faReact } /></i>
                  <div class="text">
                          React  Apps Design</div>
                   <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem quia sunt, quasi quo illo enim.</p>
                 </div>
                 </div>
           <a href="/projects">Read more</a>
            </div>
        </div>
        
    </section>
        </div>
    );
};

export default Projects;