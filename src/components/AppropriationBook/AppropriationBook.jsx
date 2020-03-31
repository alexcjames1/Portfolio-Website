import React, {Component} from 'react';
import classy from '../../utils/classy';
import style from './AppropriationBook.module.scss';
import {Col, Row, Container } from 'react-bootstrap';
import { Section } from '../../components';

import moodBoard from './images/moodBoard.png';
import thumbFront from './images/thumb-front.png';
import thumbBack from './images/thumb-back.png';

import cover from './images/cover.png';
import blocks from './images/blocks.png';
import blocksClose from './images/blocksClose.png';
import paint from './images/paint.png';
import letters from './images/letters.png';
import lettersClose from './images/lettersClose.png';
import mistakes from './images/mistakes.png';

export default class AppropriationBook extends Component {



    render() {
        return(
            <Section className={style.section} kind="dark">
                <Row className={style.projectTitle}>
                    <Col xs="12" sm="6" className={style.content}>
                        <h2 className={style.header}>Appropriation Book</h2>
                        <h6>Student Project</h6>
                        <p className={style.challenge}>
                            <span className={style.bold}>Challenge:</span> To design a typographically interesting
                                                    book based on a collection of
                                                    attributed quotes based on quotes from noteable designers.
                                                    The quotes would then be displayed using serif and sans
                                                    serif type to enhance the content of the material.
                        </p>
                        <p className={style.solution}>
                            <span className={style.bold}>Solution:</span> I used a black and salmon color palette with a mix of DIN and Didot typefaces.
                                This book, in its completion, features 40 appropriated quotes spread across 35 pages.
                        </p>
                    </Col>
                    <Col xs="12" sm="6">
                        <h5 className={style.skills}>Skills</h5>
                        <ul>
                            <li className={style.listItem}>
                                Typography
                            </li>
                            <li className={style.listItem}>
                                Layout
                            </li>
                            <li className={style.listItem}>
                                Content Curation
                            </li>
                        </ul>
                    </Col>
                </Row>

                <p className={style.description}>
                    <span className={style.bold}>Project Research:</span> To begin this project, we had to research publication design,
                        typography use, and color schemes. From this research, I discovered a sans serif and serif typeface pairing I was
                        interested in using, as well as multiple color schemes and multiple examples of layout inspiration. In my intial concepts,
                        I heavily used geometric shapes to assist my quotes; however, through increased familiarity of type and the quotes I had created,
                        I realized that there was no need to use these shapes, as the letterforms of the typefaces I chose could easily act in place of the
                        geometric shapes I initially intended to use.

                </p>

                <div className={style.portfolioItem}>
                    <img src={moodBoard} alt="" />
                    <h6 className={style.subtitle}>Above - Mood Board</h6>
                </div>

                <Row>
                    <Col xs="12" sm="6">
                        <img src={thumbFront} alt="" />
                    </Col>
                    <Col xs="12" sm="6">
                        <img src={thumbBack} alt="" />
                    </Col>
                    <h6 className={style.subtitle}>Above - Initial Storyboard</h6>
                </Row>

                <p className={style.description}>
                    <span className={style.bold}>Appropriation Book:</span> The final book uses a black and white color scheme, with salmon as
                        an accent color. Based on the connection between the chosen quotes and the appropriated quote I created, I determined
                        a visual representation of the meaning behind the quotes. As the reader goes through the book, the spreads go from sans serif,
                        to serif, before mixing the two in the climax at the end of the book.

                </p>

                <div className={style.portfolioItem}>
                    <img src={cover} alt="" />
                    <h6 className={style.subtitle}>Above - Book Cover</h6>
                </div>

                <div className={style.portfolioItem}>
                    <img src={blocks} alt="" />
                    <h6 className={style.subtitle}>Above - Book Spread</h6>
                </div>

                <div className={style.portfolioItem}>
                    <img src={blocksClose} alt="" />
                    <h6 className={style.subtitle}>Above - Book Spread (Close Up)</h6>
                </div>

                <div className={style.portfolioItem}>
                    <img src={paint} alt="" />
                    <h6 className={style.subtitle}>Above - Book Spread</h6>
                </div>

                <div className={style.portfolioItem}>
                    <img src={letters} alt="" />
                    <h6 className={style.subtitle}>Above - Book Spread</h6>
                </div>

                <div className={style.portfolioItem}>
                    <img src={lettersClose} alt="" />
                    <h6 className={style.subtitle}>Above - Book Spread (Close Up)</h6>
                </div>
                <div className={style.portfolioItem}>
                    <img src={mistakes} alt="" />
                    <h6 className={style.subtitle}>Above - Book Spread</h6>
                </div>

            </Section>
        );
    }
}
