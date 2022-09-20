import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { runReducer } from './reducers';

const reducer = combineReducers({
  runReducer
});

const composeEnhancer = compose;

const store = createStore(
  reducer,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;







