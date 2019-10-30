import { initialState } from "./state";
import { SET_LOGIN } from "./constants";
function AuthReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_LOGIN:
      let {
        payload: { token, isLogin, user }
      } = action;

      return Object.assign({}, state, {
        token,
        isLogin,
        user
      });
    default:
      return state;
  }
}

export { AuthReducer };
