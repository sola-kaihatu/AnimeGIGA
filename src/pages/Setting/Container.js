import React, { Component } from 'react';
import Page from './Page';
import tileData from '../../services/tileData';
import { getAnimeList, getYoutubeData } from '../../services/api';

class Setting extends Component {
  constructor() {
    super();
    this.state = {
      animeData: [],
      animePv: [],
    };
  }

  async componentDidMount() {
    const animeData = await this.getAnimeList();
    console.log('animeData', animeData);
    const animePv = [];
    for (let i = 0; i < animeData.length; i++) {
      // APIを呼ぶかどうかで切り替える
      // const res = await this.getYoutubeList(animeData[i].title + ' PV');
      const res = [];
      animePv.push(res.length === 0 ? tileData.animeYoutubeLocalData[i] : res);
    }
    console.log(animePv);

    this.setState({ animeData, animePv });
  }

  async getAnimeList() {
    const { response, error } = await getAnimeList();
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
      maxResults: '1', // 最大検索数
      key: 'AIzaSyDxGKnE9Kwxz3fiRzZ_qOausEXWXct8bTc',
    };
    const { response, error } = await getYoutubeData(params);
    if (error) {
      console.log('getYoutubeListエラーだわ');
      return '';
    }
    return response.data.items[0].snippet.thumbnails.default.url;
  }

  render() {
    return (
      <div>
        <Page AnimeData={this.state.animeData} AnimePv={this.state.animePv} />
      </div>
    );
  }
}

export default Setting;
