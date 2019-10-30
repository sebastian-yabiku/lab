import { initialState } from "./state";
import { SET_PUBLICATIONS } from "./constants";
function PublicationReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_PUBLICATIONS:
      let { payload: publications } = action;
      return Object.assign({}, state, {
        publications: publications.concat(state.publications)
      });
    default:
      return state;
  }
}

export { PublicationReducer };
