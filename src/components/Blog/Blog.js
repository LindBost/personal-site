import React, { useState, useCallback, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import BlogItem from './BlogItem';
import './Blogg.css';
import { getBlogPosts } from '../../store/blog/actions'

const Blog = () => {

    //update state
    const dispatch = useDispatch();

    //get from state
    const posts = useSelector(state => state.blog.posts);

    const history = useHistory();
    const handleBack = useCallback(() => history.push('/'), [history]);

    const getPosts = () => {
        dispatch(getBlogPosts());
    }

    useEffect(() => {
        getPosts();
        window.scrollTo(0, 0)
    }, [])


    return (
        <div>
            <div className='blog-container'>
                {posts.map((fields, index) => {
                    console.log('fields', fields)
                    return <BlogItem key={index} {...fields} />
                })}
            </div>
            <div className='blog-knapp' onClick={handleBack}>Back</div>
        </div>
    )
}


export default Blog;