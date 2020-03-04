import React, { Component } from 'react';
import {Heading, Header, AppWrapper, AppropriationBook} from '../../components';
import {Helmet} from "react-helmet";

export default class TypeBookPiece extends Component {
    render() {
        return (
          <AppWrapper>
              <Helmet>
                <title>Alex James | Portfolio</title>
              </Helmet>
              <AppropriationBook />
          </AppWrapper>
        );
    }
}
