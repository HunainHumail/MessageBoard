export default class Action {
  //Constants

  static GET_POSTS = 'GET_POSTS';
  static GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
  static GET_POSTS_FAIL = 'GET_POSTS_FAIL';

  //Actions

  static getPosts(payload) {
    return {
      type: Action.GET_POSTS,
      payload,
    };
  }
}
