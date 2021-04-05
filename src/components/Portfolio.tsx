import React from 'react';
import {IconSearch} from "./IconSearch";

import img1 from '../img/img-1.svg';
import img2 from '../img/img-2.svg';
import img3 from '../img/img-3.svg';
import img4 from '../img/img-4.svg';
import img5 from '../img/img-5.svg';
import img6 from '../img/img-6.svg';

import './Portfolio.scss';

export const Portfolio: React.FC = () => {
    return (
        <section className="portfolio container" id="portfolio">
            <h2 className="portfolio__title">Portfolio</h2>
            <p className="portfolio__text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
            <input className="visually-hidden" type="radio" id="all" name="filter" />
            <input className="visually-hidden" type="radio" id="web" name="filter" />
            <input className="visually-hidden" type="radio" id="graphic" name="filter" />
            <input className="visually-hidden" type="radio" id="flat" name="filter" />
            <div className="portfolio__filter filter">
                <label htmlFor="all" className="filter__item button">All</label>
                <label htmlFor="web" className="filter__item button">Web design</label>
                <label htmlFor="graphic" className="filter__item button">Graphic design</label>
                <label htmlFor="flat" className="filter__item button">Flat design</label>
            </div>
            <ul className="portfolio__list">
                <li className="portfolio__item graphic">
                    <a href="#" className="portfolio__link">
                        <img src={img1} alt="Graphic design" width="177" height="180" />
                        <div className="portfolio__icon">
                            <IconSearch />
                        </div>
                    </a>
                </li>
                <li className="portfolio__item flat">
                    <a href="#" className="portfolio__link">
                        <img src={img2} alt="Flat design" width="177" height="180" />
                        <div className="portfolio__icon">
                            <IconSearch />
                        </div>
                    </a>
                </li>
                <li className="portfolio__item web">
                    <a href="#" className="portfolio__link">
                        <img src={img3} alt="Web design" width="177" height="180" />
                        <div className="portfolio__icon">
                            <IconSearch />
                        </div>
                    </a>
                </li>
                <li className="portfolio__item web">
                    <a href="#" className="portfolio__link">
                        <img src={img4} alt="Web design" width="177" height="180" />
                        <div className="portfolio__icon">
                            <IconSearch />
                        </div>
                    </a>
                </li>
                <li className="portfolio__item graphic">
                    <a href="#" className="portfolio__link">
                        <img src={img5} alt="Graphic design" width="177" height="180" />
                        <div className="portfolio__icon">
                            <IconSearch />
                        </div>
                    </a>
                </li>
                <li className="portfolio__item flat">
                    <a href="#" className="portfolio__link">
                        <img src={img6} alt="Flat design" width="177" height="180" />
                        <div className="portfolio__icon">
                            <IconSearch />
                        </div>
                    </a>
                </li>
                <li className="portfolio__item graphic">
                    <a href="#" className="portfolio__link">
                        <img src={img1} alt="Graphic design" width="177" height="180" />
                        <div className="portfolio__icon">
                            <IconSearch />
                        </div>
                    </a>
                </li>
                <li className="portfolio__item flat">
                    <a href="#" className="portfolio__link">
                        <img src={img2} alt="Flat design" width="177" height="180" />
                        <div className="portfolio__icon">
                            <IconSearch />
                        </div>
                    </a>
                </li>
            </ul>
        </section>
    )
};
