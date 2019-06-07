import React, { Component } from 'react';
import Page from './Page';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { getAnimeList } from '../../services/api';
import { LOCAL_STORAGE_KEYS } from '../../services/constant';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      animeYear: null,
      animeSeason: null,
      selectedAgeListData: [],
      favoriteList: [],
    };
    this.pushScreen = this.pushScreen.bind(this);
    this.onClickFavoriteButton = this.onClickFavoriteButton.bind(this);
  }

  async componentDidMount() {
    const id = this.props.match.params.id || '';

    const animeYear = id.slice(0, 4);
    const animeSeason = id.slice(4);
    const animeData = await this.getAnimeList(animeYear + '/' + animeSeason);

    //取り出してパースする
    const favoriteList = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEYS.FAVORITE_LIST)
    );
    // 重複が存在した場合排除
    const newFavoriteList = favoriteList.filter(function(x, i, self) {
      return self.indexOf(x) === i;
    });

    this.setState({
      animeYear,
      animeSeason,
      selectedAgeListData: animeData,
      favoriteList: newFavoriteList,
    });
  }

  async getAnimeList(period) {
    const { response, error } = await getAnimeList(period);
    if (error) {
      console.log('getAnimeListエラーだわ');
      return {};
    }
    return response.data;
  }

  onClickFavoriteButton(id) {
    const favoriteList = this.state.favoriteList.concat();
    let newFavoriteList = [];

    if (!favoriteList.includes(id)) {
      favoriteList.push(id);
      newFavoriteList = favoriteList.concat();
    } else {
      newFavoriteList = favoriteList
        .filter(favorite => favorite !== id)
        .concat();
    }

    if (newFavoriteList.length >= 6) {
      alert('マイリストが上限です 5件まで登録可能です');
      return;
    }

    localStorage.setItem(
      LOCAL_STORAGE_KEYS.FAVORITE_LIST,
      JSON.stringify(newFavoriteList)
    );
    this.setState({ favoriteList: newFavoriteList });
  }

  pushScreen(routeUrl) {
    this.props.history.push(routeUrl);
  }

  render() {
    return (
      <div>
        <Page
          animeYear={this.state.animeYear}
          animeSeason={this.state.animeSeason}
          pushScreen={this.pushScreen}
          selectedAgeListData={this.state.selectedAgeListData}
          onClickFavoriteButton={this.onClickFavoriteButton}
          favoriteList={this.state.favoriteList}
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
