export default class Action {
  //Constants

  static GET_POSTS = 'GET_POSTS';
  static GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
  static GET_POSTS_FAIL = 'GET_POSTS_FAIL';

  static GET_USERS = 'GET_USERS';
  static GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
  static GET_USERS_FAIL = 'GET_USERS_FAIL';

  //Actions

  static getPosts(payload) {
    console.log('GET POST ACTION')
    return {
      type: Action.GET_POSTS,
      payload,
    };
  }

  static getUsers(payload) {
    console.log('GET USERS ACTION')
    return {
      type: Action.GET_USERS,
      payload,
    };
  }
}
