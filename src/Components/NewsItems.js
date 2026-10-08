import React, { Component } from 'react'

export class NewsItems extends Component {
render(){
        // this.props we used the props
        // destructuring the props
let {title, description, imageUrl, newsUrl} = this.props;
    return (
      <div className="my-3">
      <div className="card" style={{ width: '18rem' }}>

        {/* //if the image url is not available then we will use the default image url */}
  <img
    src={imageUrl || 'https://images.unsplash.com/photo-1682685794700-1f8e7b3c5d4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'}
    className="card-img-top"
    alt={title || 'news'}
    onError={(e) => {
      e.target.onerror = null;
      e.target.src = 'https://images.unsplash.com/photo-1682685794700-1f8e7b3c5d4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80';
    }}
  />

  {/* // here the props are used to display the title, description and
  //  news url of the news item. The title and description are truncated to
  //  45 and 88 characters respectively. The news url is used to open the news article i
  // n a new tab when the "Read More" button is clicked. */}
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{description}...</p>
    {/* _blank for new tab */}
    <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Read More</a>
  </div>
</div>
</div>
    )
  }
}

export default NewsItems
