import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Button } from '@material-ui/core';
import Accordion from '../../components/Accordion';

const Page = props => {
  return (
    <div>
      <AppBar position="static" style={headerStyle}>
        <div style={headerTextStyle}>Anime GIGA</div>
        <Button
          color="inherit"
          style={{ marginLeft: 'auto' }}
          onClick={() => {
            props.pushScreen('/Favorite/');
          }}
        >
          MyList
        </Button>
      </AppBar>
      <div style={{ height: '50px' }} />
      <div style={{ margin: '30px 10px 10px 10px' }}>
        <h3 style={subHeaderStyle}>
          {props.animeYear}年{props.animeSeason}期 アニメ
        </h3>
      </div>
      <div
        style={{
          marginLeft: '10px',
          marginRight: '10px',
          marginBottom: '10px',
        }}
      >
        <Accordion
          onClickFavoriteButton={e => {
            props.onClickFavoriteButton(e);
          }}
          selectedAgeListData={props.selectedAgeListData}
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
  position: 'fixed',
};

const headerTextStyle = {
  fontSize: '20px',
  marginLeft: '20px',
  fontWeight: 'bold',
  display: 'flex',
  alignItems: 'center',
  fontFamily: 'Londrina Shadow',
};

const subHeaderStyle = {
  padding: '0.4em 0.5em',
  color: '#494949',
  background: '#f4f4f4',
  borderLeft: 'solid 5px #7db4e6',
  borderBottom: 'solid 3px #d7d7d7',
};

Page.propTypes = {
  animeYear: PropTypes.string,
  animeSeason: PropTypes.string,
  pushScreen: PropTypes.func,
  selectedAgeListData: PropTypes.array,
  onClickFavoriteButton: PropTypes.func,
  favoriteList: PropTypes.array,
};

export default Page;
