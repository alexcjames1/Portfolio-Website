import React, {Component} from 'react';
import classy from '../../utils/classy';
import style from './Snowminer-website.module.scss';
import {Col, Row, Container } from 'react-bootstrap';
import { Section } from '../../components';

import landing from './images/home-page.png';
import howWorks from './images/how-snowminer-works.png';
import driver from './images/driver.png';

import front from './images/front.png';
import right from './images/right.png';
import close from './images/close.png';
import left from './images/left.png';
import mobile from './images/mobile.png';

export default class Snowminer extends Component {



    render() {
        return(
            <Section className={style.section} kind="dark">
                <Row className={style.projectTitle}>
                    <Col className={style.content}>
                        <h2 className={style.header}>Snowminer Web Development</h2>
                        <h6>Intern Project</h6>
                        <p className={style.challenge}>
                            <span className={style.bold}>Challenge:</span> To create a user interface that would allow users,
                                both drivers and customers, to seamlessly conduct business and gain information about the product.
                        </p>
                        <p className={style.solution}>
                            <span className={style.bold}>Solution:</span> I used React.js and SASS to create this website, along with
                                CSS animations to create a light, animated introduction to the website that would engage the user.
                                <br/>
                                <br/>
                                This website was designed by Nikki Radloff.
                        </p>
                    </Col>
                    <Col>
                        <h5 className={style.skills}>Skills</h5>
                        <ul>
                            <li className={style.listItem}>
                                Web Development
                            </li>
                            <li className={style.listItem}>
                                Layout Design
                            </li>
                            <li className={style.listItem}>
                                Typography
                            </li>
                        </ul>
                    </Col>
                </Row>
                <div className={style.portfolioItem}>
                    <img src={landing} alt="" />
                    <h6 className={style.subtitle}>Above - Landing Page</h6>
                </div>
                <p className={style.description}>
                    <span className={style.bold}>Brand Background:</span> Snowminer offers snow and ice management services for Commercial and
                        Residential clients. They also recognize the importance of having clean, well-maintained, and safe areas to ensure
                        the easy flow of vehicular and pedestrian traffic within business locations. Snowminer provides commercial grade snow
                        plows, salt spreaders and skidsteer loaders to move snow and ice quickly and efficiently. Snow and salting services
                        can be taylored to fit your specific property needs and time frame. They pride themselves on being one of the safest
                        and leading snow and ice management contractors in the market.

                </p>

                <div className={style.portfolioItem}>
                    <img src={howWorks} alt="" />
                    <h6 className={style.subtitle}>Above - How Snowminer Works</h6>
                </div>

                <div className={style.portfolioItem}>
                    <img src={driver} alt="" />
                    <h6 className={style.subtitle}>Above - Driver Landing Page</h6>
                </div>

                <div className={style.portfolioItem}>
                    <img src={mobile} alt="" />
                    <h6 className={style.subtitle}>Above - Mobile Website View</h6>
                </div>

                <div className={style.button}>
                    <a className={style.buttonLink} href="http://alexcjames.com/snowminer/" target="_blank">See Full Website</a>
                </div>
            </Section>
        );
    }
}
