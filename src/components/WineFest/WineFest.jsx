import React, {Component} from 'react';
import classy from '../../utils/classy';
import style from './WineFest.module.scss';
import {Col, Row, Container } from 'react-bootstrap';
import { Section } from '../../components';

import logo from './images/logo.png';
import logoOptions from './images/logo-options.png';
import styleTile from './images/style-tile.png';
import stationery from './images/stationery.png';
import bagFront from './images/bag-front.png';
import bags from './images/bags.png';
import buttons from './images/buttons.png';
import shirtGreen from './images/shirt-green.png';
import shirtGrey from './images/shirt-grey.png';
import shirtWhite from './images/shirt-white.png';
import wineGlass from './images/wine-glass.png';

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
                    <img src={logo} alt="" />
                    <h6 className={style.subtitle}>Above - Primary Logo Mark</h6>
                </div>
                <p className={style.description}>
                    <span className={style.bold}>Brand Background:</span> The Method&trade;  Volcanic Ash Cleanser product line features seven products to beautify all parts of the body. Volcanic ash is infused into this detoxifying body wash,
                    blended with bergamot oil and white ginger extract. This helps restore and hydrate for smoother, more beautiful-looking skin. For oily skin, dry skin, combination skin,
                    normal skin.These products are naturally derived, with no artificial ingredients, making it safe for users with allergies.
                    <br/>
                    Turn your shower into the kind of escape you need. whether you want pure peace, an energy boost, a deep detox or some simple nourishment, each naturally derived
                    formula features nutrient-rich ingredients and a scent that’s sure to set the mood. no parabens. no phthalates. no bad vibes.

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
                    <span className={style.bold}>Stationery:</span> ba ba ba ba.
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
                    <span className={style.bold}>Apparel:</span> ba ba ba ba.
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
                    <span className={style.bold}>Apparel:</span> ba ba ba ba.
                </p>

                <div className={style.portfolioItem}>
                    <img src={wineGlass} alt="" />
                    <h6 className={style.subtitle}>Above - Wine Glass</h6>
                </div>

            </Section>
        );
    }
}
