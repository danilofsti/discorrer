import { SET_RUN_MOOD, SET_RUN_TYPE, SET_RUN_WHERE } from './actions'

const initialState = {
  mood: '',
  type: '',
  where: ''
}

export const runReducer  = ( state = initialState, action )  => {
  switch (action.type) {
    case SET_RUN_MOOD:
      return {...state, mood: action.payload };
    case SET_RUN_TYPE:
      return {...state, type: action.payload };
    case SET_RUN_WHERE:
      return {...state, where: action.payload };
    default:
      return state;
  }
}

