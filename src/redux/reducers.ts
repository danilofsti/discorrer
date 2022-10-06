import { NEW_RUN, SET_RUN_MOOD, 
         SET_RUN_TYPE, SET_RUN_WHERE, 
         SET_RUN_PRE, SET_RUN_DURING, 
         SET_RUN_POST, EDIT_RUN, 
         SAVE_RUN, GET_RUNS, RELOAD 
} from './actions'

export const initialRunState = {
  name : "",
  distance : {},
  elapsed_time : {},
  start_date_local : new Date(),
  is_imported: false,
  calories : {},
  mood: '',
  type: '',
  where: '',
  pre: [],
  during: [],
  post: [],
  jornal:''
}

const initialCollection = []

export const runReducer  = ( state = initialRunState, action )  => {
  switch (action.type) {
    case NEW_RUN: 
      return action.payload;
    case EDIT_RUN: 
      return {...action.payload};
    case SET_RUN_MOOD:
      return {...state, ...action.payload };
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
    case SAVE_RUN:
      return action.payload;
    default:
      return state;
  }
}

export const allRunReducer = ( state = initialCollection, action )  => {
  switch (action.type) {
    case GET_RUNS: 
      return action.payload;
    default:
      return state;
  }
}

export const reloadReducer = ( state = "edit", action )  => {
  switch (action.type) {
    case RELOAD: 
      return action.payload;
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
