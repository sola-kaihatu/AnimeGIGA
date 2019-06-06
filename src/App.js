import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, withRouter } from 'react-router-dom';
import Search from './pages/Search/Container';
import Favorite from './pages/Favorite/Container';
import AnimeMain from './pages/AnimeMain/Container';
import { ReportListContext } from './';

class App extends Component {
  constructor() {
    super();
    this.state = {
      reportListCol: 2,
    };
    this.handleWindowResize = this.handleWindowResize.bind(this);
  }

  componentDidMount() {
    this.handleWindowResize();
    window.addEventListener('resize', () => this.handleWindowResize());
  }

  handleWindowResize() {
    if (window.matchMedia('(max-width:599px)').matches) {
      // const vh = window.innerHeight;
      // let vh = window.innerHeight * 0.01;
      let vh2 = window.parent.screen.height / 100;
      // console.log(vh2, window.parent.screen.height);
      // document.documentElement.style.setProperty('--full-vh', `${vh}px`);
      document.documentElement.style.setProperty('--mobileVh', `${vh2}px`);
      this.setState({ reportListCol: 1 });
    } else if (
      window.matchMedia('(min-width: 600px) and (max-width: 959px)').matches
    ) {
      this.setState({ reportListCol: 3 });
    } else if (window.matchMedia('(min-width:960px)').matches) {
      this.setState({ reportListCol: 4 });
    }
  }

  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: 'calc(var(--full-vh, 1vh) * 100) ',
          backgroundColor: 'lightGray',
        }}
      >
        <ReportListContext.Provider
          value={{
            reportListCol: this.state.reportListCol,
          }}
        >
          <Switch>
            <Route exact path="/" component={AnimeMain} />
            <Route path="/Search/:id" component={Search} />
            <Route path="/Favorite/" component={Favorite} />
          </Switch>
        </ReportListContext.Provider>
      </div>
    );
  }
}

App.propTypes = {
  props: PropTypes.array,
};

export default withRouter(props => <App {...props} />);
