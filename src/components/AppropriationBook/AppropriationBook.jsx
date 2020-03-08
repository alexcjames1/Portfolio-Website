import React, {Component} from 'react';
import classy from '../../utils/classy';
import style from './AppropriationBook.module.scss';
import {Col, Row, Container } from 'react-bootstrap';
import { Section } from '../../components';

import moodBoard from './images/moodBoard.png';
import drawing1 from './images/drawing1.png';
import drawing2 from './images/drawing2.png';

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

                <div className={style.portfolioItem}>
                    <img src={moodBoard} alt="" />
                    <h6 className={style.subtitle}>Above - Mood Board</h6>
                </div>

                <Row>
                    <Col xs="12" sm="6">
                        <img src={drawing1} alt="" />
                    </Col>
                    <Col xs="12" sm="6">
                        <img src={drawing2} alt="" />
                    </Col>
                    <h6 className={style.subtitle}>Above - Initial Storyboard</h6>
                </Row>

                <p className={style.description}>
                    <span className={style.bold}>Brand Background:</span> The Method&trade;  Volcanic Ash Cleanser product line features seven products to beautify all parts of the body. Volcanic ash is infused into this detoxifying body wash,
                    blended with bergamot oil and white ginger extract. This helps restore and hydrate for smoother, more beautiful-looking skin. For oily skin, dry skin, combination skin,
                    normal skin.These products are naturally derived, with no artificial ingredients, making it safe for users with allergies.
                    <br/>
                    Turn your shower into the kind of escape you need. whether you want pure peace, an energy boost, a deep detox or some simple nourishment, each naturally derived
                    formula features nutrient-rich ingredients and a scent that’s sure to set the mood. no parabens. no phthalates. no bad vibes.

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
