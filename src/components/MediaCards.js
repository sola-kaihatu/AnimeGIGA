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

import GridList from '@material-ui/core/GridList';
import noImage from '../services/img/noImage.png';
// import { getYoutubeData } from '../services/api';
import { ReportListContext } from '../';

class MediaCard extends React.Component {
  constructor() {
    super();
    // this.state = {
    //   // expanded: null,
    //   animePv: '',
    //   description: '',
    // };
  }

  // async componentDidMount(title) {
  //   const animePv = await this.getYoutubeList(title + ' PV');
  //   console.log('animePV', animePv);
  //   console.log('animePV acc', animePv.items[0].id.videoId);
  //   this.setState({
  //     animePv: animePv.items[0].snippet.thumbnails.default.url,
  //     description: animePv.items[0].snippet.description,
  //   });
  // }

  // async getYoutubeList(searchWord) {
  //   const params = {
  //     q: searchWord,
  //     part: 'snippet',
  //     type: 'video',
  //     maxResults: '1', // 最大検索数
  //     key: 'AIzaSyAbYxVVqFuSubJXasUloffNHSem_ateln4',
  //   };
  //   const { response, error } = await getYoutubeData(params);
  //   if (error) {
  //     alert('エラーだわ');
  //     return [];
  //   }
  //   return response.data;
  // }

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
              {this.props.AnimePv.map(AnimePv => (
                <Card className={classes.card} key={AnimePv}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image={AnimePv ? AnimePv : noImage}
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Title
                      </Typography>
                      <Typography component="p">
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      Share
                    </Button>
                    <Button size="small" color="primary">
                      Learn More
                    </Button>
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
  AnimePv: PropTypes.array,
};

const styles = {
  root: {
    display: 'flex',
    // flexWrap: 'wrap',
    // overflow: 'scroll',
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
};

export default withStyles(styles)(MediaCard);
