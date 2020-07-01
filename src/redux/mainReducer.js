import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import EmailAuth7375Reducer from '../features/EmailAuth7375/redux/reducers';
import CalendarView7374Reducer from '../features/CalendarView7374/redux/reducers';
import EmailAuth7372Reducer from '../features/EmailAuth7372/redux/reducers';
import CalendarView7371Reducer from '../features/CalendarView7371/redux/reducers';
import CalendarReducer from '../features/Calendar/redux/reducers';
import EmailAuthReducer from '../features/EmailAuth/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
EmailAuth7375: EmailAuth7375Reducer,
CalendarView7374: CalendarView7374Reducer,
EmailAuth7372: EmailAuth7372Reducer,
CalendarView7371: CalendarView7371Reducer,
Calendar: CalendarReducer,
EmailAuth: EmailAuthReducer,

});