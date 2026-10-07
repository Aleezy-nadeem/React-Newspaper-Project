// rce
import React, { Component } from 'react'
import NewsItems from './NewsItems'

export class News extends Component {
  
constructor(){
   super();
   this.state = {
      articles:[],
      loading: false
   }
}

//componentDidMount is a lifecycle method which is called after the render method is executed
async componentDidMount(){
  //api call
  let url = "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=7ef742a422564c6f8286d90eee022dc8";
  let data = await fetch(url);
  let parsedData = await data.json();
  console.log(parsedData);
  this.setState({articles: parsedData.articles})


}
  render() {
    return (
        <>
  <div className = "container my-4">
        <h2>NewsMonkey - Top Headlines</h2>
       
   <div className="row">
     {this.state.articles.map((element)=>{
         return  <div className="col-md-4"  key={element.url} >
          {/* this is a ternary operator  whwew any value in the json file data is null or undefined */}
            <NewsItems title={element.title?element.title.slice(0, 40):" "} description={element.description?element.description.slice(0, 85):" "} imageUrl={
              element.urlToImage} newsUrl={element.url}/>
        </div> 

        })}
     
   </div>
</div>
         
</>
    )
  }
}

export default News
