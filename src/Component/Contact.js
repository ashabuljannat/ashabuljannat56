import { faTelegramPlane } from '@fortawesome/free-brands-svg-icons';
import {  faCopyright, faEnvelope,  faMapMarkerAlt, faPhoneAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Contact.css'


const Contact = () => {
    return (
        <div>
        <section class="contact" id="contact">
        <div class="max-width">
            <h2 class="title">
                Contact me</h2>
            <div class="contact-content">
                <div class="column left">
                    <div class="text">
                        Get in Touch</div>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos harum corporis fuga corrupti. Doloribus quis soluta nesciunt veritatis vitae nobis?</p>
                    <div class="icons">
                        <div class="row">
                            <i><FontAwesomeIcon icon={faUser } /></i>
                            <div class="info">
                                <div class="head">
                                    Name</div>
                                <div class="sub-title">
                                    Md. ashabul jannat</div>
                            </div>
                        </div>
                        <div class="row">
                            <i ><FontAwesomeIcon icon={faMapMarkerAlt } /></i>
                            <div class="info">
                                <div class="head">
                                    Address</div>
                                <div class="sub-title">
                                    Dhaka, Bangladesh</div>
                            </div>
                        </div>
                        <div class="row">
                            <i><FontAwesomeIcon icon={faPhoneAlt } /></i>
                           
                            <div class="info">
                                <div class="head">
                                    Number</div>
                                <div class="sub-title">
                                   01932796080</div>
                            </div>
                        </div>
                        <div class="row">
                            <i ><FontAwesomeIcon icon={faEnvelope } /></i>
                            <div class="info">
                                <div class="head">
                                    Email</div>
                                <div class="sub-title">
                                    2alifashabuljannat@gmail.com</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column right">
                    <div class="text">
                        Message me</div>
                    <form action="#">
                        <div class="fields">
                            <div class="field name">
                                <input type="text" placeholder="Name" required />
                            </div>
                            <div class="field email">
                                <input type="email" placeholder="Email" required />
                            </div>
                        </div>
                        <div class="field">
                            <input type="text" placeholder="Subject" required />
                        </div>
                        <div class="field textarea">
                            <textarea  placeholder="Message..." required></textarea>
                        </div>
                        <div class="button">
                            <button type="submit"> <i><FontAwesomeIcon icon={faTelegramPlane } /></i> Send message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>

    
    <footer>
        <span><span><FontAwesomeIcon icon={faCopyright } /></span>  2020 | MD All rights reserved.</span>
    </footer>
        </div>
    );
};

export default Contact;