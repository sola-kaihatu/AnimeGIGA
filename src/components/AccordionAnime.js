import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Grid } from '@material-ui/core';
import TweetButton from './TweetButton';

import { getYoutubeData } from '../services/api';

class ControlledExpansionPanels extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: null,
      animePv: '',
      description: '',
    };
  }

  async handleChange(panel) {
    const animePv = await this.getYoutubeList(panel + ' PV');
    console.log('animePV', animePv);
    console.log('animePV acc', animePv.items[0].id.videoId);
    this.setState({
      expanded: this.state.expanded ? false : panel,
      //   animePv: animePv.items[0].id.videoId,
      animePv: animePv.items[0].snippet.thumbnails.default.url,
      description: animePv.items[0].snippet.description,
    });
  }

  async getYoutubeList(searchWord) {
    const params = {
      q: searchWord,
      part: 'snippet',
      type: 'video',
      maxResults: '1', // 最大検索数
      key: 'AIzaSyAbYxVVqFuSubJXasUloffNHSem_ateln4',
    };
    const { response, error } = await getYoutubeData(params);
    if (error) {
      alert('エラーだわ');
      return [];
    }
    return response.data;
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        {this.props.selectedAgeListData.map(tile => (
          <ExpansionPanel
            key={tile.title}
            expanded={this.state.expanded === tile.title}
            onChange={() => {
              this.handleChange(tile.title);
            }}
          >
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              style={{ padding: '0 10px 0 10px' }}
            >
              <div className={classes.heading}>{tile.title}</div>
              {/* <div className={classes.secondaryHeading}>{tile.title}</div> */}
            </ExpansionPanelSummary>
            <ExpansionPanelDetails
              style={{ height: '250px', padding: '4px 12px 12px' }}
            >
              <Grid container justify="center">
                <Grid item xs={12} sm={3} style={{ height: '190px' }}>
                  <img src={this.state.animePv} />
                  {/* <iframe
                    width="100%"
                    height="100%"
                    src={'https://www.youtube.com/embed/' + this.state.animePv}
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  /> */}
                </Grid>
                <Grid item xs={12} sm={9} style={{ height: '40px' }}>
                  <div>{this.state.description}</div>
                  <div
                    style={{
                      display: 'flex',
                      marginTop: '1vmin',
                      marginLeft: '10px',
                    }}
                  >
                    <TweetButton />
                  </div>
                </Grid>
              </Grid>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        ))}
      </div>
    );
  }
}

ControlledExpansionPanels.propTypes = {
  classes: PropTypes.object.isRequired,
  selectedAgeListData: PropTypes.array,
  //   AnimePv: PropTypes.string,
};

const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '100%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
});

export default withStyles(styles)(ControlledExpansionPanels);
