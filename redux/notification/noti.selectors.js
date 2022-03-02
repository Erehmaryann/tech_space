import { createSelector } from 'reselect';

const selectNoti = state => state.noti;

export const selectNotiHidden = createSelector(
    [selectNoti],
    noti => noti.hidden
);