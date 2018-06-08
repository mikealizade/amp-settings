import { combineReducers } from 'redux';
import app from './App/App.reducers';
import form from './FeedbackForm/FeedbackForm.reducers';

const rootReducer = combineReducers({
  app,
  form
});

export default rootReducer;
