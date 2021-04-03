import React from 'react';

import {faAngleUp} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './Footer.scss';

export const Footer: React.FC = () => {
    return (
        <div className="footer__wrapper container">
            <p className="footer__copyright">© Copyright 2016 Bla Bla Studio | One Page Flat Template</p>
            <a className="footer__button" title="Back to top" href="#">
                <FontAwesomeIcon className="fa fa-2x" icon={faAngleUp} />
            </a>
        </div>
    )
};
