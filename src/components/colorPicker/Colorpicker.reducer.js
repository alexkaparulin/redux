import {
    COLOR_SELECTED
} from './Colorpicker.action'

export default (state=null,action)=>{
    switch (action.type) {
        case COLOR_SELECTED:
            return action.color
        default:
        return state;
    }
}