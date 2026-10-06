// rce
import React, { Component } from 'react'
import NewsItems from './NewsItems'

export class News extends Component {
  render() {
    return (
        <>
      <div>
        <h2>I am a news component</h2>
        <NewsItems/>
      </div>
         
</>
    )
  }
}

export default News
