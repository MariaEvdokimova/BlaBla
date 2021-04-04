import React, {Component} from 'react';

import { animateScroll as scroll } from 'react-scroll';

import {faAngleUp} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './Footer.scss';

export default class Header extends Component {

    scrollToTop = () => {
        scroll.scrollToTop();
    };

    render() {
        return (
            <div className="footer__wrapper container">
            <p className="footer__copyright">© Copyright 2016 Bla Bla Studio | One Page Flat Template</p>
            <div
                className="footer__button"
                title="Back to top"
                onClick={this.scrollToTop}
            >
                <FontAwesomeIcon className="fa fa-2x" icon={faAngleUp} />
            </div>
        </div>
        )
    }
};
