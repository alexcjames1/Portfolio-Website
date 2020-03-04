import React, {Component} from 'react';
import classy from '../../utils/classy';
import style from './Logo.module.scss';
import botLogo from './images/bot-logo.png';

export default class Logo extends Component {
    render() {
        return(
            <div className={style.logo}>
                <div className={style.media}>
                    <h1 className={style.logo}>alex</h1>
                </div>
            </div>
        );
    }
}
