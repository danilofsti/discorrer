import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { runReducer, allRunReducer, reloadReducer } from './reducers';

const reducer = combineReducers({
  runReducer,
  allRunReducer,
  reloadReducer
});

const composeEnhancer = compose;

const store = createStore(
  reducer,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;







