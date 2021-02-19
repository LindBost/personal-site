import React from 'react'
import * as Markdown from 'react-markdown'
import './BlogContent.css';

const BlogContent = ({icon, title, limit, content, children}) => (
  <article className="media">
    <div className="media-left">
      <figure className="figure">
        <img src={icon} alt="Image" />
      </figure>
    </div>
    <div className="media-content">
      <div className="content">
        <h1>{title}</h1>
        <Markdown
          source={
            limit
              ? content.split(" ").splice(0, limit).join(" ").concat('...')
              : content
          }
        />
      </div>
      {children}
    </div>
  </article>
)

export default BlogContent