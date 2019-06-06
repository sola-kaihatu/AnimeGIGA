import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
import GridList from '@material-ui/core/GridList';
import { ReportListContext } from '../';

import noImage from '../services/img/noImage.png';

class MediaCard extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <ReportListContext.Consumer>
          {({ reportListCol }) => (
            <GridList
              className={classes.gridList}
              cols={reportListCol}
              cellHeight="auto"
            >
              {this.props.animePv.map(animePv => (
                <Card className={classes.card} key={animePv.title}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image={
                        animePv.snippet.thumbnails.high.url
                          ? animePv.snippet.thumbnails.high.url
                          : noImage
                      }
                      title="Contemplative Reptile"
                    />
                    <CardContent className={classes.content}>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="h2"
                        style={{
                          display: '-webkit-box',
                          WebkitBoxOrient: 'vertical',
                          WebkitLineClamp: '2',
                          overflow: 'hidden',
                        }}
                      >
                        {animePv.title}
                      </Typography>
                      <Typography
                        component="p"
                        style={{
                          display: '-webkit-box',
                          WebkitBoxOrient: 'vertical',
                          WebkitLineClamp: '4',
                          overflow: 'hidden',
                        }}
                      >
                        {animePv.snippet.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button
                      size="small"
                      color="primary"
                      onClick={() => {
                        window.open(
                          'https://www.youtube.com/watch?v=' +
                            animePv.id.videoId,
                          '',
                          ''
                        );
                      }}
                    >
                      動画を再生 ▷
                    </Button>
                    <div
                      style={{
                        display: 'flex',
                        marginTop: '1vmin',
                        marginLeft: 'auto',
                      }}
                    >
                      <IconButton
                        onClick={() => {
                          this.props.onClickFavoriteButton(animePv.title);
                        }}
                      >
                        {this.props.favoriteList.some(
                          favorite => favorite == animePv.title
                        ) ? (
                          <FavoriteIcon style={{ color: 'red' }} />
                        ) : (
                          <FavoriteBorderIcon className={classes.title} />
                        )}
                      </IconButton>
                    </div>
                  </CardActions>
                </Card>
              ))}
            </GridList>
          )}
        </ReportListContext.Consumer>
      </div>
    );
  }
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
  animePv: PropTypes.array,
  onClickFavoriteButton: PropTypes.func,
  favoriteList: PropTypes.array,
};

const styles = {
  root: {
    display: 'flex',
    width: '100%',
  },
  gridList: {
    width: '100%',
    height: '100%',
    alignContent: 'flex-start',
    justifyContent: 'center',
  },
  card: {
    maxWidth: 345,
    margin: 10,
  },
  media: {
    height: 140,
  },
  content: {
    height: 180,
  },
};

export default withStyles(styles)(MediaCard);
