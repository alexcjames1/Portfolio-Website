import React, { Component } from 'react';
import {Heading, Header, AppWrapper, Snowminer} from '../../components';
import {Helmet} from "react-helmet";

export default class SnowminerPiece extends Component {
    render() {
        return (
          <AppWrapper>
              <Helmet>
                <title>alexcjames.com</title>
              </Helmet>
              <Snowminer />
          </AppWrapper>
        );
    }
}
