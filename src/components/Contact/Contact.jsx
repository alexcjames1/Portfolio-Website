import React, {Component} from 'react';
import classy from '../../utils/classy';
import style from './Contact.module.scss';
import {Col, Row, Container } from 'react-bootstrap';
import { Section } from '../../components';

import headshot from './images/headshot.png';


export default class Contact extends Component {



    render() {
        return(
            <Section className={style.section} kind="dark">
                <Row className={style.aboutMe}>
                    <Col xs="12" sm="4">
                        <h2 className={style.heading}>Designer</h2>
                        <img src={headshot} alt="" />
                    </Col>
                    <Col xs="12" sm="4">
                        <h2 className={style.heading}>Chicago, IL &amp; Milwaukee, WI</h2>
                        <p className={style.description}>
                             Hi, my name is Alex James and I'm a Graphic Designer and Developer living in Milwaukee, Wisconsin and recent graduate of Columbia College
                             Chicago. At Columbia, I earned a Bachalor of Arts in Graphic Design with a Web Concentration in May 2020. I have experience designing for
                             Astute Web Group, Audentio, the Columbia College Chicago Communication and Fashion Design Departments, and various freelance
                             clients. I'm passionate about my work and am determined to exceed the goals of any client I work with. Reach out if you want to
                             work together!
                        </p>
                        <div className={style.buttonContainer}>
                            <div className={classy(style.email, style.button)}>
                                <a className={style.buttonLink} href="mailto:alexcjames1@gmail.com" target="_blank">Email</a>
                            </div>
                            <div className={classy(style.resume, style.button)}>
                                <a className={style.buttonLink} href="https://drive.google.com/open?id=1FGqz1ZYwevmjTHi80Afc-z3inKPf5Srg" target="_blank">Resume</a>
                            </div>
                        </div>
                    </Col>
                    <Col xs="12" sm="4">
                        <h5 className={style.skills}>Skills</h5>
                        <ul>
                            <li className={style.listItem}>
                                XD
                            </li>
                            <li className={style.listItem}>
                                Illustrator
                            </li>
                            <li className={style.listItem}>
                                InDesign
                            </li>
                            <li className={style.listItem}>
                                Photoshop
                            </li>
                            <li className={style.listItem}>
                                Communication
                            </li>
                            <li className={style.listItem}>
                                Time Management
                            </li>
                            <li className={style.listItem}>
                                React.js and SASS
                            </li>
                            <li className={style.listItem}>
                                HTML/CSS
                            </li>
                            <li className={style.listItem}>
                                Mailchimp
                            </li>
                            <li className={style.listItem}>
                                Microsoft Office
                            </li>
                        </ul>
                    </Col>
                </Row>
                <Row className={style.resume}>
                    <Col xs="12" sm="6">
                        <h2>Education</h2>
                        <div className={style.jobs}>
                            <p className={style.jobItem}><span className={style.date}>2018 - 2020</span><span> Columbia College Chicago</span><span className={style.position}> Graphic Design BA, Web Concentration</span></p>
                            <p className={style.jobItem}><span className={style.date}>2017 - 2018</span><span> Rock Valley Education</span><span className={style.position}> Design/General Education</span></p>
                            <p className={style.jobItem}><span className={style.date}>2013 - 2017</span><span> Hononegah High School</span><span className={style.position}> High School Diploma</span></p>
                        </div>
                    </Col>
                </Row>
                <h2>Design Experience</h2>
                <Row>
                    <Col xs="12" sm="6">
                        <div className={style.jobs}>
                        <p className={style.jobItem}><span className={style.date}>Jan 20 - May 20</span><span> Ferrentino, Donnis, &amp; Associates</span><span className={style.position}> Graphic/Web Designer</span></p>
                        <p className={style.jobItem}><span className={style.date}>Oct 19</span><span> Dearborn Denim (Columbia)</span><span className={style.position}> Freelance Graphic/Web Designer</span></p>
                        <p className={style.jobItem}><span className={style.date}>Sep 19 - Present</span><span> Communication Department (Columbia)</span><span className={style.position}> Graphic Designer</span></p>
                        <p className={style.jobItem}><span className={style.date}>Sep 19 - May 20</span><span> Fashion Department (Columbia)</span><span className={style.position}> Graphic Designer</span></p>
                        <p className={style.jobItem}><span className={style.date}>Jun 19</span><span> Advantage Originals</span><span className={style.position}> Freelance Graphic Designer</span></p>
                        <p className={style.jobItem}><span className={style.date}>May 19 - August 19</span><span> Audentio</span><span className={style.position}> Frontend Development Intern</span></p>
                        </div>
                    </Col>
                    <Col xs="12" sm="6">
                        <div className={style.jobs}>
                            <p className={style.jobItem}><span className={style.date}>Apr 19</span><span> Blue Diamond Photography</span><span className={style.position}> Freelance Graphic Designer</span></p>
                            <p className={style.jobItem}><span className={style.date}>Feb 19</span><span> Illinois State University Economics Department</span><span className={style.position}> Freelance Graphic Designer</span></p>
                            <p className={style.jobItem}><span className={style.date}>Nov 18</span><span> Vistage</span><span className={style.position}> Freelance Graphic Designer</span></p>
                            <p className={style.jobItem}><span className={style.date}>Oct 18</span><span> Illinois State University Student Government Association</span><span className={style.position}> Freelance Graphic Designer</span></p>
                            <p className={style.jobItem}><span className={style.date}>Jun 18 - Aug 18</span><span> Astute Web Group</span><span className={style.position}> Graphic Design Intern</span></p>
                        </div>
                    </Col>
                </Row>
            </Section>
        );
    }
}
