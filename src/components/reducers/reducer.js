import { combineReducers } from 'redux'
import counterReducer from '../counter/Counter.reducer'
import ColorpickerReducer from '../colorPicker/Colorpicker.reducer'
import dataCruncherReducer from '../dataCruncher/Datacruncher.reducer'

const rootReducer = combineReducers({
  counter       : counterReducer,
  colorPick     : ColorpickerReducer,
  dataCruncher  : dataCruncherReducer
})

export default rootReducer;
