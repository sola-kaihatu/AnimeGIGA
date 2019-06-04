import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';

// import tileData from '../services/tileData';
import noImage from '../services/img/noImage.png';

function SingleLineGridList(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={2.5}>
        {props.tileData.map(tile => (
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
            // onClick={() => {
            //   alert(tile.title + 'の詳細表示しました(未実装)');
            // }}
          >
            <img src={tile.img ? tile.img : noImage} />
            <GridListTileBar
              title={tile.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <IconButton
                  onClick={() => {
                    props.onClickFavoriteButton(tile.id);
                  }}
                >
                  {props.favoriteList.some(favorite => favorite == tile.id) ? (
                    <StarBorderIcon style={{ color: 'yellow' }} />
                  ) : (
                    <StarBorderIcon className={classes.title} />
                  )}
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    width: '90%',
    height: '22vw',
    maxHeight: '265px',
    minHeight: '215px',
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: 'rgba(255, 255, 255)',
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
});

SingleLineGridList.propTypes = {
  classes: PropTypes.object.isRequired,
  onClickFavoriteButton: PropTypes.func,
  favoriteList: PropTypes.array,
  tileData: PropTypes.array,
};

export default withStyles(styles)(SingleLineGridList);
