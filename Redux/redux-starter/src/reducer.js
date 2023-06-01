import * as actions from './actionTypes';
// []
let lastId = 0;

// In redux, reducer has to be pure
export default function reducer(state = [], action) {
  if (action.type === actions.BUG_ADDED)
    return [
      ...state,
      {
        id: ++lastId,
        description: action.payload.description,
        resolved: false
      }
    ];
    
  else if (action.type === actions.BUG_REMOVED)
    return state.filter(bug => bug.id !== action.payload.id)

    // if the type of action is neither of above.
    return state;
}