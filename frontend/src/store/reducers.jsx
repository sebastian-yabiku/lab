import { combineReducers } from "redux";
import { AuthReducer } from "../features/auth/store/reducers";
import { PublicationReducer } from "../features/wall/store/reducers";

const rootReducers = combineReducers({
  Auth: AuthReducer,
  Publication: PublicationReducer
});

export { rootReducers };
