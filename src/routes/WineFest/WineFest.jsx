import React, { Component } from 'react';
import {Heading, Header, AppWrapper, WineFest} from '../../components';
import {Helmet} from "react-helmet";

export default class WineFestPiece extends Component {
    render() {
        return (
          <AppWrapper>
              <Helmet>
                <title>Alex James | Portfolio</title>
              </Helmet>
              <WineFest />
          </AppWrapper>
        );
    }
}
