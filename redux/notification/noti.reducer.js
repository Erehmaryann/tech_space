import NotiActionTypes from './noti.types';

const INITIAL_STATE = {
    notiHidden: true
};

const NotiReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case NotiActionTypes.TOGGLE_NOTI_HIDDEN:
            return {
                ...state,
                notiHidden: !state.notiHidden
            };
        default:
            return state;
    }
};

export default NotiReducer;