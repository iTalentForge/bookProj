import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { charactersSelector } from "../../reducers/characters";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";

const CharactersPage = ({ characters }) => (
  <div>
    {characters.length === 0 && (
      <div className="text-center">
        <div className="alert alert-info">
          <FormattedMessage id="div.create" defaultMessage="You have no characters yet. How about creating one?" />
        </div>
        <Link to="/characters/new" className="btn btn-primary btn-lg">
          <FormattedMessage id="link.create" defaultMessage="Create New Character" />
        </Link>
      </div>
    )}
  </div>
);

CharactersPage.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.object).isRequired
};

function mapStateToProps(state) {
  return {
    characters: charactersSelector(state)
  };
}

export default connect(mapStateToProps)(CharactersPage);
