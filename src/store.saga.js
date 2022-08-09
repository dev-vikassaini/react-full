import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import rootReducer from "./sagas/root.saga.reducer";
import { rootSaga } from "./sagas/root.saga";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const sagaMiddleware = createSagaMiddleware();
const middleWares = [sagaMiddleware];
const initialState = {};

const sagaStore = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleWares, logger))
);
sagaMiddleware.run(rootSaga);

export default sagaStore;
