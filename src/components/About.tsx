import React from 'react';
import {Socials} from "./Socials";

import './About.scss';
import melannie from '../img/ava-1.png';
import daniel from '../img/ava-2.png';
import jhonnie from '../img/ava-3.png';

export const About: React.FC = () => {
    return (
        <section className="about container" id="about" >
            <h2 className="about__title">About Us</h2>
            <p className="about__text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
            <ul className="about__list">
                <li className="about__item item">
                    <div className="item__link" >
                        <img src={melannie} alt="Melannie Doe"/>
                        <div className="item__social">
                            <Socials />
                        </div>
                    </div>
                    <h3 className="item__title">Melannie Doe</h3>
                    <p className="item__sign">Project Manager</p>
                    <p className="item__text">Ut wisi enim ad minim veniam, quis nostrud exerci tation</p>
                </li>
                <li className="about__item item">
                    <div className="item__link">
                        <img src={jhonnie} alt="Jhonnie Doe" />
                        <div className="item__social">
                            <Socials />
                        </div>
                    </div>
                    <h3 className="item__title">Jhonnie Doe</h3>
                    <p className="item__sign">Graphic Designer</p>
                    <p className="item__text">Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                        aliquip ex ea commodo consequat.</p>
                </li>
                <li className="about__item item">
                    <div className="item__link">
                        <img src={daniel} alt="Daniel Doe"  />
                        <div className="item__social">
                            <Socials />
                        </div>
                    </div>
                    <h3 className="item__title">Daniel Doe</h3>
                    <p className="item__sign">Web Designer</p>
                    <p className="item__text">Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                        aliquip ex ea commodo</p>
                </li>
            </ul>
        </section>
    )
};