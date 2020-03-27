import React, { Component } from 'react';
import {Heading, Header, AppWrapper, CrimsonValley} from '../../components';
import {Helmet} from "react-helmet";

export default class CrimsonValleyPiece extends Component {
    render() {
        return (
          <AppWrapper>
              <Helmet>
                <title>Alex James | Portfolio</title>
              </Helmet>
              <CrimsonValley />
          </AppWrapper>
        );
    }
}