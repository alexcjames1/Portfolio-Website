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
import website from './images/website.png';
import storyboard from './images/storyboard.png';
import wireframe from './images/wireframe.png';
import icons from './images/icons.png';
import iconsUse from './images/icon-use.png';
import home from './images/homepage.png';
import services from './images/services.png';

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
                            <span className={style.bold}>Solution:</span> This was a collaborative project and each member of the team equally contributed to all parts
                                of the project. We created a logo for the firm, as well as a website, stationery system, a stamp, and a brand standards manual,
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
                    <img src={website} alt="" />
                    <h6 className={style.subtitle}>Above - Website</h6>
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

                <p className={style.description}>
                    <span className={style.bold}>Stationery:</span> OUr stationery is meant to be playful, but professional, making Ferrentino, Donis & Associates
                        a law firm that stands out against competitors. On the letterhead, their is a light pattern in the background. The contact information is
                        in a light gray, which is still easily readable for their older audience, but allows for the body of the message to be the most prominent design
                        element. The folder is this law firm's signature black color and features the logo mark on the bottom corner. The envelope was also designed with
                        the client's budget in mind and we chose a more simplistic design in order for the envelope to be printed after already being converted. The
                        business card features the pattern on the back of the card and their black behind the contact information.

                </p>

                <div className={style.portfolioItem}>
                    <img src={stationery} alt="" />
                    <h6 className={style.subtitle}>Above - Stationery</h6>
                </div>

                <p className={style.description}>
                    <span className={style.bold}>Icons:</span> These icons are mildly rounded to touch on the brand's friendly and approachable values. They also have small
                        openings at the bottom to symbolize the firm's openness to new tactics and approaches when working with clients. These icons are meant to be used as
                        design elements on the Ferrentino, Donis & Associates website.

                </p>

                <div className={style.portfolioItem}>
                    <img src={icons} alt="" />
                    <h6 className={style.subtitle}>Above - Icons</h6>
                </div>

                <div className={style.portfolioItem}>
                    <img src={iconsUse} alt="" />
                    <h6 className={style.subtitle}>Above - Icons In Use</h6>
                </div>

                <p className={style.description}>
                    <span className={style.bold}>Website:</span> We began the website creation process by storyboarding the audience's navigation process
                        through the website. We then created wireframes with the primary goal in mind being to convince the user to schedule a consultation.
                        After wireframing, we created prototypes in Adobe XD and completed user testing. This testing allowed us to make minor changes before
                        showing the final design to the client. The client then approved the design and we created this website using Wordpress.
                </p>

                <Row>
                    <Col xs="12" sm="6">
                        <div className={style.portfolioItem}>
                            <img src={storyboard} alt="" />
                            <h6 className={style.subtitle}>Above - Storyboard</h6>
                        </div>
                    </Col>
                    <Col xs="12" sm="6">
                        <div className={style.portfolioItem}>
                            <img src={wireframe} alt="" />
                            <h6 className={style.subtitle}>Above - Wireframe</h6>
                        </div>
                    </Col>
                </Row>

                <div className={style.portfolioItem}>
                    <img src={home} alt="" />
                    <h6 className={style.subtitle}>Above - Website Home Page</h6>
                </div>

                <div className={style.portfolioItem}>
                    <img src={services} alt="" />
                    <h6 className={style.subtitle}>Above - Website Services Page</h6>
                </div>

            </Section>
        );
    }
}
