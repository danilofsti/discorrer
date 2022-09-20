export const SET_RUN_MOOD = 'SET_RUN_MOOD';
export const SET_RUN_TYPE = 'SET_RUN_TYPE';
export const SET_RUN_WHERE = 'SET_RUN_WHERE';

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

