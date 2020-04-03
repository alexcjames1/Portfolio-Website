import React, {Component} from 'react';
import classy from '../../utils/classy';
import style from './Logo.module.scss';
import {Link} from 'react-router-dom';

export default class Logo extends Component {
    render() {
        return(
            <div className={style.logo}>
                <div className={style.media}>
                    <Link to={"/"} className={style.nav__link}>
                        <h1 className={style.logo}>alex</h1>
                    </Link>
                </div>
            </div>
        );
    }
}
