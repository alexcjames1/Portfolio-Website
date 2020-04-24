import React, {Component} from 'react';
import classy from '../../utils/classy';
import style from './Raaka.module.scss';
import {Col, Row, Container } from 'react-bootstrap';
import { Section } from '../../components';

import logo from './images/logo.png';
import profile from './images/profile.png';
import concepts from './images/concepts.png';
import front from './images/front.png';
import back from './images/back.png';
import backClose from './images/back-close.png';
import both from './images/both.png';
import foil from './images/foil.png';
import businessCards from './images/business-cards.png';
import stationery from './images/stationery.png';

export default class Raaka extends Component {



    render() {
        return(
            <Section className={style.section} kind="dark">
                <Row className={style.projectTitle}>
                    <Col className={style.content}>
                        <h2 className={style.header}>Raaka Chocolate Alternate Design</h2>
                        <h6>Student Project</h6>
                        <p className={style.challenge}>
                            <span className={style.bold}>Challenge:</span> To create a successful alternative design of the Raaka logo and packaging.
                        </p>
                        <p className={style.solution}>
                            <span className={style.bold}>Solution:</span> I illustrated an abstract leaf pattern and chose to use this
                                as the primary imagery of the bar because Raaka is known to be extremely transparent about it's
                                origins and natural ingredients. I then chose to adjust the hierarchy of product information, making
                                the bar flavor the most important piece of the front packaging.
                        </p>
                    </Col>
                    <Col>
                        <h5 className={style.skills}>Skills</h5>
                        <ul>
                            <li className={style.listItem}>
                                Packaging
                            </li>
                            <li className={style.listItem}>
                                Branding
                            </li>
                            <li className={style.listItem}>
                                Stationery
                            </li>
                            <li className={style.listItem}>
                                Logo Design
                            </li>
                            <li className={style.listItem}>
                                Typography
                            </li>
                            <li className={style.listItem}>
                                Layout
                            </li>
                        </ul>
                    </Col>
                </Row>

                <div className={style.portfolioItem}>
                    <img src={both} alt="" />
                    <h6 className={style.subtitle}>Above - Front and Back Packaging</h6>
                </div>
                
                <div className={style.portfolioItem}>
                    <img src={logo} alt="" />
                    <h6 className={style.subtitle}>Above - Primary Logo Mark</h6>
                </div>
                <p className={style.description}>
                    <span className={style.bold}>Brand Background:</span> The word ﻿raaka ﻿means raw in Finnish. The cadence of the word and its
                        meaning are meant to capture the essence of their chocolate and the production process. They are unserious people who take their
                        chocolate seriously; A strange bunch who all concur on one simple idea: wanting to make delicious, creative chocolate
                        that showcases the wilder side of cacao and do so in a way that is as environmentally and socially responsible as possible.
                </p>

                <div className={style.portfolioItem}>
                    <img src={profile} alt="" />
                    <h6 className={style.subtitle}>Above - Consumer Concept</h6>
                </div>

                <div className={style.portfolioItem}>
                    <img src={concepts} alt="" />
                    <h6 className={style.subtitle}>Above - Initial Packaging Concepts</h6>
                </div>

                <p className={style.description}>
                    <span className={style.bold}>Packaging:</span> To create the packaging for Raaka chocolate, I chose to use the abstracted leaf illutsration
                    from my inital concepts because I think the organic, unique shapes fit the non-traditional, environmentally-friendly values of the brand. I also chose
                    to make the flavor of the bar the most prominent aspect of the package information and paired it with a bright strip of color that acts as an identifier
                    for the different chocolate bar flavors. Each bar has its own color scheme, with the organic leaf pattern and generally hierarchy of information within
                    the bar, unifying the different flavors as a single brand.

                </p>

                <div className={style.portfolioItem}>
                    <img src={front} alt="" />
                    <h6 className={style.subtitle}>Above - Bar Front Packaging</h6>
                </div>

                <div className={style.portfolioItem}>
                    <img src={back} alt="" />
                    <h6 className={style.subtitle}>Above - Bar Back Packaging</h6>
                </div>

                <div className={style.portfolioItem}>
                    <img src={backClose} alt="" />
                    <h6 className={style.subtitle}>Above - Close Up of Bar Back</h6>
                </div>

                <div className={style.portfolioItem}>
                    <img src={foil} alt="" />
                    <h6 className={style.subtitle}>Above - Internal Packaging</h6>
                </div>

                <p className={style.description}>
                    <span className={style.bold}>Stationery:</span> To create the Raaka stationery system, I thought it was important
                    to incorporate all of the different chocolate bar color schemes. Each employee has a different color for their business card based
                    on which chocolate bar is their favorite. The pattern is used as a brand identifier on the back of the business card and letterhead, with
                    the primary logo mark simply being used on the front of the business card and letterhead with the other important company information.
                </p>

                <div className={style.portfolioItem}>
                    <img src={businessCards} alt="" />
                    <h6 className={style.subtitle}>Above - Business Cards</h6>
                </div>
                <div className={style.portfolioItem}>
                    <img src={stationery} alt="" />
                    <h6 className={style.subtitle}>Above - Stationery System</h6>
                </div>

            </Section>
        );
    }
}
