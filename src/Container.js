'use strict';

import React, { Component } from 'react';
import { view as Images } from './images/';
import { view as Actions } from './actions/'

function Container() {
    return (
        <div className="lsw-container">
            <Images />
            <Actions />
        </div>
    );
}

export default Container;