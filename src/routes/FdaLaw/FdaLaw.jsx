import React, { Component } from 'react';
import {Heading, Header, AppWrapper, FdaLaw} from '../../components';
import {Helmet} from "react-helmet";

export default class FdaLawPiece extends Component {
    render() {
        return (
          <AppWrapper>
              <Helmet>
                <title>alexcjames.com</title>
              </Helmet>
              <FdaLaw />
          </AppWrapper>
        );
    }
}
