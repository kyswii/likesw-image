'use strict';

import { createStore } from 'redux';

import reducer from './Reducers';

const initStates = {
    images: [
        {
            id: 1,
            src: '/images/image-1.jpg',
            text: 'Wisdom in the mind is better than money in the hand',
            slideToggle: true,
        },
        {
            id: 2,
            src: '/images/image-2.jpg',
            text: 'Nothing is impossible for a willing heart',
            slideToggle: false,
        },
        {
            id: 3,
            src: '/images/image-3.jpg',
            text: 'The future belongs to those who believe in the beauty of their dreams',
            slideToggle: false,
        },
        {
            id: 4,
            src: '/images/image-4.jpg',
            text: 'If living on the earth is a mission from the lord... living with you is th award of the lord...',
            slideToggle: false,
        }
    ]
}

export default createStore(reducer, initStates);