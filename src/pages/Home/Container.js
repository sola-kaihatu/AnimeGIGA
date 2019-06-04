import React, { Component } from 'react';
import Page from './Page';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import tileData from '../../services/tileData';
import { LOCAL_STORAGE_KEYS } from '../../services/constant';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      category: '0',
      categories: tileData.AgeList,
      favoriteList: [],
      allTileData: tileData.tileData,
    };
    this.handleChange = this.handleChange.bind(this);
    this.pushScreen = this.pushScreen.bind(this);
    this.onClickFavoriteButton = this.onClickFavoriteButton.bind(this);
  }

  componentDidMount() {
    //取り出してパースする
    const favoriteList = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEYS.FAVORITE_LIST)
    );
    // 重複が存在した場合排除
    const newFavoriteList = favoriteList.filter(function(x, i, self) {
      return self.indexOf(x) === i;
    });

    this.setState({ favoriteList: newFavoriteList });
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  pushScreen(routeUrl) {
    this.props.history.push(routeUrl);
  }

  onClickFavoriteButton(id) {
    const newFavoriteList = this.state.favoriteList;

    if (!newFavoriteList.includes(id)) {
      newFavoriteList.push(id);
      localStorage.setItem(
        LOCAL_STORAGE_KEYS.FAVORITE_LIST,
        JSON.stringify(newFavoriteList)
      );
      console.log('重複なし登録');
      this.setState({ favoriteList: newFavoriteList });
    }
  }

  render() {
    return (
      <Page
        category={this.state.category}
        categories={this.state.categories}
        allTileData={this.state.allTileData}
        favoriteList={this.state.favoriteList}
        handleChange={this.handleChange}
        pushScreen={this.pushScreen}
        onClickFavoriteButton={this.onClickFavoriteButton}
      />
    );
  }
}

Home.propTypes = {
  history: PropTypes.object,
};

export default withRouter(Home);
