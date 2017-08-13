'use strict';

import React, { Component } from 'react';
import { render } from 'react-dom';

import { Provider } from 'react-redux';
import Container from './Container';
import store from './Store.js';

import './index.scss';

console.log('djfal..........', store.getState());

render(
    <Provider store={store}>
        <Container content="Hello World!" />
    </Provider>,
    document.body
);