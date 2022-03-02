import NotiActionTypes from './noti.types';

const INITIAL_STATE = {
    hidden: true
};

const NotiReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case NotiActionTypes.TOGGLE_NOTI_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            };
        default:
            return state;
    }
};

export default NotiReducer;