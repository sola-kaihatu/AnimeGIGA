import React, { Component } from 'react';
import Page from './Page';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import tileData from '../../services/tileData';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      category: '0',
      categories: tileData.AgeList,
    };
    this.handleChange = this.handleChange.bind(this);
    this.pushScreen = this.pushScreen.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  pushScreen(routeUrl) {
    this.props.history.push(routeUrl);
  }

  render() {
    return (
      <Page
        category={this.state.category}
        categories={this.state.categories}
        handleChange={this.handleChange}
        pushScreen={this.pushScreen}
      />
    );
  }
}

Home.propTypes = {
  history: PropTypes.object,
};

export default withRouter(Home);
