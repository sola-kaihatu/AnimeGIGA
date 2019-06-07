import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Grid } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';

import TweetButton from './TweetButton';

class ControlledExpansionPanels extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: null,
    };
    this.rankingCount = 0;
  }

  handleChange(panel) {
    this.setState({ expanded: this.state.expanded ? false : panel });
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
            </ExpansionPanelSummary>
            <ExpansionPanelDetails
              style={{ height: '250px', padding: '4px 12px 12px' }}
            >
              <Grid container justify="center">
                <Grid item xs={12} sm={4} style={{ height: '190px' }} />
                <Grid item xs={12} sm={8} style={{ height: '40px' }}>
                  <div
                    style={{
                      display: 'flex',
                      marginTop: '1vmin',
                      marginLeft: '10px',
                    }}
                  >
                    <TweetButton />
                    <IconButton
                      style={{ marginLeft: '20px', padding: '0px' }}
                      onClick={() => {
                        this.props.onClickFavoriteButton(tile.title);
                      }}
                    >
                      {this.props.favoriteList.some(
                        favorite => favorite == tile.title
                      ) ? (
                        <FavoriteIcon style={{ color: 'red' }} />
                      ) : (
                        <FavoriteBorderIcon className={classes.title} />
                      )}
                    </IconButton>
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
  onClickFavoriteButton: PropTypes.func,
  favoriteList: PropTypes.array,
};

const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '90%',
    flexShrink: 0,
  },
});

export default withStyles(styles)(ControlledExpansionPanels);
