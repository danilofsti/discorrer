import { SET_RUN_MOOD, SET_RUN_TYPE, SET_RUN_WHERE, SET_RUN_PRE, SET_RUN_DURING, SET_RUN_POST } from './actions'

const initialState = {
  mood: '',
  type: '',
  where: '',
  pre: [],
  during: [],
  post: []
}

export const runReducer  = ( state = initialState, action )  => {
  switch (action.type) {
    case SET_RUN_MOOD:
      return {...state, mood: action.payload };
    case SET_RUN_TYPE:
      return {...state, type: action.payload };
    case SET_RUN_WHERE:
      return {...state, where: action.payload };
    case SET_RUN_PRE:
      return {...state, pre: setMultiItem(action.payload, state.pre) };
    case SET_RUN_DURING:
      return {...state, during: setMultiItem(action.payload, state.during)  };
    case SET_RUN_POST:
      return {...state, post: setMultiItem(action.payload, state.post)  };
    default:
      return state;
  }
}

const setMultiItem = (value, prev) => {
  const newList = [...prev]
  const index = newList.indexOf(value)
  if(index> -1){
    newList.splice(index, 1)
  }else {
    newList.push(value)
  }
  return newList
}
