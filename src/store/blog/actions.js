
/**
* Blog Actions
*/
import * as types from './types'
import * as contentful from 'contentful'

export function blogLoading(isLoading = true) {
    return { type: types.BLOG_LOADING, isLoading}
  }
  
export function loadBlogSuccess(post) {
  return { type: types.LOAD_BLOG_SUCCESS, post}
}

export const getBlogPosts = () => dispatch => {
    var client = contentful.createClient({
        space: 'skmmc58877rx',
        accessToken: 'umYBz9auqg6mb8Pdp-43o0D2_6ob6C-BSn2TPJvVweI'
    })

    client.getEntries().then(entries => {
        let posts = entries.items.map(entry => entry.fields);
        dispatch({type: types.LOAD_BLOG_SUCCESS, data: posts})
    })
}