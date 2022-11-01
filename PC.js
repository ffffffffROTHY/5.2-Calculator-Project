import React, { Component } from 'react';
import stockpc from './stockpc.jpg';

export default class PC extends Component {

    render() {
      return(
        <>
          <img alt="stock pc image" src={stockpc} />
        </>
      )
    }
  }