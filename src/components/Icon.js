import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Icon() {

    return(

        <div className="social-icons">
            <ul>

                <a href="mailto:fabamiseadeolu@gmail.com" target="_blank" rel="noopener noreferrer">
                    <li><FontAwesomeIcon icon="envelope" /></li>
                </a>
                <a href="https://www.instagram.com/Bamz_west" target="_blank" rel="noopener noreferrer">
                    <li><FontAwesomeIcon icon={['fab', 'instagram']} /></li>
                </a>
                <a href="https://twitter.com/Bamz_west" target="_blank" rel="noopener noreferrer">
                    <li><FontAwesomeIcon icon={['fab', 'twitter']} /></li>
                </a>
                <a href="https://bit.ly/3esqCVh" target="_blank" rel="noopener noreferrer">
                    <li><FontAwesomeIcon icon={['fab', 'whatsapp']} /></li>
                </a>
                <a href="https://github.com/Bamz-west" target="_blank" rel="noopener noreferrer">
                    <li><FontAwesomeIcon icon={['fab', 'github']} /></li>
                </a>
                <a href="https://www.linkedin.com/in/adeoluwa-fabamise-46a694198/" target="_blank" rel="noopener noreferrer">
                    <li><FontAwesomeIcon icon={['fab', 'linkedin']} /></li>
                </a>
                
            </ul>
        </div>

    );

}


export default Icon;