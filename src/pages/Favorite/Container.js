import React, { Component } from 'react';
import Page from './Page';
// import PropTypes from 'prop-types';
// import { withRouter } from 'react-router';
import tileData from '../../services/tileData';
import { LOCAL_STORAGE_KEYS } from '../../services/constant';

class Favorite extends Component {
  constructor() {
    super();
    this.state = {
      favoriteList: [],
      allTileData: tileData.tileData,
    };
  }

  componentDidMount() {
    //取り出してパースする
    const favoriteList = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEYS.FAVORITE_LIST)
    );
    const favoriteDataList = this.state.allTileData.filter(tileData =>
      favoriteList.includes(tileData.id)
    );

    this.setState({ favoriteList: favoriteDataList });
  }

  render() {
    return (
      <div>
        <Page favoriteList={this.state.favoriteList} />
      </div>
    );
  }
}

// Favorite.propTypes = {
//   history: PropTypes.object,
//   match: PropTypes.object,
// };

export default Favorite;
// export default withRouter(Favorite);
