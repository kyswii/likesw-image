import { SLIDEDOWN_IMAGE, SLIDEUP_IMAGE } from './actionTypes';

let index = 0;
export default (state = [ ], action) => {
    switch (action.type) {
        case SLIDEUP_IMAGE: {
            if (index >= (state.length - 1)) {
                return state;
            }

            index++;

            return state.map((item, i) => {

                    if (i === index) {
                        return Object.assign({}, item, {
                            slideToggle: true
                        });
                    }
                    return item;
                });
        }
        case SLIDEDOWN_IMAGE: {
            if (index <= 0) {
                return state;
            }

            return state.map((item, i) => {
                    if (i === index) {
                        index--;

                        return Object.assign({}, item, {
                            slideToggle: false
                        });
                    }
                    return item;
                });
        }
        default: {
            return state;
        }
    }
}