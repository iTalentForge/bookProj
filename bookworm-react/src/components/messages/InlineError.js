import React from 'react';
import PropTypes from "prop-types";

const InlineError = ({text}) => (
    <span style={{color: "#a65452"}}>{text}</span>
);

InlineError.propTypes = {
    text: PropTypes.string.isRequired
};

export default InlineError;