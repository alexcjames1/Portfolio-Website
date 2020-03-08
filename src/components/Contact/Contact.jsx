import React, {Component} from 'react';
import classy from '../../utils/classy';
import style from './Contact.module.scss';
import {Col, Row, Container } from 'react-bootstrap';
import { Section } from '../../components';

import crest from './images/crest.svg';


export default class Contact extends Component {



    render() {
        return(
            <Section className={style.section} kind="dark">
                <Row>
                    <Col xs="12" sm="4">
                        <h2>Designer</h2>
                        <img src={crest} alt="" />
                    </Col>
                    <Col xs="12" sm="4">
                        <h2>Chicago, IL</h2>
                        <p>
                             The Method&trade;  Volcanic Ash Cleanser product line features seven products to beautify all parts of the body. Volcanic ash is infu detoxifying body wash,
                            blended with bergamot oil and white ginger extracthelps restore and hydrate for smoother, more beautiful-looking skin. For oily skin, dry skin, combination skin,
                            normal skin.These products are naturally derived, with no artificial ingredients, making it safe for users with allergies.
                            Turn your shower into the kind of escape you need. whether you want pure peace, an energy boost, a deep detox or some simple nourishment, each naturally derived
                            formula features nutrient-rich ingredients and a scent that’s sure to set the mood. no parabens. no phthalates. no bad vibes.
                        </p>
                    </Col>
                    <Col xs="12" sm="4">
                        <h2>Skills</h2>
                        <ul>
                            <li>blah</li>
                            <li>blah</li>
                            <li>blah</li>
                            <li>blah</li>
                            <li>blah</li>
                            <li>blah</li>
                        </ul>
                    </Col>
                </Row>
            </Section>
        );
    }
}
