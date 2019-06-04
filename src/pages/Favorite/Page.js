import React from 'react';
import PropTypes from 'prop-types';
import TilePage from '../../components/TilePage';
import { AppBar } from '@material-ui/core';
import { contentsStyle } from '../../services/stylesJS';

const Page = props => {
  return (
    <div style={{ contentsStyle }}>
      <AppBar position="static" style={headerStyle}>
        <div style={headerTextStyle}>MyList</div>
      </AppBar>
      <div
        style={{
          width: '100vw',
          display: 'flex',
          justifyContent: 'center',
          alignContent: 'flex-end',
        }}
      >
        <TilePage
          // onClickFavoriteButton={e => {
          //   props.onClickFavoriteButton(e);
          // }}
          tileData={props.favoriteList}
          favoriteList={props.favoriteList}
        />
      </div>
    </div>
  );
};

const headerStyle = {
  height: '50px',
  backgroundColor: 'rgba(0, 0, 0, .8)',
  flexDirection: 'row',
  borderLeft: 'solid 5px #7db4e6',
};

const headerTextStyle = {
  marginLeft: '20px',
  fontWeight: 'bold',
  display: 'flex',
  alignItems: 'center',
};

Page.propTypes = {
  favoriteList: PropTypes.array,
};

export default Page;
