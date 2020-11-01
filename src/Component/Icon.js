import React from 'react';
import './Icon.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,faGithub,faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';




const Icon = () => {
    return (
        <div>
        <div class="social">
        <a href="https://www.facebook.com/?ref=tn_tnmn"><i><FontAwesomeIcon icon={faFacebook} /></i></a>
        <a href="https://github.com/ashabuljannat"><i><FontAwesomeIcon icon={faGithub} /></i></a>
        <a href="#"><i><FontAwesomeIcon icon={faTwitter} /></i></a>
        <a href="https://www.linkedin.com/in/2alif-ashabuljannat-13981b1ba/"><i><FontAwesomeIcon icon={faLinkedin} /></i></a>
    </div>
        </div>
    );
};

export default Icon;