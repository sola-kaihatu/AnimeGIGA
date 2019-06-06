import React, { Component } from 'react';
import Page from './Page';
import { getAnimeList, getYoutubeData } from '../../services/api';
import { LOCAL_STORAGE_KEYS, APIKEY } from '../../services/constant';

class Favorite extends Component {
  constructor() {
    super();
    this.state = {
      favoriteList: [],
      animePv: [],
    };
  }

  async componentDidMount() {
    const favoriteList = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEYS.FAVORITE_LIST)
    );
    const animePv = [];
    for (let i = 0; i < favoriteList.length; i++) {
      const res = await this.getYoutubeList(favoriteList[i] + ' PV');
      res.title = favoriteList[i];
      animePv.push(res);
    }

    this.setState({ favoriteList, animePv });
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
      alert('YoutubeAPIが上限なので自分のkeyにするかしてください');
      return { snippet: { thumbnails: { high: { url: '' } } } };
    }
    return response.data.items[0];
  }

  render() {
    return (
      <div>
        <Page animePv={this.state.animePv} />
      </div>
    );
  }
}

export default Favorite;
