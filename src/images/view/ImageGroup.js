'use strict';

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Image from './Image';

import './style.scss';

const ImageGroup = ({ images }) => {
    console.log('rea.............', images);
    return (
        <div className="lsw-image-group">
            {   
                
                images.map((item, i) => (
                    <Image
                        key={item.id}
                        id={item.id}
                        src={item.src}
                        text={item.text}
                        slideToggle={item.slideToggle}
                        zIndex={i + 100}
                    />
                ))
            }
        </div>
    );
}

ImageGroup.propTypes = {
    images: PropTypes.array.isRequired,
};

const mapStateToProps = (state, ownProps) => {
    console.log('state........', state);
    return {
        images: state.images,
    };
}

export default connect(mapStateToProps)(ImageGroup);