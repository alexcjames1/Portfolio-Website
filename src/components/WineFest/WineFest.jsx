import React, {Component} from 'react';
import classy from '../../utils/classy';
import style from './WineFest.module.scss';
import {Col, Row, Container } from 'react-bootstrap';
import { Section } from '../../components';

import socialMedia from './images/social-media.png';
import logo from './images/logo.png';
import logoOptions from './images/logo-options.png';
import cover from './images/cover.png';
import internal from './images/internal.png';
import internalCover from './images/internal-cover.png';
import internalTop from './images/internal-top.png';
import styleTile from './images/style-tile.png';
import stationery from './images/stationery.png';
import bagFront from './images/bag-front.png';
import bags from './images/bags.png';
import buttons from './images/buttons.png';
import shirtGreen from './images/shirt-green.png';
import shirtGrey from './images/shirt-grey.png';
import shirtWhite from './images/shirt-white.png';
import wineGlass from './images/wine-glass.png';
import home from './images/home.png';
import attractions from './images/attractions.png';

export default class WineFest extends Component {



    render() {
        return(
            <Section className={style.section} kind="dark">
                <Row className={style.projectTitle}>
                    <Col className={style.content}>
                        <h2 className={style.header}>Taste Wine Fest Branding & Identity</h2>
                        <h6>Student Project</h6>
                        <p className={style.challenge}>
                            <span className={style.bold}>Challenge:</span> To create a website for Taste Wine Fest, along with a identity for the brand.
                        </p>
                        <p className={style.solution}>
                            <span className={style.bold}>Solution:</span> I created an identity that incorporated earthy tones to connect back to the vineyard
                                from where the wine originated. I also chose to use a line drawing of a wine bottle as a pattern and illustrative accent piece
                                to create a friendly feeling for the brand.
                        </p>
                    </Col>
                    <Col>
                        <h5 className={style.skills}>Skills</h5>
                        <ul>
                            <li className={style.listItem}>
                                Web Design
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
                    <img src={socialMedia} alt="" />
                    <h6 className={style.subtitle}>Above - Social Media</h6>
                </div>

                <div className={style.portfolioItem}>
                    <img src={logo} alt="" />
                    <h6 className={style.subtitle}>Above - Primary Logo Mark</h6>
                </div>
                <p className={style.description}>
                    <span className={style.bold}>Brand Background:</span> The mission of the Taste Wine Fest
                        is to be the middleman between wineries and  the consumer, allowing Chicago wine
                        drinkers to be exposed to the many different tastes and talents local wineries have
                        to offer. The event is meant to be fun, with people casually going around to the
                        different booths for wine samples. The physical environment for this event varies as
                        the event can be held anywhere in the Chicago area. Currently, they plan to hold the
                        Spring event at the Lincoln Park Zoo. This event appeals to a younger audience, ages
                        21 to 35. These people would likely be middle class to upper middle class.

                </p>

                <div className={style.portfolioItem}>
                    <img src={styleTile} alt="" />
                    <h6 className={style.subtitle}>Above - Concept Board</h6>
                </div>

                <div className={style.portfolioItem}>
                    <img src={logoOptions} alt="" />
                    <h6 className={style.subtitle}>Above - Other Logo Concepts</h6>
                </div>

                <p className={style.description}>
                    <span className={style.bold}>Brand Standards:</span> The Taste Wine Fest brand standards is meant to act as a guide
                        for future design projects because it offers rules on typography, color, and imagery. These guidelines will help
                        create a cohesive brand.
                </p>

                <Row>
                    <Col xs="12" sm="6">
                        <div className={style.portfolioItem}>
                            <img src={internalCover} alt="" />
                            <h6 className={style.subtitle}>Above - Typography on Color Page</h6>
                        </div>
                    </Col>
                    <Col xs="12" sm="6">
                        <div className={style.portfolioItem}>
                            <img src={internalTop} alt="" />
                            <h6 className={style.subtitle}>Above - Table of Contents</h6>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col xs="12" sm="6">
                        <div className={style.portfolioItem}>
                            <img src={internal} alt="" />
                            <h6 className={style.subtitle}>Above - Mission &amp; Values</h6>
                        </div>
                    </Col>
                    <Col xs="12" sm="6">
                        <div className={style.portfolioItem}>
                            <img src={cover} alt="" />
                            <h6 className={style.subtitle}>Above - Book Cover</h6>
                        </div>
                    </Col>
                </Row>

                <div className={style.button}>
                    <a className={style.buttonLink} href="https://issuu.com/home/published/taste-brand-manual" target="_blank">See Full Style Guide</a>
                </div>

                <p className={style.description}>
                    <span className={style.bold}>Website:</span> This website was created to give information to those interested
                        in attending Taste Wine Fest. Their website has information about food, entertainment, the location, and
                        ticket purchases. The primary purpose of the website is to convince the audience to buy tickets for the
                        Taste Wine Fest spring event.
                </p>

                <div className={style.portfolioItem}>
                    <img src={home} alt="" />
                    <h6 className={style.subtitle}>Above - Home Page</h6>
                </div>

                <div className={style.portfolioItem}>
                    <img src={attractions} alt="" />
                    <h6 className={style.subtitle}>Above - Attractions Section</h6>
                </div>

                <div className={style.button}>
                    <a className={style.buttonLink} href="http://alexcjames.com/taste/" target="_blank">See Full Website</a>
                </div>

                <p className={style.description}>
                    <span className={style.bold}>Print Collateral:</span> The stationery system
                        and additional print collateral are tied together by using the
                        pattern as either an accent or a background. On the bags, a wine
                        bottle line drawing was used as an accent piece on the front and
                        bleeding off onto the side of the bag. The secondary logo mark was also
                        used as an accent on the business card and stationery.
                </p>

                <div className={style.portfolioItem}>
                    <img src={stationery} alt="" />
                    <h6 className={style.subtitle}>Above - Stationery</h6>
                </div>

                <Row>
                    <Col xs="12" sm="6">
                        <div className={style.portfolioItem}>
                            <img src={bagFront} alt="" />
                            <h6 className={style.subtitle}>Above - Front of Bag</h6>
                        </div>
                    </Col>
                    <Col xs="12" sm="6">
                        <div className={style.portfolioItem}>
                            <img src={bags} alt="" />
                            <h6 className={style.subtitle}>Above - Bag Color Options</h6>
                        </div>
                    </Col>
                </Row>

                <p className={style.description}>
                    <span className={style.bold}>Apparel:</span> On the buttons, there are two color variations
                        and four design variations. There is a button with the secondary mark, the primary mark,
                        the secondary pattern, and the line art wine bottle drawing. On the shirts, the logo is seen
                        on the front and on the tag and the pattern is featured on the right sleeve of the shirt.
                </p>

                <div className={style.portfolioItem}>
                    <img src={buttons} alt="" />
                    <h6 className={style.subtitle}>Above - Buttons</h6>
                </div>
                <Row>
                    <Col xs="12" sm="4">
                        <div className={style.portfolioItem}>
                            <img src={shirtGreen} alt="" />
                            <h6 className={style.subtitle}>Above - Green Shirt</h6>
                        </div>
                    </Col>
                    <Col xs="12" sm="4">
                        <div className={style.portfolioItem}>
                            <img src={shirtWhite} alt="" />
                            <h6 className={style.subtitle}>Above - White Shirt</h6>
                        </div>
                    </Col>
                    <Col xs="12" sm="4">
                        <div className={style.portfolioItem}>
                            <img src={shirtGrey} alt="" />
                            <h6 className={style.subtitle}>Above - Grey Shirt</h6>
                        </div>
                    </Col>
                </Row>

                <p className={style.description}>
                    <span className={style.bold}>Wine Glass:</span> This wine glass is branded with the Taste Wine Fest logo.
                        The wine glass is meant to be used as a keep sake that will promote interest in the event, even when
                        patrons leave. Wine glasses can be acquired by patrons by simply buying the glass, or they can purchase
                        a glass of wine and the cost of the glass will be included.
                </p>

                <div className={style.portfolioItem}>
                    <img src={wineGlass} alt="" />
                    <h6 className={style.subtitle}>Above - Wine Glass</h6>
                </div>

            </Section>
        );
    }
}
