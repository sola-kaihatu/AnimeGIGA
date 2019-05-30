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
// import backgroundImage from './img/background_ image.jpg';

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
    <div style={contentsStyle}>
      <AppBar position="static" style={headerStyle}>
        <div
          style={{
            marginLeft: '20px',
            fontSize: '10vmin',
            fontFamily: 'Londrina Shadow',
          }}
        >
          MusicRanking
        </div>
        <Button
          color="inherit"
          style={{ marginTop: '5vmin', marginLeft: 'auto' }}
        >
          Login
        </Button>
      </AppBar>
      <div style={bodyStyle}>
        <Grid container justify="center" style={selectAreaStyle}>
          <Grid item xs={12} sm={7}>
            <div style={testStyle}>
              <MuiThemeProvider theme={selectBoxTheme}>
                <FormControl style={selectBoxStyle}>
                  <InputLabel style={{ color: 'white' }}>年代選択</InputLabel>
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
            <div style={testStyle}>
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
      <div
        style={{
          width: '100vw',
          height: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignContent: 'flex-end',
        }}
      >
        <TilePage />
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
        color: 'white',
      },
    },
  },
  typography: {
    useNextVariants: true,
  },
});

const contentsStyle = {
  // height: '100Vh',
  // width: '100%',
  // overflow: 'scroll',
};

const headerStyle = {
  height: '15vmin',
  maxHeight: '100px',
  width: '100%',
  // minWidth: '40rem',
  opacity: 0.5,
  backgroundColor: 'rgba(0, 0, 0, 1)',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'row',
  borderLeft: 'solid 5px #7db4e6',
};

const bodyStyle = {
  display: 'flex',
  justifyContent: 'center',
  // height: '70vh',
  // maxHeight: '650px',
  width: '100%',
  //   backgroundImage: 'url(' + backgroundImage + ')',
  //   backgroundSize: 'cover',
};

const selectAreaStyle = {
  width: '100vw',
  maxWidth: '35rem',
  paddingTop: '80px',
  paddingBottom: '120px',
};

const testStyle = {
  display: 'flex',
  justifyContent: 'center',
};

const selectBoxStyle = {
  marginTop: '30px',
  width: '18rem',
};

const buttonStyle = {
  marginTop: '30px',
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
