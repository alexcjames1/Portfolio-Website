import React, { Component } from 'react';
import {Heading, Header, AppWrapper, Raaka} from '../../components';
import {Helmet} from "react-helmet";

export default class RaakaPiece extends Component {
    render() {
        return (
          <AppWrapper>
              <Helmet>
                <title>Alex James | Portfolio</title>
              </Helmet>
              <Raaka />
          </AppWrapper>
        );
    }
}
