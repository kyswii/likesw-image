'use strict';

import { SLIDEDOWN_IMAGE, SLIDEUP_IMAGE } from './actionTypes';

export const slideDown = () => ({
    type: SLIDEDOWN_IMAGE,
});

export const slideUp = () => ({
    type: SLIDEUP_IMAGE,
});