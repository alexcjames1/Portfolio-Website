import React, {Component} from 'react';
import classy from '../../utils/classy';
import style from './FdaLaw.module.scss';
import {Col, Row, Container } from 'react-bootstrap';
import { Section } from '../../components';

import stationery from './images/stationery.png';
import logo from './images/logo.png';
import styleTile from './images/style-tile.png';
import sketches from './images/sketches.jpg';
import values from './images/values.png';
import logoConcepts from './images/logo-concepts.png';

export default class FdaLaw extends Component {



    render() {
        return(
            <Section className={style.section} kind="dark">
                <Row className={style.projectTitle}>
                    <Col className={style.content}>
                        <h2 className={style.header}>Ferrentino, Donis &amp; Associates Rebrand</h2>
                        <h6>Student Project</h6>
                        <p className={style.challenge}>
                            <span className={style.bold}>Challenge:</span> Ferrentino, Donis and Associates required new logo and overall cohesion of
                                their brand to attract more clients as their brand at the time was dated and common, not allowing them to stand out against other firms.
                        </p>
                        <p className={style.solution}>
                            <span className={style.bold}>Solution:</span> We created a logo for the firm, as well as a website, stationery system, a stamp, and a brand standards manual,
                                meant to guide the firm in future use of our designs.

                                <br/>
                                <br/>
                                This project was completed by myself, Nikola Jelinkova, Wesley Enriquez, and Sarah Faust.
                        </p>
                    </Col>
                    <Col>
                        <h5 className={style.skills}>Skills</h5>
                        <ul>
                            <li className={style.listItem}>
                                Branding
                            </li>
                            <li className={style.listItem}>
                                Stationery
                            </li>
                            <li className={style.listItem}>
                                Website
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
                    <img src={stationery} alt="" />
                    <h6 className={style.subtitle}>Above - Stationery</h6>
                </div>

                <div className={style.portfolioItem}>
                    <img src={logo} alt="" />
                    <h6 className={style.subtitle}>Above - Primary Logo Mark</h6>
                </div>
                <p className={style.description}>
                    <span className={style.bold}>Brand Background:</span> Ferrentino, Donis & Associates, LLC are top attorneys dedicated
                        to helping you with real estate law, personal injury, traffic or DUI defense, family law, and more. They work hard
                        to provide smart, sensible legal solutions, tailored to your individual case, and are driven to produce the best
                        results. They pride themselves in providing all clients with cost effective high quality legal representation while
                        forever maintaining a mindful eye for all detail - big or small.

                </p>

                <div className={style.portfolioItem}>
                    <img src={styleTile} alt="" />
                    <h6 className={style.subtitle}>Above - Consumer Concepts</h6>
                </div>

                <Row>
                    <Col xs="12" sm="6">
                        <div className={style.portfolioItem}>
                            <img src={sketches} alt="" />
                            <h6 className={style.subtitle}>Above - Logo Sketches</h6>
                        </div>
                    </Col>
                    <Col xs="12" sm="6">
                        <div className={style.portfolioItem}>
                            <img src={values} alt="" />
                            <h6 className={style.subtitle}>Above - Brand Values</h6>
                        </div>
                    </Col>
                </Row>

                <p className={style.description}>
                    <span className={style.bold}>Logo Concept:</span> In the many different concepts we chose to explore, our main themes were power and
                        justice. These concepts can directly tie back to the idea of a law firm, as well as the values our client chose for his firm. power
                        and justice are seen in thick, bold line weights we use in our pictorial logo and our logo typography, as well as in the meaning behind
                        our more abstracted logos. The logo chosen by our client is meant to symbolize strength and stability, with the lower blocks being the
                        attorneys and the higher, angled block being the client, supported by the attorneys through legal guidance.

                </p>

                <div className={style.portfolioItem}>
                    <img src={logoConcepts} alt="" />
                    <h6 className={style.subtitle}>Above - Alternate Logo Concepts</h6>
                </div>

            </Section>
        );
    }
}
