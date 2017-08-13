'use strict';

import { combineReducers } from 'redux';

import { reducer as actionReducer } from './actions/';


const reducers = combineReducers({
    images: actionReducer,
});

export default reducers;