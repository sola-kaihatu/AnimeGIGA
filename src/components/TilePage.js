import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

import tileData from '../services/tileData';
import noImage from '../services/img/noImage.png';

function TitlebarGridList(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={4}>
        {tileData.tileData.map(tile => (
          <GridListTile
            key={tile.id}
            style={{
              maxHeight: '250px',
              maxWidth: '250px',
              minHeight: '200px',
              minWidth: '200px',
              height: '20vw',
              width: '20vw',
              objectFit: 'cover',
              objectPosition: 'top',
            }}
            onClick={() => {
              alert('クリックなう');
            }}
          >
            <img src={tile.img ? tile.img : noImage} />
            <GridListTileBar
              title={tile.title}
              subtitle={<span>by: {tile.singer}</span>}
              actionIcon={
                <IconButton className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

const styles = () => ({
  root: {
    display: 'flex',
    // flexWrap: 'wrap',
    // overflow: 'scroll',
    width: '90%',
  },
  gridList: {
    width: '100%',
    height: '100%',
    alignContent: 'flex-start',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
});

TitlebarGridList.propTypes = {
  classes: PropTypes.object.isRequired,
  reportList: PropTypes.array,
  onReport: PropTypes.func,
};

TitlebarGridList.defaultProps = {
  reportList: [],
};

export default withStyles(styles)(TitlebarGridList);
