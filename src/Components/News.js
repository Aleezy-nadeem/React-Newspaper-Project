// rce
import React, { Component } from 'react'
import NewsItems from './NewsItems'

export class News extends Component {
  render() {
    return (
        <>
  <div className = "container my-4">
        <h2>NewsMonkey - Top Headlines</h2>
   <div className="row">
        <div className="col-md-4">
            <NewsItems title="News" description="This is a news item"/>
        </div>

        <div className="col-md-4">
            <NewsItems title="News" description="This is a news item"/>
        </div>

        <div className="col-md-4">
            <NewsItems title="News" description="This is a news item"/>
        </div>

   </div>
   
   <div className="row my-3"> 
        <div className="col-md-4">
            <NewsItems title="News" description="This is a news item"/>
        </div>

        <div className="col-md-4">
            <NewsItems title="News" description="This is a news item"/>
        </div>

        <div className="col-md-4">
            <NewsItems title="News" description="This is a news item"/>
        </div>

   </div>
 </div>
         
</>
    )
  }
}

export default News
