import React from 'react';
import PropTypes from 'prop-types';
import {
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  AppBar,
  Button,
} from '@material-ui/core';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import MediaCards from '../../components/MediaCardsMain';
import TweetButton from '../../components/TweetButton';
import { contentsStyle } from '../../services/stylesJS';

import mainImg from './img/topNewImg.png';
import '../../services/style.css';

const Page = props => {
  const ageMenuCategories = [];
  const seasonMenuCategories = [];
  const seasonUrl = Number(props.season) + 1;

  for (let i = 0; i < props.animeAgeList.length; i += 1) {
    ageMenuCategories.push(
      <MenuItem key={i} value={i}>
        {props.animeAgeList[i]}
      </MenuItem>
    );
  }
  for (let i = 0; i < props.animeSeasonList.length; i += 1) {
    seasonMenuCategories.push(
      <MenuItem key={i} value={i}>
        {props.animeSeasonList[i]}
      </MenuItem>
    );
  }

  return (
    // <div style={{ ...contentsStyle, height: 'calc(var(--full-vh, 1vh))' }}>
    <div style={{ contentsStyle }}>
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
      <div className="backgroundImageChange">
        <div style={mainTextAreaStyle}>
          <div style={mainTextStyle}>AnimeGIGA</div>
        </div>
        <div style={subTextStyle}>
          <div className="typewriterStyle">
            アニメを 検索！お気に入り！PVシェア！
          </div>
        </div>
        <div
          style={{
            height: '45%',
            display: 'flex',
            justifyContent: 'center',
            overflow: 'hidden',
          }}
        >
          <img id="slideMainImage" src={mainImg} style={mainImageStyle} />
        </div>
      </div>
      <div className="selectArea">
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <MuiThemeProvider theme={selectBoxTheme}>
            <FormControl style={selectBoxStyle}>
              <InputLabel style={{ color: 'black' }}>年代</InputLabel>
              <Select
                value={props.category}
                onChange={props.handleChange}
                inputProps={{
                  name: 'category',
                }}
              >
                {ageMenuCategories}
              </Select>
            </FormControl>
            <FormControl style={selectBoxStyle}>
              <InputLabel style={{ color: 'black' }}>クール</InputLabel>
              <Select
                value={props.season}
                onChange={props.handleChange}
                inputProps={{
                  name: 'season',
                }}
              >
                {seasonMenuCategories}
              </Select>
            </FormControl>
          </MuiThemeProvider>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <MuiThemeProvider theme={selectButtonTheme}>
            <Button
              className="searchButtonStyle"
              style={buttonStyle}
              onClick={() => {
                props.pushScreen(
                  '/Search/' + props.animeAgeList[props.category] + seasonUrl
                );
              }}
            >
              アニメ検索
            </Button>
          </MuiThemeProvider>
        </div>
      </div>
      <div className="s1">
        <p
          style={{
            marginTop: '20px',
            background: 'linear-gradient(transparent 70%, yellow 70%)',
          }}
        >
          Anime GIGAとは
        </p>
      </div>
      <div
        style={{
          margin: '0 16px 16px 20px',
          display: 'flex',
          justifyContent: 'center',
        }}
        className="sample1"
      >
        AnimeGIGA
        はアカウント登録や、アプリのインストールが不要で、最新のアニメを検索しお気に入りリストの作成が出来ます！
        アニメPVへのリンクも搭載！
      </div>
      <div className="s1">
        <p
          style={{
            marginTop: '20px',
            background: 'linear-gradient(transparent 70%, yellow 70%)',
          }}
        >
          2019年1期 最新アニメ
        </p>
      </div>
      <div className="sample1">
        <MediaCards
          onClickFavoriteButton={e => {
            props.onClickFavoriteButton(e);
          }}
          favoriteList={props.favoriteList}
          animePv={props.animePv}
        />
      </div>
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          marginTop: '4vh',
          marginBottom: '10vh',
        }}
      >
        <TweetButton />
      </div>
    </div>
  );
};

const selectButtonTheme = createMuiTheme({
  overrides: {
    MuiButton: {
      root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        color: 'white',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        fontWeight: 'bold',
      },
    },
  },
  typography: {
    useNextVariants: true,
  },
});

const selectBoxTheme = createMuiTheme({
  overrides: {
    MuiSelect: {
      select: {
        color: 'black',
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        fontWeight: 'bold',
      },
      icon: {
        color: 'black',
      },
    },
  },
  typography: {
    useNextVariants: true,
  },
});

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

const mainTextAreaStyle = {
  height: '45%',
  display: 'flex',
  justifyContent: 'center',
  paddingTop: '10px',
  overflow: 'hidden',
};

const mainTextStyle = {
  fontSize: '17vmin',
  fontFamily: 'Londrina Shadow',
  color: 'black',
  display: 'flex',
  justifyContent: 'center',
  alignSelf: 'flex-end',
};

const subTextStyle = {
  paddingRight: '1rem',
  paddingLeft: '1rem',
  display: 'flex',
  justifyContent: 'center',
  margin: 0,
};

const mainImageStyle = {
  marginRight: '-130vw',
  width: '70vmin',
  height: '22vmin',
  objectFit: 'cover',
  alignSelf: 'flex-end',
};

const selectBoxStyle = {
  marginTop: '5vmin',
  marginLeft: '2vmin',
  width: '15vw',
  maxWidth: '20rem',
  minWidth: '9rem',
};

const buttonStyle = {
  marginTop: '6.5vmin',
  height: '2rem',
  marginLeft: '2vmin',
};

Page.propTypes = {
  category: PropTypes.any.isRequired,
  season: PropTypes.any.isRequired,
  animeAgeList: PropTypes.array.isRequired,
  animeSeasonList: PropTypes.array.isRequired,
  handleChange: PropTypes.func,
  pushScreen: PropTypes.func,
  onClickFavoriteButton: PropTypes.func,
  favoriteList: PropTypes.array,
  animePv: PropTypes.array,
};

export default Page;
