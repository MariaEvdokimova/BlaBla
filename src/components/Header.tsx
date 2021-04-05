import React, {useState} from 'react';

import { Link } from 'react-scroll';

import { faChevronCircleDown, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './Header.scss';
import logo from '../img/b-logo.svg';

export const Header: React.FC = () => {
    const [isMenuOpen, toggleMenu] = useState(false);

    const ToggleMenuMode = () => {
        toggleMenu(!isMenuOpen);
    };

    const clickHandler = (event: React.MouseEvent) => {
        ToggleMenuMode();
    };

        return (
            <div className="header__wrapper">
                <div className="header__nav-bar container">
                    <a className="header__logo logo" href="#">
                        <img className="logo__img" src={logo} width="49" height="47" alt="Logo"/>
                        <div className="logo__slogan">
                            <div className="logo__name">bla bla</div>
                            <div className="logo__desc">One Page Flat Template</div>
                        </div>
                    </a>
                    <nav className="header__nav main-nav">
                        <button
                            className={isMenuOpen ? "main-nav__toggle main-nav--open" : "main-nav__toggle main-nav--closed"}
                            onClick={clickHandler}
                            type="button">
                            <FontAwesomeIcon className="main-nav__icon fa-3x" icon={faBars}/>
                        </button>
                        <ul className="main-nav__list">
                            <li className="main-nav__item">
                                <Link tabindex="0" activeClass="active" to="header" spy={true} smooth={true}>
                                    Home
                                </Link>
                            </li>
                            <li className="main-nav__item">
                                <Link tabindex="0" activeClass="active" to="portfolio" spy={true} smooth={true}>
                                    Portfolio
                                </Link>
                            </li>
                            <li className="main-nav__item">
                                <Link tabindex="0" activeClass="active" to="about" spy={true} smooth={true}>
                                    About
                                </Link>
                            </li>
                            <li className="main-nav__item">
                                <Link tabindex="0" activeClass="active" to="contact" spy={true} smooth={true}>
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="header__jumbotron jumbotron">
                    <h1 className="jumbotron__title">We Build <b>Brand</b></h1>
                    <p className="jumbotron__text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                        nonummy<br/> nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                    <div className="jumbotron__button">
                        <Link tabindex="0" activeClass="active" className="button" to="main" spy={true} smooth={true}>
                            learn more
                            <FontAwesomeIcon className="jumbotron__icon fa-3x" icon={faChevronCircleDown}/>
                        </Link>
                    </div>
                </div>
            </div>
        )
};