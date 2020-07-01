import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import EmailAuth7375Saga from '../features/EmailAuth7375/redux/sagas';
import CalendarView7374Saga from '../features/CalendarView7374/redux/sagas';
import EmailAuth7372Saga from '../features/EmailAuth7372/redux/sagas';
import CalendarView7371Saga from '../features/CalendarView7371/redux/sagas';
import CalendarSaga from '../features/Calendar/redux/sagas';
import EmailAuthSaga from '../features/EmailAuth/redux/sagas';

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here


    //@BlueprintReduxSagaMainInsertion
EmailAuth7375Saga,
CalendarView7374Saga,
EmailAuth7372Saga,
CalendarView7371Saga,
CalendarSaga,
EmailAuthSaga,
    
  ]);
}