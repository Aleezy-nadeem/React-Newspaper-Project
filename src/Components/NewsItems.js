import React, { Component } from 'react'

export class NewsItems extends Component {

  render(){
// this.props we used the props
// destructuring the props
let {title, description, imageUrl, newsUrl} = this.props;
    return (
      <div className="my-3">
      <div className="card" style={{ width: '18rem' }}>
  <img src={imageUrl} className="card-img-top" alt="..."/>
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
