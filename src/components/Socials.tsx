import React from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFacebookF, faTwitter, faDribbble, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

import './Socials.scss';

library.add(faFacebookF, faTwitter, faDribbble, faGooglePlusG);

export const Socials: React.FC = () => {
    return (
        <div className="social">
            <a className="social__link" href="#">
            <FontAwesomeIcon className="social__icon" icon={['fab', 'facebook-f']} />
            </a>
            <a className="social__link" href="#">
            <FontAwesomeIcon className="social__icon" icon={['fab', 'twitter']} />
            </a>
            <a className="social__link" href="#">
            <FontAwesomeIcon className="social__icon" icon={['fab', 'google-plus-g']} />
            </a>
            <a className="social__link" href="#">
            <FontAwesomeIcon className="social__icon" icon={['fab', 'dribbble']} />
            </a>
        </div>
    )
};