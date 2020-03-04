import React, {Component} from 'react';
import classy from '../../utils/classy';
import style from './Header__nav.module.scss';
import { Route } from  'react-router';
import {Link} from 'react-router-dom';



export default class Header__nav extends React.Component {
    render() {
        return(
            <div>
                <nav className={classy(style.navigation, style.navigationMain, style.nav)}>
                    <ul className={classy(style.navigation__menuList, style.nav__menuList)}>
                        <li className={style.nav__menuItem}>
                            <Link to={"/"} className={style.nav__link}>Work</Link>
                        </li>
                        <li className={classy(style.nav__menuItem, style.nav__menuItemActive)}>
                            <Link to={"/Contact"} className={style.nav__link}>Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}
