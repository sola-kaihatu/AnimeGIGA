import React, { Component } from 'react';
import Page from './Page';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import tileData from '../../services/tileData';
import { LOCAL_STORAGE_KEYS, APIKEY } from '../../services/constant';
import { getAnimeList, getYoutubeData } from '../../services/api';

import anime from 'lib/anime.es.js';

class AnimeMain extends Component {
  constructor() {
    super();
    this.state = {
      category: '0',
      season: '0',
      animeAgeList: tileData.AgeList,
      animeSeasonList: tileData.Season,
      favoriteList: [],
      animePv: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.pushScreen = this.pushScreen.bind(this);
    this.onClickFavoriteButton = this.onClickFavoriteButton.bind(this);
  }

  async componentDidMount() {
    var elem = document.getElementById('slideMainImage');
    this.slideMainImage(elem);

    //取り出してパースする
    const favoriteList = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEYS.FAVORITE_LIST)
    );
    // 重複が存在した場合排除
    const newFavoriteList = favoriteList.filter(function(x, i, self) {
      return self.indexOf(x) === i;
    });

    const year = '2019';
    const period = '1';
    const animeData = await this.getAnimeList(year + '/' + period);
    const animePv = [];
    // const logAnime = [];
    for (let i = 0; i < animeData.length; i++) {
      // APIを呼ぶかどうかで切り替える
      // const res = await this.getYoutubeList(animeData[i].title + ' PV');
      const res = [];
      animePv.push(
        res.length === 0
          ? tileData.animeYoutubeLocalData2019_1[i]
          : (res.title = animeData[i].title)
      );
      // res.title = animeData[i].title;
      // logAnime.push(res);
    }
    // console.log('logAnime', logAnime);
    this.setState({ favoriteList: newFavoriteList, animePv });
  }

  slideMainImage(elem) {
    anime({
      targets: elem,
      translateX: -window.parent.screen.width * 2,
      duration: 300000,
    });
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  pushScreen(routeUrl) {
    this.props.history.push(routeUrl);
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

  async getAnimeList(period) {
    const { response, error } = await getAnimeList(period);
    if (error) {
      console.log('getAnimeListエラーだわ');
      return {};
    }
    return response.data;
  }

  async getYoutubeList(searchWord) {
    const params = {
      q: searchWord,
      part: 'snippet',
      type: 'video',
      maxResults: '1',
      key: APIKEY.YOUTUBE_DATA_API_V3_KEY,
    };
    const { response, error } = await getYoutubeData(params);
    if (error) {
      console.log('getYoutubeListエラーだわ');
      return '';
    }
    return response.data.items[0];
  }

  render() {
    return (
      <Page
        category={this.state.category}
        season={this.state.season}
        animeAgeList={this.state.animeAgeList}
        animeSeasonList={this.state.animeSeasonList}
        animePv={this.state.animePv}
        favoriteList={this.state.favoriteList}
        handleChange={this.handleChange}
        pushScreen={this.pushScreen}
        onClickFavoriteButton={this.onClickFavoriteButton}
      />
    );
  }
}

AnimeMain.propTypes = {
  history: PropTypes.object,
};

export default withRouter(AnimeMain);
