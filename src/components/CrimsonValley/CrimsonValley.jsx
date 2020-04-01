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
                            <span className={style.bold}>Challenge:</span> To will build an appropriate identity and
                                brand profile for Crimson Valley Landscaping through research, building a brand
                                profile, and documentation of their new visual identity.
                        </p>
                        <p className={style.solution}>
                            <span className={style.bold}>Solution:</span> I created a brand identity appropriate for a landscaping company
                                that's primary audience is older, but strives to appeal to younger home and business owners. Crimson Valley's
                                new collateral items are memorable and will bring in more business due to the visual interest of the designs.
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
                    <Col xs="12" sm="6">
                        <div className={style.portfolioItem}>
                            <img src={sketches} alt="" />
                            <h6 className={style.subtitle}>Above - Logo Sketches</h6>
                        </div>
                    </Col>
                    <Col xs="12" sm="6">
                        <div className={style.portfolioItem}>
                            <img src={logoConcepts} alt="" />
                            <h6 className={style.subtitle}>Above - Logo Concepts</h6>
                        </div>
                    </Col>

                </Row>

                <p className={style.description}>
                    <span className={style.bold}>Stationery:</span> The stationery system and additional print collateral are
                        tied together by using the pattern as either an accent or a background. I also used red lines throughout as
                        dividers of information because it gives a cohesive look to their print items and also gives more legibility
                        to the information on the item. On the folder, the larger, pictorial logo is meant to bleed onto the front,
                        showing half of the logo on the inside and outside. The folder is grey to provide contrast to the logo and
                        the print collateral that would be stored inside.

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
                    <span className={style.bold}>Employee Uniforms:</span> Similarly to the print collateral, the employee uniforms use
                        the pattern as an accent or background. On the badges, the employee images are contained within a shield to relate
                        back to the shape of the logo. I made the name larger than the logo because, on the badge, the name should be more important
                        within the hierarchy of the design. Employee uniforms come in grey and white only becuase those are the two other color in the
                        primary palette and the logo is not allowed to be reversed in color.

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
                    <span className={style.bold}>Website:</span> For the Crimson Valley website, it is meant to feature a home page,
                        a services page, and about page, and a contact page. On the home page, there is a hero image and, in the center,
                        there is a call to action prompting users to request a quote. I also featured a services page, showing some of the
                        custom projects Crimson Valley is able to complete. The services shown on the page are meant to prompt the user to
                        request a quote, as that option is contained within the footer on all pages.

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
                    <span className={style.bold}>Exterior Signage:</span> For Crimson Valley exterior signage, I created a design for
                        their storefront, a poster advertisement, and a billboard advertisement. On the storefront, the awning contains the pattern
                        seen on the other collateral items. The door shows the pictorial logo, as well as the store hours. I then put an example of
                        their work and their values to the right of the door as wa way to draw in potential customers. On the advertisements, they
                        have a cohesive design have a cohesive design because the pattern is used in the background and the image of their work
                        is contained within a shield.

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
                    <span className={style.bold}>Vehicles:</span> On the truck and van, the pattern is used as an accent on the backs of the vehicles.
                        The logo is then featured on the side, as well as the values of the company and the contact information. The values are in red
                        because they need to stand out against the contact information shown in grey.

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
