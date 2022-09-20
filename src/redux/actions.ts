export const SET_RUN_MOOD = 'SET_RUN_MOOD';
export const SET_RUN_TYPE = 'SET_RUN_TYPE';
export const SET_RUN_WHERE = 'SET_RUN_WHERE';
export const SET_RUN_PRE = 'SET_RUN_PRE';
export const SET_RUN_DURING = 'SET_RUN_DURING';
export const SET_RUN_POST = 'SET_RUN_POST';

export const setRunMood = mood => dispatch => {
  dispatch({
    type: SET_RUN_MOOD,
    payload: mood
  })
}

export const setRunItem = (item, type) => dispatch => {
  dispatch({
    type: type,
    payload: item
  })
} 

