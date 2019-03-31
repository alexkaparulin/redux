export const RED = 'RED';
export const GREEN = 'GREEN';
export const BLUE = 'BLUE';

export const COLOR_SELECTED = 'COLOR_SELECTED';

export const selectColor = (color)=> ({
    type:COLOR_SELECTED,
    color:color
});

