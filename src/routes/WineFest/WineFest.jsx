import React, { Component } from 'react';
import {Heading, Header, AppWrapper, Landing} from '../../components';
import {Helmet} from "react-helmet";

export default class WineFest extends Component {
    render() {
        return (
          <AppWrapper>
              <Helmet>
                <title>Alex James | Portfolio</title>
              </Helmet>
              <Landing />
          </AppWrapper>
        );
    }
}
