import { combineReducers } from "redux";
import UserSagaReducer from "./reducer/users.saga.reducer";

const rootReducer = combineReducers({
  products: UserSagaReducer,
});

export default rootReducer;
