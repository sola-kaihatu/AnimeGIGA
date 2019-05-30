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
import TilePage from '../../components/SingleLineGridList';
import TweetButton from '../../components/TweetButton';
import { contentsStyle } from '../../services/stylesJS';
import backgroundImage from './img/background_ image.png';

// import styles from '../../services/style.css';
import '../../services/style.css';

const Page = props => {
  const menuCategories = [];

  for (let i = 0; i < props.categories.length; i += 1) {
    menuCategories.push(
      <MenuItem key={i} value={i}>
        {props.categories[i]}
      </MenuItem>
    );
  }
  return (
    // <div style={{ ...contentsStyle, height: 'calc(var(--full-vh, 1vh))' }}>
    <div style={{ contentsStyle }}>
      <AppBar position="static" style={headerStyle}>
        <div style={headerTextStyle}>MusicRanking</div>
        <Button color="inherit" style={{ marginLeft: 'auto' }}>
          Login
        </Button>
      </AppBar>
      <div style={backgroundImageStyle}>
        <div style={mainTextStyle}>MusicRanking</div>
        <div style={subTextStyle}>
          年代別のヒット曲を検索しよう！懐かしのあの曲をSNSでシェア！
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Grid container justify="center" style={selectAreaStyle}>
            <Grid item xs={12} sm={7}>
              <div style={selectAreaDetailStyle}>
                <MuiThemeProvider theme={selectBoxTheme}>
                  <FormControl style={selectBoxStyle}>
                    <InputLabel style={{ color: 'white', fontWeight: 'bold' }}>
                      年代選択
                    </InputLabel>
                    <Select
                      value={props.category}
                      onChange={props.handleChange}
                      inputProps={{
                        name: 'category',
                      }}
                    >
                      {menuCategories}
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
                        '/Search/' + props.categories[props.category]
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
          MusicRankingとは
        </p>
      </div>
      <div
        style={{
          margin: '0 16px 16px 20px',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        Music
        Rankingはアカウント登録や、アプリのインストールが不要で、懐かしの音楽を検索、お気に入りリストの作成が出来ます！
        お気に入りの曲を是非シェアしてください！
      </div>
      <div
        style={{
          width: '100vw',
          display: 'flex',
          justifyContent: 'center',
          alignContent: 'flex-end',
        }}
      >
        <TilePage />
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
        color: 'white',
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
};

const headerTextStyle = {
  marginLeft: '20px',
  fontWeight: 'bold',
  display: 'flex',
  alignItems: 'center',
};

const backgroundImageStyle = {
  height: '60vh',
  width: '100%',
  backgroundImage: 'url(' + backgroundImage + ')',
  backgroundSize: 'cover',
};

const mainTextStyle = {
  // paddingTop: '4vh',
  paddingTop: 'calc(var(--mobileVh, 4vh))',
  fontSize: '17vmin',
  fontFamily: 'Londrina Shadow',
  color: 'white',
  display: 'flex',
  justifyContent: 'center',
};

const subTextStyle = {
  paddingRight: '1rem',
  paddingLeft: '1rem',
  fontWeight: 'bold',
  color: 'white',
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
  width: '17rem',
};

const buttonStyle = {
  marginTop: '5vmin',
  width: '12rem',
  height: '3rem',
};

Page.propTypes = {
  category: PropTypes.any.isRequired,
  categories: PropTypes.array.isRequired,
  handleChange: PropTypes.func,
  pushScreen: PropTypes.func,
};

export default Page;
