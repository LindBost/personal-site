import React from 'react'
import BlogNav from './BlogNav'
import BlogContent from './BlogContent'


const BlogPost = ({history}) => {
  const post = history.location.state;
  
  console.log('HÄR')
  return (
    <div className='pageContent'>
      <BlogNav date={post.date} status={post.status} to="/blog" label='Gå till blogg' />
      <BlogContent {...post} />
      </div>

  )
}


export default BlogPost