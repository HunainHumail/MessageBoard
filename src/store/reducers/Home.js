import { HomeActions } from "../actions";
const INITIAL_STATE = {
  isLoading: false,
  isLoadingUser: false,
  posts: [],
  users:[]
};

function Reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case HomeActions.GET_POSTS:
      return { ...state, isLoading: true };
    case HomeActions.GET_POSTS_SUCCESS:
      return { ...state, posts: action.payload, isLoading: false };
    case HomeActions.GET_POSTS_FAIL:
      return { ...state, isLoading: false };

    case HomeActions.GET_USERS:
      return { ...state, isLoadingUser: true };
    case HomeActions.GET_USERS_SUCCESS:
      return { ...state, users: action.payload, isLoadingUser: false };
    case HomeActions.GET_USERS_FAIL:
      return { ...state, isLoadingUser: false };

    default:
      return state;
  }
}

export default Reducer;
