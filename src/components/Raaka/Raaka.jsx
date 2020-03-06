import React, {Component} from 'react';
import classy from '../../utils/classy';
import style from './Raaka.module.scss';
import {Col, Row, Container } from 'react-bootstrap';
import { Section } from '../../components';

export default class Raaka extends Component {



    render() {
        return(
            <Section className={style.section} kind="dark">
                <Row className={style.projectTitle}>
                    <Col className={style.content}>
                        <h2 className={style.header}>Method Volcanic Ash Beauty Line</h2>
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
                </div>

                <div className={style.portfolioItem}>
                    <h6 className={style.subtitle}>Above - Initial Packaging Concepts</h6>
                </div>

                <div className={style.portfolioItem}>
                    <h6 className={style.subtitle}>Above - Style Tile</h6>
                </div>

                <div className={style.portfolioItem}>
                    <h6 className={style.subtitle}>Above - Full Packaging Line</h6>
                </div>

                <div className={style.portfolioItem}>
                    <h6 className={style.subtitle}>Above - Primary Packaging</h6>
                </div>

                <div className={style.portfolioItem}>
                    <h6 className={style.subtitle}>Above - Back of Secondary Packaging</h6>
                </div>

                <div className={style.portfolioItem}>
                    <h6 className={style.subtitle}>Above - Full Packaging Line</h6>
                </div>

                <div className={style.portfolioItem}>
                    <h6 className={style.subtitle}>Above - Brochure Cover</h6>
                </div>

                <div className={style.portfolioItem}>
                    <h6 className={style.subtitle}>Above - Brochure Introduction</h6>
                </div>
                <div className={style.portfolioItem}>
                    <h6 className={style.subtitle}>Above - Stationery System</h6>
                </div>

            </Section>
        );
    }
}
