import React, {Component} from 'react';
import classy from '../../utils/classy';
import style from './CrimsonValley.module.scss';
import {Col, Row, Container } from 'react-bootstrap';
import { Section } from '../../components';

import logo from './images/logo.png';
import conceptBoard from './images/concept-board.png';
import sketches from './images/sketches.png';
import logoConcepts from './images/logo-concepts.png';
import stationery from './images/stationery.png';
import invoice from './images/invoice.png';
import folder from './images/folder.png';
import badge from './images/badge.png';
import greyHat from './images/grey-hat.png';
import whiteHat from './images/white-hat.png';
import greyShirt from './images/grey-shirt.png';
import whiteShirt from './images/white-shirt.png';
import webHome from './images/web-home.png';
import webServices from './images/web-services.png';
import storeFront from './images/store-front.png';
import outsidePoster from './images/outside-poster.png';
import truck from './images/truck.png';
import van from './images/van.png';


export default class CrimsonValley extends Component {


    render() {
        return(
            <Section className={style.section} kind="dark">
                <Row className={style.projectTitle}>
                    <Col xs="12" sm="6" className={style.content}>
                        <h2 className={style.header}>Crimson Valley Landscaping Branding &amp; Identity</h2>
                        <h6>Student Project</h6>
                        <p className={style.challenge}>
                            <span className={style.bold}>Challenge:</span> To create a health &amp; beauty line focused on anti-aging products.
                        </p>
                        <p className={style.solution}>
                            <span className={style.bold}>Solution:</span> The Method Volcanic Ash line is a seven product package with a product brochure included.
                                To create this line, I used bright imagery of magma for the secondary packaging and an eye-catching orange color for the primary packaging. This created a cohesive throughout the product line
                                the primary packaging. This created a cohesive thoughout the product line.
                        </p>
                    </Col>
                    <Col xs="12" sm="6">
                        <h5 className={style.skills}>Skills</h5>
                        <ul>
                            <li className={style.listItem}>
                                Branding
                            </li>
                            <li className={style.listItem}>
                                Logo Design
                            </li>
                            <li className={style.listItem}>
                                Typography
                            </li>
                            <li className={style.listItem}>
                                Stationery
                            </li>
                            <li className={style.listItem}>
                                Packaging
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
                    <span className={style.bold}>Brand Background:</span> Crimson Valley started as a small two man company in 2001
                        and has grown to have approximately fifty employees, making 6.2 million in 2019. In the beginning, they
                        only installed plants and they have since grown into a company providing both plantings and hardscape
                        projects. They have nine crews, each having unique specializations, such as: plantings, paver projects,
                        decks, and maintenance. Crimson Valley has a reputation for high quality that makes it the best landscape
                        company in the area. Crimson Valley Landscaping offers comprehensive and quality landscaping products
                        and services to clients. Our professional landscape staff takes pride in their finished project and in your
                        satisfaction. We will always teach, learn, innovate, and improve to ensure our customers receive the highest
                        standards in customer service and workmanship. From our award-winning designs to our responsive customer
                        service, we see to it that each of our clients’ experience is a memorable one.

                </p>

                <div className={style.portfolioItem}>
                    <img src={conceptBoard} alt="" />
                    <h6 className={style.subtitle}>Above - Concept Board</h6>
                </div>

                <Row>
                    <Col xs="12" sm="8">
                        <div className={style.portfolioItem}>
                            <img src={sketches} alt="" />
                            <h6 className={style.subtitle}>Above - Logo Sketches</h6>
                        </div>
                    </Col>
                    <Col xs="12" sm="4">
                        <div className={style.portfolioItem}>
                            <img src={logoConcepts} alt="" />
                            <h6 className={style.subtitle}>Above - Logo Concepts</h6>
                        </div>
                    </Col>

                </Row>

                <p className={style.description}>
                    <span className={style.bold}>Stationery:</span> Ba ba ba

                </p>

                <div className={style.portfolioItem}>
                    <img src={stationery} alt="" />
                    <h6 className={style.subtitle}>Above - Stationery</h6>
                </div>

                <Row>
                    <Col xs="12" sm="6">
                        <div className={style.portfolioItem}>
                            <img src={invoice} alt="" />
                            <h6 className={style.subtitle}>Above - Invoice</h6>
                        </div>
                    </Col>
                    <Col xs="12" sm="6">
                        <div className={style.portfolioItem}>
                            <img src={folder} alt="" />
                            <h6 className={style.subtitle}>Above - Folder</h6>
                        </div>
                    </Col>

                </Row>

                <p className={style.description}>
                    <span className={style.bold}>Employee Uniforms:</span> Ba ba ba

                </p>

                <div className={style.portfolioItem}>
                    <img src={badge} alt="" />
                    <h6 className={style.subtitle}>Above - Employee Badges</h6>
                </div>

                <Row>
                    <Col xs="12" sm="6">
                        <div className={style.portfolioItem}>
                            <img src={greyHat} alt="" />
                            <h6 className={style.subtitle}>Above - Grey Hat</h6>
                        </div>
                    </Col>
                    <Col xs="12" sm="6">
                        <div className={style.portfolioItem}>
                            <img src={whiteHat} alt="" />
                            <h6 className={style.subtitle}>Above - White Hat</h6>
                        </div>
                    </Col>

                </Row>

                <Row>
                    <Col xs="12" sm="6">
                        <div className={style.portfolioItem}>
                            <img src={greyShirt} alt="" />
                            <h6 className={style.subtitle}>Above - Grey Shirt</h6>
                        </div>
                    </Col>
                    <Col xs="12" sm="6">
                        <div className={style.portfolioItem}>
                            <img src={whiteShirt} alt="" />
                            <h6 className={style.subtitle}>Above - White Shirt</h6>
                        </div>
                    </Col>
                </Row>

                <p className={style.description}>
                    <span className={style.bold}>Website:</span> Ba ba ba

                </p>

                <div className={style.portfolioItem}>
                    <img src={webHome} alt="" />
                    <h6 className={style.subtitle}>Above - Website Home Page</h6>
                </div>

                <div className={style.portfolioItem}>
                    <img src={webServices} alt="" />
                    <h6 className={style.subtitle}>Above - Website Services Page</h6>
                </div>

                <p className={style.description}>
                    <span className={style.bold}>Exterior Signage:</span> Ba ba ba

                </p>

                <div className={style.portfolioItem}>
                    <img src={storeFront} alt="" />
                    <h6 className={style.subtitle}>Above - Storefront</h6>
                </div>

                <Row>
                    <Col xs="12" sm="6">
                        <div className={style.portfolioItem}>
                            <img src={outsidePoster} alt="" />
                            <h6 className={style.subtitle}>Above - Poster Advertisement</h6>
                        </div>
                    </Col>
                    <Col xs="12" sm="6">
                        <div className={style.portfolioItem}>
                            <img src={outsidePoster} alt="" />
                            <h6 className={style.subtitle}>Above - Billboard</h6>
                        </div>
                    </Col>
                </Row>

                <p className={style.description}>
                    <span className={style.bold}>Vehicles:</span> Ba ba ba

                </p>

                <div className={style.portfolioItem}>
                    <img src={truck} alt="" />
                    <h6 className={style.subtitle}>Above - Truck</h6>
                </div>

                <div className={style.portfolioItem}>
                    <img src={van} alt="" />
                    <h6 className={style.subtitle}>Above - Van</h6>
                </div>

            </Section>
        );
    }
}
