import React, { Component } from 'react';
import Page from './Page';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
// import tileData from '../../services/tileData';
import { getAnimeList } from '../../services/api';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      animeYear: null,
      animeSeason: null,
      selectedAgeListData: [],
    };
  }

  async componentDidMount() {
    const id = this.props.match.params.id || '';

    const animeYear = id.slice(0, 4);
    const animeSeason = id.slice(4);
    const animeData = await this.getAnimeList(animeYear + '/' + animeSeason);

    this.setState({ animeYear, animeSeason, selectedAgeListData: animeData });
  }

  async getAnimeList(period) {
    const { response, error } = await getAnimeList(period);
    if (error) {
      console.log('getAnimeListエラーだわ');
      return {};
    }
    return response.data;
  }

  render() {
    return (
      <div>
        <Page
          animeYear={this.state.animeYear}
          animeSeason={this.state.animeSeason}
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
