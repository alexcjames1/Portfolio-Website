import React, {Component} from 'react';
import classy from '../../utils/classy';
import style from './Footer.module.scss';
import {Col, Row, Container } from 'react-bootstrap';
import { Section } from '../../components';

export default class Footer extends Component {
    render() {
        return(
            <footer className={style.footer}>
                <Container>
                    <Row className={style.legal}>
                        <Col xs="6">
                            <div>
                                <p className={style.copyright}>
                                     &copy; 2020 Alex James. All rights reserved.
                                </p>
                            </div>
                        </Col>
                        <Col xs="6" className={style.media}>
                            <div className={style.socialMedia}>
                                <ul className={style.socialMediaLinks}>
                                    <li className={style.instagram}>
                                        <a href="https://www.instagram.com/alexjames_portfolio/" target="_blank"><i className="mdi mdi-instagram"></i></a>
                                    </li>
                                     <li className={style.linkedin}>
                                         <a href="https://www.linkedin.com/in/alexcjamesdesign/" target="_blank"><i className="mdi mdi-linkedin"></i></a>
                                     </li>
                                     <li className={style.github}>
                                         <a href="https://github.com/alexcjames1" target="_blank"><i className="mdi mdi-github-circle"></i></a>
                                     </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>
        );
    }
}
