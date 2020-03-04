import React, { Component } from 'react';
import {Heading, Header, AppWrapper, Method} from '../../components';
import {Helmet} from "react-helmet";

export default class MethodBeauty extends Component {
    render() {
        return (
          <AppWrapper>
              <Helmet>
                <title>Alex James | Portfolio</title>
              </Helmet>
              <Method />
          </AppWrapper>
        );
    }
}
