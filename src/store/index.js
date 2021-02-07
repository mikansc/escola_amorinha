import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import * as Students from "./Students/reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const reducer = combineReducers({
  students: Students.listReducer,
});

const middlewares = [thunk];

const store = createStore(
  reducer,
  {},
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
