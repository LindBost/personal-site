import { combineReducers } from 'redux'
import blogReducer from './blog/blogReducer'

export const rootReducer = combineReducers({
    blog: blogReducer, 
})