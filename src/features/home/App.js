import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Template as HomeTemplate } from './'
import { Template as DashboardTemplate} from '../dashboard'
import { LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';

/*
  This is the root component of your app. Here you define the overall layout
  and the container of the react router. The default one is a two columns layout.
  You should adjust it according to the requirement of your app.
*/
export default class App extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  static defaultProps = {
    children: 'No content.',
  };

  renderTemplate(isExact){
    if(isExact){
      return <HomeTemplate>{this.props.children}</HomeTemplate>
    }else{
      return <DashboardTemplate>{this.props.children}</DashboardTemplate>
    }
  }

  render() {
    return (
      <div className="home-app">
        <LocaleProvider locale={enUS}>
          {this.renderTemplate(this.props.computedMatch.isExact)}
        </LocaleProvider>
      </div>
    );
  }
}
