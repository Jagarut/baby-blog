import { combineReducers } from "redux";

import PostReducer from "./PostsReducer";
import usersReducer from "./usersReducer";

export default combineReducers({
  posts: PostReducer,
  users: usersReducer,
});
