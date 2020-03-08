import React, {Component} from 'react';
import classy from '../../utils/classy';
import style from './Snowminer.module.scss';
import {Col, Row, Container } from 'react-bootstrap';
import { Section } from '../../components';

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
                        <h2 className={style.header}>Snowminer Web Design</h2>
                        <h6>Intern Project</h6>
                        <p className={style.challenge}>
                            <span className={style.bold}>Challenge:</span> To create a user interface that would allow users,
                                both drivers and customers to seamlessly conduct business and gain information about the product.
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
                    <img src={front} alt="" />
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
                    <img src={right} alt="" />
                    <h6 className={style.subtitle}>Above - Consumer Concepts</h6>
                </div>

                <div className={style.portfolioItem}>
                    <img src={close} alt="" />
                    <h6 className={style.subtitle}>Above - Initial Packaging Concepts</h6>
                </div>

                <p className={style.description}>
                    <span className={style.bold}>Packaging:</span> To create the packaging for the Method&trade; beauty line, I chose to use abstract magma imagery as it
                        communicates the idea of a volcano in a much more interesting way than simply using a picture of a volcano. I also chose to use black as an integral part of
                        the secondary packaging design because it adds drama to the package and creates a high-end feel when compared to other health and beauty products. For the primary
                        packaging, I chose to use a bright orange color because, as the inside of the secondary packaging is black, when the user opens the box, there is a surprise with the orange
                        heavily contrasting the black.

                </p>

                <div className={style.portfolioItem}>
                    <img src={right} alt="" />
                    <h6 className={style.subtitle}>Above - Bar Front Packaging</h6>
                </div>

                <div className={style.portfolioItem}>
                    <img src={mobile} alt="" />
                    <h6 className={style.subtitle}>Above - Bar Back Packaging</h6>
                </div>

                <div className={style.portfolioItem}>
                    <h6 className={style.subtitle}>Above - Close Up of Bar Back</h6>
                </div>

                <div className={style.portfolioItem}>
                    <h6 className={style.subtitle}>Above - Front and Back Packaging</h6>
                </div>

                <div className={style.portfolioItem}>
                    <h6 className={style.subtitle}>Above - Internal Packaging</h6>
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
                    <h6 className={style.subtitle}>Above - Business Cards</h6>
                </div>
                <div className={style.portfolioItem}>
                    <h6 className={style.subtitle}>Above - Stationery System</h6>
                </div>

            </Section>
        );
    }
}
