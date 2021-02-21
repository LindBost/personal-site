/**
* Blog Reducer
*/
import * as types from './types'

export default function blogReducer(state = {posts: []}, action) {
    switch (action.type) {
      case types.BLOG_LOADING:
        return {
          ...state,
          loading: action.isLoading
        }
      case types.LOAD_BLOG_SUCCESS:
        return {
          ...state,
          posts: action.data,
          loading: false
        }
     default:
       return state
    }
  }

