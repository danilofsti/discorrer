export const NEW_RUN = 'CLEAN_RUN';
export const SET_RUN_MOOD = 'SET_RUN_MOOD';
export const SET_RUN = 'SET_RUN';
export const SET_RUN_TYPE = 'SET_RUN_TYPE';
export const SET_RUN_WHERE = 'SET_RUN_WHERE';
export const SET_RUN_PRE = 'SET_RUN_PRE';
export const SET_RUN_DURING = 'SET_RUN_DURING';
export const SET_RUN_POST = 'SET_RUN_POST';
export const EDIT_RUN = 'EDIT_RUN';
export const SAVE_RUN = 'SAVE_RUN';
export const GET_RUNS = 'GET_RUNS';

export const setRun = run => dispatch => {
  dispatch({
    type: SET_RUN_MOOD,
    payload: run
  })
}

export const setRunMood = mood => dispatch => {
  dispatch({
    type: SET_RUN_MOOD,
    payload: mood
  })
}

export const newRun = (run) => dispatch => {
  dispatch({
    type: NEW_RUN,
    payload:run
  })
}

export const setRunItem = (item, type) => dispatch => {
  dispatch({
    type: type,
    payload: item
  })
} 

export const getAllRuns = (apiAllRuns) => async dispatch => {
  dispatch({
    type: GET_RUNS,
    payload: apiAllRuns
  })
} 

export const editRun = (item) => dispatch => {
  dispatch({
    type: EDIT_RUN,
    payload: item
  })
} 

