'use strict';

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

const Image = ({ id, src, text, slideToggle, zIndex }) => {

    let style = { zIndex: zIndex };
    let pStyle = { };
    if (slideToggle) {
        style.marginTop = '-100%';
        pStyle.opacity = '1';
        pStyle.marginTop = '0';
    } else {
        style.marginTop = '0';
        pStyle.opacity = '0';
        pStyle.marginTop = '100px';
    }

    return (
        <div className="lsw-image-group-item" style={style} id={id} >
            <img src={src} />
            <p style={pStyle}>{text}</p>
        </div>
    );
    
}

Image.proptTypes = {
    id: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    slideToggle: PropTypes.bool.isRequired,
}

export default Image;