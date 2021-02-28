import React from 'react'
import BlogContent from './BlogContent';
import BlogNav from './BlogNav';


const BlogPage = (props) => {

    const post = props.location.state;

    return (
        <div>
            <BlogNav date={post.date} status={post.status} to='/blog' label='Gå till blog'/>
            <BlogContent {...post}/>
        </div>
    )
}

export default BlogPage;