import React, { useState, useCallback, useEffect }  from 'react'
import {useHistory} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import * as contentful from 'contentful'
import BlogItem from './BlogItem';
import './Blogg.css';
import {getBlogPosts} from '../../store/blog/actions'

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
    }, [])

    return (
        <div>
            <div className='blog-container'>
                {posts.map((fields, index) => {
                    console.log('fields', fields)
                 return <BlogItem key={index} {...fields} />
                })}
            </div>
            <div className='blog-knapp' onClick={handleBack}>Tillbaka</div>
        </div>
    )
}


export default Blog;