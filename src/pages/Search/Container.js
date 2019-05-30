import React, { Component } from 'react';
import Page from './Page';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import tileData from '../../services/tileData';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      age: null,
      selectedAgeListData: [],
    };
  }

  componentDidMount() {
    const id = Number(this.props.match.params.id || '');
    const selectedAgeListData = tileData.tileData.filter(
      ageData => ageData.age === id
    );

    this.setState({ age: id, selectedAgeListData });
  }

  render() {
    return (
      <div>
        <Page
          age={this.state.age}
          selectedAgeListData={this.state.selectedAgeListData}
        />
      </div>
    );
  }
}

Search.propTypes = {
  history: PropTypes.object,
  match: PropTypes.object,
};

export default withRouter(Search);
