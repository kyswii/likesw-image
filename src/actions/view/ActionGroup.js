'use strict';

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { slideDown, slideUp } from '../actions';

import './style.scss';

const ActionGroup = ({ onSlideDown, onSlideUp }) => {

    return (
        <div className="lsw-action-group">
            <a href="#" onClick={onSlideDown}>slideDown</a>
            <a href="#" onClick={onSlideUp}>slideUp</a>
        </div>
    );
}

ActionGroup.propTypes = {
    onSlideDown: PropTypes.func.isRequired,
    onSlideUp: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    onSlideDown: () => {
        dispatch(slideDown())
    },
    onSlideUp: () => {
        dispatch(slideUp())
    }
});

export default connect(null, mapDispatchToProps)(ActionGroup);