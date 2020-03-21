import { combineReducers } from 'redux';
import guitarists from './App/App.reducers';
import form from './FeedbackForm/FeedbackForm.reducers';

const rootReducer = combineReducers({
  guitarists,
  form
});

export default rootReducer;
