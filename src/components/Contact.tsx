import React from 'react';

import {faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './Contact.scss';
import { MapBlock } from "./MapBlock";

export const Contact: React.FC = () => {
    return (
        <section className="contact container">
            <h2 className="contact__title">Contact Us</h2>
            <p className="contact__text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
            <div className="contact__wrapper">
                <form className="contact__form form" method="post">
                    <div className="form__element">
                        <label className="form__label visually-hidden" htmlFor="name">Your name</label>
                        <input id="name" name="name" type="text" placeholder="Your name" />
                    </div>
                    <div className="form__element">
                        <label className="form__label visually-hidden" htmlFor="email">Your email</label>
                        <input id="email" name="email" type="email" placeholder="Your email" />
                    </div>
                    <div className="form__element">
                        <label className="form__label visually-hidden" htmlFor="message">Your message</label>
                        <textarea id="message" className="form__message" name="message" placeholder="Your message" />
                    </div>
                    <button className="form__submit button" type="submit">Submit</button>
                </form>
                <div className="contact__map map">
                    <p className="map__address"><FontAwesomeIcon icon={faMapMarkerAlt} /> Bla Bla Company 125009 Moscow, Red Square 1</p>
                    < MapBlock />
                </div>
            </div>
            </section>
    )
};