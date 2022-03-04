import { createSelector } from 'reselect';

const selectProfile = state => state.profile;

export const selectProfileHidden = createSelector(
    [selectProfile],
    profile => profile.hidden
);
