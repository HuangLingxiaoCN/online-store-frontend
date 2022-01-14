import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk'

import reducerFunction from "./Reducer";

const store = createStore(reducerFunction, applyMiddleware(thunk));

export default store