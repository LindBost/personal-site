import React, { useState, useCallback, useEffect }  from 'react'
import {useHistory} from 'react-router-dom';
import * as contentful from 'contentful'
import BlogItem from './BlogItem';
import './Blogg.css';

const Blog = () => {

    const [ posts, setPosts] = useState([]);

    const history = useHistory();
    const handleBack = useCallback(() => history.push('/'), [history]);

    var client = contentful.createClient({
        space: 'skmmc58877rx',
        accessToken: 'umYBz9auqg6mb8Pdp-43o0D2_6ob6C-BSn2TPJvVweI' })
      
        const fetchPosts = () => {
            client.getEntries().then(entries => {
          entries.items.forEach(entry => {
            if(entry.fields) {
              //console.log(entry.fields)
              setPosts(oldPosts => [...oldPosts, entry.fields])
            }
          })
        })
    }

    useEffect(() => {
        fetchPosts();
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