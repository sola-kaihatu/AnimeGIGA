import React from 'react';
import PropTypes from 'prop-types';
import { AppBar } from '@material-ui/core';
import { contentsStyle } from '../../services/stylesJS';

import MediaCards from '../../components/MediaCards';

const Page = props => {
  return (
    <div style={{ contentsStyle }}>
      <AppBar position="static" style={headerStyle}>
        <div style={headerTextStyle}>アニメページ(試作段階)</div>
      </AppBar>
      <div style={{ margin: '10px' }} />
      <MediaCards AnimePv={props.AnimePv} />
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
  AnimeData: PropTypes.array,
  AnimePv: PropTypes.array,
};

export default Page;
