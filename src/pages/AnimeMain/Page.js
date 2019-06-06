import React from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
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

import topImage from './img/topImg2.png';
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
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            paddingTop: '10px',
            paddingBottom: '10px',
          }}
        >
          <div style={mainTextStyle}>AnimeGIGA</div>
          <div
            className="sample1"
            style={{ width: '30vmin', height: '30vmin' }}
          >
            <img
              src={topImage}
              style={{ width: '26vmin', height: '50vmin', objectFit: 'cover' }}
            />
          </div>
        </div>
        <div style={subTextStyle}>
          最新のアニメまで検索！お気に入り！PVをシェア！
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Grid container justify="center" style={selectAreaStyle}>
            <Grid item xs={12} sm={7}>
              <div style={selectAreaDetailStyle}>
                <MuiThemeProvider theme={selectBoxTheme}>
                  <FormControl style={selectBoxStyle}>
                    <InputLabel style={{ color: 'black', fontWeight: 'bold' }}>
                      年代
                    </InputLabel>
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
                    <InputLabel style={{ color: 'black', fontWeight: 'bold' }}>
                      クール
                    </InputLabel>
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
            </Grid>
            <Grid item xs={12} sm={5}>
              <div style={selectAreaDetailStyle}>
                <MuiThemeProvider theme={selectButtonTheme}>
                  <Button
                    style={buttonStyle}
                    onClick={() => {
                      props.pushScreen(
                        '/Search/' +
                          props.animeAgeList[props.category] +
                          seasonUrl
                      );
                    }}
                  >
                    ランキング検索
                  </Button>
                </MuiThemeProvider>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
      <div className="s1">
        <p
          style={{
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

const mainTextStyle = {
  paddingTop: 'calc(var(--mobileVh, 4vh))',
  fontSize: '17vmin',
  fontFamily: 'Londrina Shadow',
  color: 'black',
  display: 'flex',
  justifyContent: 'center',
};

const subTextStyle = {
  paddingRight: '1rem',
  paddingLeft: '1rem',
  fontWeight: 'bold',
  color: 'black',
  display: 'flex',
  justifyContent: 'center',
};

const selectAreaStyle = {
  width: '100vw',
  maxWidth: '35rem',
};

const selectAreaDetailStyle = {
  display: 'flex',
  justifyContent: 'center',
};

const selectBoxStyle = {
  marginTop: '5vmin',
  marginLeft: '2vmin',
  width: '9rem',
};

const buttonStyle = {
  marginTop: '5vmin',
  width: '12rem',
  height: '3rem',
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
