import React, {Component} from 'react';
import classy from '../../utils/classy';
import style from './Landing.module.scss';
import {Col, Row, Container } from 'react-bootstrap';
import { Section } from '../../components';
import {Link} from 'react-router-dom';

import method from './images/method.png';
import paint from './images/paint.png';
import front from './images/front.png';
import snowminer from './images/snowminer-laptop.png';
import crimsonValley from './images/crimson-valley.png';
import ferrentino from './images/ferrentino.png';
import wine from './images/wine-fest.png';

export default class Landing extends Component {



    render() {
        return(
            <Section className={style.section} kind="dark">
                <Row className={style.container}>
                    <Col className={style.example} xs="12" sm="6">
                            <Link to={"/method"}>
                                <img src={method} alt="#" className={style.image}/>
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
                            <Link to={"/WineFest"}>
                                <img src={wine} alt="#" className={style.image}/>
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
                        <Link to={"/snowminer"}>
                            <img src={snowminer} alt="#" className={style.image}/>
                        </Link>
                    </Col>
                    <Col className={style.example} xs="12" sm="6">
                            <Link to={"/typebook"}>
                                <img src={paint} alt="#" className={style.image}/>
                            </Link>
                    </Col>
                </Row>
                <Row className={style.container}>
                    <Col className={style.example} xs="12" sm="6">
                        <Link to={"/CrimsonValley"}>
                            <img src={crimsonValley} alt="#" className={style.image}/>
                        </Link>
                    </Col>
                    <Col className={style.contactInfo}xs="12" sm="6">
                        <a className={style.contact}href="emailto:alexcjames1@gmail.com">
                            <div className={style.contactContainer}>
                                        <h2 className={style.title}>Reach Out.</h2>
                            </div>
                        </a>
                    </Col>
                </Row>
            </Section>
        );
    }
}
