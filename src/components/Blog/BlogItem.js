import React from 'react'
import BlogContent from './BlogContent'
import BlogNav from './BlogNav'
import './BlogItem.css';


const BlogItem = ({title, icon, date, path, status, content}) => {
  const data = {title, icon, date, path, status, content};
  
  return (
    <div className="box">
      <BlogContent limit={150} {...data}>
        <BlogNav date={date} to={{
          pathname: `/blog/${path}`,
          state: { ...data }
        }}
          status={status}
          label='Go to post'
        />
      </BlogContent>
    </div>
  )
}


export default BlogItem;