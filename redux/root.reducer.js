import { combineReducers } from 'redux';
import profileReducer from './profile/profile.reducer';
import notiReducer from './notification/noti.reducer';

const rootReducer = combineReducers({
    profile: profileReducer,
    noti: notiReducer
});

export default rootReducer;