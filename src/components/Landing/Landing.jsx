import React, {Component} from 'react';
import classy from '../../utils/classy';
import style from './Landing.module.scss';
import {Col, Row, Container } from 'react-bootstrap';
import { Section } from '../../components';
import {Link} from 'react-router-dom';

import cover from './images/cover.png';

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
                            <Link to={"/typebook"}>
                                <img src={cover} alt="#" className={style.image}/>
                            </Link>
                    </Col>
                </Row>
                <Row className={style.container}>
                    <Col className={style.example} xs="12" sm="6">
                            <Link to={"/snowminer"}>
                                <img src={cover} alt="#" className={style.image}/>
                            </Link>
                    </Col>
                    <Col className={style.example} xs="12" sm="6">
                            <Link to={"/raaka"}>
                                <img src={cover} alt="#" className={style.image}/>
                            </Link>
                    </Col>
                </Row>
                <Row className={style.container}>
                    <Col className={style.example} xs="12" sm="6">
                            <Link to={"/pastabook"}>
                                <img src={cover} alt="#" className={style.image}/>
                            </Link>
                    </Col>
                    <Col className={style.example} xs="12" sm="6">
                            <Link to={"/typeposter"}>
                                <img src={cover} alt="#" className={style.image}/>
                            </Link>
                    </Col>
                </Row>
            </Section>
        );
    }
}
