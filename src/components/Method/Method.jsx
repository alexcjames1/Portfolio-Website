import React, {Component} from 'react';
import classy from '../../utils/classy';
import style from './Method.module.scss';
import {Col, Row, Container } from 'react-bootstrap';
import { Section } from '../../components';

import methodLogo from './images/method-logo.png';
import moodBoard from './images/moodBoard.png';
import primaryConcepts from './images/primaryConcepts.png';

import fullLine from './images/full-line.png';
import bathSalt from './images/bath-salt.png';
import primary from './images/primary.png';
import packagingBack from './images/packagingBack.png';
import dieline from './images/dieline.png';

import cover from './images/cover.png';
import spreadOne from './images/spreadOne.png';

import stationery from './images/stationery.png';

export default class Method extends Component {



    render() {
        return(
            <Section className={style.section} kind="dark">
                <Row className={style.projectTitle}>
                    <Col xs="12" sm="6" className={style.content}>
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
                    <Col xs="12" sm="6">
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
                                Stationery
                            </li>
                            <li className={style.listItem}>
                                Layout
                            </li>
                        </ul>
                    </Col>
                </Row>
                <div className={style.portfolioItem}>
                    <img src={methodLogo} alt="" />
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
                    <img src={primaryConcepts} alt="" />
                    <h6 className={style.subtitle}>Above - Initial Packaging Concepts</h6>
                </div>

                <div className={style.portfolioItem}>
                    <img src={moodBoard} alt="" />
                    <h6 className={style.subtitle}>Above - Style Tile</h6>
                </div>

                <p className={style.description}>
                    <span className={style.bold}>Packaging:</span> To create the packaging for the Method&trade; beauty line, I chose to use abstract magma imagery as it
                        communicates the idea of a volcano in a much more interesting way than simply using a picture of a volcano. I also chose to use black as an integral part of
                        the secondary packaging design because it adds drama to the package and creates a high-end feel when compared to other health and beauty products. For the primary
                        packaging, I chose to use a bright orange color because, as the inside of the secondary packaging is black, when the user opens the box, there is a surprise with the orange
                        heavily contrasting the black.

                </p>

                <div className={style.portfolioItem}>
                    <img src={fullLine} alt="" />
                    <h6 className={style.subtitle}>Above - Full Packaging Line</h6>
                </div>

                <div className={style.portfolioItem}>
                    <img src={bathSalt} alt="" />
                    <h6 className={style.subtitle}>Above - Full Packaging Line</h6>
                </div>

                <div className={style.portfolioItem}>
                    <img src={packagingBack} alt="" />
                    <h6 className={style.subtitle}>Above - Back of Secondary Packaging</h6>
                </div>

                <div className={style.portfolioItem}>
                    <img src={primary} alt="" />
                    <h6 className={style.subtitle}>Above - Primary Packaging</h6>
                </div>

                <p className={style.description}>
                    <span className={style.bold}>Stationery:</span> To create the brochure, I chose to use the magma imagery on the cover because it acts as a stimulus image
                        and will easily grab the attention of the user. In the introduction, I felt it was important to keep it simple and allow the user to ease into the content,
                        which is why I chose to simply use my color palette as the background to the pages. Although the introduction is used to ease the user into the content, I am
                        using the bright orange to keep their attention and draw them into the other pages of the brochure. On the main content pages, I chose to keep as similar layout
                        and let the imagery create the variety, as changes in layout could overwhelm the user with information.
                        <br/>
                        In the Method&trade; stationery system, I chose to use the magma imagery as an accent to the content of the system. I chose to make the folder black because I associated
                        it with the emotions I wanted the user to feel when they were opening the packaging, with the secondary item being black and the internal collateral being the attention grabber.

                </p>

                <div className={style.portfolioItem}>
                    <img src={cover} alt="" />
                    <h6 className={style.subtitle}>Above - Brochure Cover</h6>
                </div>

                <div className={style.portfolioItem}>
                    <img src={spreadOne} alt="" />
                    <h6 className={style.subtitle}>Above - Brochure Introduction</h6>
                </div>
                <div className={style.portfolioItem}>
                    <img src={stationery} alt="" />
                    <h6 className={style.subtitle}>Above - Stationery System</h6>
                </div>

            </Section>
        );
    }
}
