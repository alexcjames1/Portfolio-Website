import React, {Component} from 'react';
import classy from '../../utils/classy';
import style from './Landing.module.scss';
import {Col, Row, Container } from 'react-bootstrap';
import { Section } from '../../components';
import {Link} from 'react-router-dom';

import cover from './images/cover.png';
import paint from './images/paint.png';
import front from './images/front.png';
import snowminer from './images/snowminer.png';
import crimsonValley from './images/crimson-valley.png';
import ferrentino from './images/ferrentino.png';

export default class Landing extends Component {



    render() {
        return(
            <Section className={style.section} kind="dark">
                <Row className={style.container}>
                    <Col className={style.example} xs="12" sm="6">
                            <Link to={"/method"}>
                                <img src={cover} alt="#" className={style.image}/>
                            </Link>
                    </Col>
                    <Col className={style.example} xs="12" sm="6">
                            <Link to={"/FdaLaw"}>
                                <img src={ferrentino} alt="#" className={style.image}/>
                            </Link>
                    </Col>
                </Row>
                <Row className={style.container}>
                    <Col className={style.example} xs="12" sm="6">
                            <Link to={"/snowminer"}>
                                <img src={snowminer} alt="#" className={style.image}/>
                            </Link>
                    </Col>
                    <Col className={style.example} xs="12" sm="6">
                            <Link to={"/raaka"}>
                                <img src={front} alt="#" className={style.image}/>
                            </Link>
                    </Col>
                </Row>
                <Row className={style.container}>
                    <Col className={style.example} xs="12" sm="6">
                            <Link to={"/CrimsonValley"}>
                                <img src={crimsonValley} alt="#" className={style.image}/>
                            </Link>
                    </Col>
                    <Col className={style.example} xs="12" sm="6">
                            <Link to={"/typebook"}>
                                <img src={paint} alt="#" className={style.image}/>
                            </Link>
                    </Col>
                </Row>
            </Section>
        );
    }
}
