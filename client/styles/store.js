import { createStore, compse } from "redux";
//hook up react router with redux
import { syncHistoryWithStore } from "react-router-redux";
import { browserHistory } from "react";

//import the root reducer
import rootReducer from "./reducers/index";

import comments from "./data/comments";
import posts from "./data/posts";

// create an object for the default data
const defaultState = {
  posts: posts,
  comments: comments
};

//rootReducer is for how we interface
const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;


