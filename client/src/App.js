import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";
import Loader from "react-loader";
import { IntlProvider } from "react-intl";
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import DashboardPage from "./components/pages/DashboardPage";
import SignupPage from "./components/pages/SignupPage";
import ConfirmationPage from "./components/pages/ConfirmationPage";
import ForgotPasswordPage from "./components/pages/ForgotPasswordPage";
import ResetPasswordPage from "./components/pages/ResetPasswordPage";
import UserRoute from "./components/routes/UserRoute";
import GuestRoute from "./components/routes/GuestRoute";
import TopNavigation from "./components/navigation/TopNavigation";
import CharactersPage from "./components/pages/CharactersPage";
import NewFanficPage from "./components/pages/NewFanficPage";
import FanficsPage from "./components/pages/FanficsPage";
import { fetchCurrentUserRequest } from "./actions/users";
import messages from "./messages";

class App extends React.Component {
  state = {
    fanfics: [{
      title: 'Hello world',
      fanficText: 'I like proggramm',
      img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F1%2F18%2FGlatt_-_Glattbrugg_IMG_6869.jpg%2F1200px-Glatt_-_Glattbrugg_IMG_6869.jpg&f=1&nofb=1',

    }]
  }
  componentDidMount() {
    if (this.props.isAuthenticated) this.props.fetchCurrentUserRequest();
  }

  updateFanfics = (fanfic) => {
    const fanfics = [...this.state.fanfics];

    fanfics.push(fanfic);

    this.state.fanfics = fanfics;

  }

  render() {
    const { location, isAuthenticated, loaded, lang } = this.props;
    const { fanfics } = this.state;
    return (
      <IntlProvider locale={lang} messages={messages[lang]}>
        <div>
          <Loader loaded={loaded}>
            {isAuthenticated && <TopNavigation />}
            <Route location={location} path="/" exact component={HomePage} />
            <Route
              location={location}
              path="/confirmation/:token"
              exact
              component={ConfirmationPage}
            />
            <GuestRoute
              location={location}
              path="/login"
              exact
              component={LoginPage}
            />
            <GuestRoute
              location={location}
              path="/signup"
              exact
              component={SignupPage}
            />
            <GuestRoute
              location={location}
              path="/forgot_password"
              exact
              component={ForgotPasswordPage}
            />
            <GuestRoute
              location={location}
              path="/reset_password/:token"
              exact
              component={ResetPasswordPage}
            />
            <UserRoute
              location={location}
              path="/dashboard"
              exact
              component={DashboardPage}
            />
            <UserRoute
              location={location}
              path="/characters"
              exact
              component={CharactersPage}
            />
            <UserRoute
              location={location}
              path="/characters/new"
              exact
              component={() => <NewFanficPage update={this.updateFanfics}/>}
            />
            <Route
              location={location}
              path="/dashboard"
              render={() => <FanficsPage fanfics={fanfics} />}
              exact

            />
          </Loader>
        </div>
      </IntlProvider>
    );
  }
}

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  fetchCurrentUserRequest: PropTypes.func.isRequired,
  loaded: PropTypes.bool.isRequired,
  lang: PropTypes.string.isRequired
};

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.user.email,
    loaded: state.user.loaded,
    lang: state.locale.lang
  };
}

export default connect(mapStateToProps, { fetchCurrentUserRequest })(App);
