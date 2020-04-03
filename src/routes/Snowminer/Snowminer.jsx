import React, { Component } from 'react';
import {Heading, Header, AppWrapper, SnowminerWebsite} from '../../components';
import {Helmet} from "react-helmet";

export default class Snowminer extends Component {
    render() {
        return (
          <AppWrapper>
              <Helmet>
                <title>alexcjames.com</title>
              </Helmet>
              <SnowminerWebsite />
          </AppWrapper>
        );
    }
}
