import { HomeActions } from "../actions";
const INITIAL_STATE = {
  isLoading: false,
  posts: []
};

function Reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case HomeActions.GET_POSTS:
      return { ...state, isLoading: true };
    case HomeActions.GET_POSTS_SUCCESS:
      return { ...state, posts: action.payload, isLoading: false };
    case HomeActions.GET_POSTS_FAIL:
      return { ...state, isLoading: false };


    default:
      return state;
  }
}

export default Reducer;
