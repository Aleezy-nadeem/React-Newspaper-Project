// rce
import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner';

export class News extends Component {
  
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0
    };
  }
  
//componentDidMount is a lifecycle method which is called after the render method is executed
async componentDidMount(){
  //api call
  let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=7ef742a422564c6f8286d90eee022dc8&page=1&pageSize=${this.props.pageSize}`;
  this.setState({loading: true});
  let data = await fetch(url);
  let parsedData = await data.json();
  
  console.log(parsedData);
  this.setState({articles: parsedData.articles, 
    totalResults: parsedData.totalResults,
  loading: false
});
  
}



  handlePrevClick = async () => {
  let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=7ef742a422564c6f8286d90eee022dc8&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
  this.setState({loading: true});
  let data = await fetch(url);
  let parsedData = await data.json();
   this.setState({loading: false});
  console.log(parsedData);
  this.setState({articles: parsedData.articles})
  this.setState({
  page:this.state.page - 1,
  articles: parsedData.articles,
  loading: false
})
}

  handleNextClick = async () => {
  if (this.state.page + 1 <= Math.ceil(this.state.totalResults / this.props.pageSize)) {
  // here we addd the literals to render the pages
  let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=7ef742a422564c6f8286d90eee022dc8&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
  this.setState({loading: true});
  let data = await fetch(url);
  let parsedData = await data.json();
  this.setState({loading: false});
  console.log(parsedData);
  this.setState({articles: parsedData.articles})
  this.setState({
  page:this.state.page + 1,
  articles: parsedData.articles,
  loading: false
})
}
}

  render() {
    return (
  <>
  <div className = "container my-4">
    <h1 className="text-center">NewsMonkey - Top Headlines</h1>
    {this.state.loading && <Spinner/>}
        <h2></h2>
   <div className="row">
     {this.state.articles.map((element)=>{
         return  <div className="col-md-4"  key={element.url} >
          {/* this is a ternary operator  whwew any value in the json file data is null or undefined */}
            <NewsItems title={element.title?element.title.slice(0, 40):" "} description={element.description?element.description.slice(0, 85):" "} imageUrl={!element.urlToImage?"https://s.yimg.com/lo/mysterio/api/02d0e8a8c5a628e037fc3129f22df7f2ec333f4dd3554a8c69f80911b58be8ae/lightyear_networkapi/resizefill_w1200%3Bquality_80%3Bformat_webp/https%3A%2F%2Fmedia.zenfs.com%2Fen%2Fthe_wall_street_journal_hosted_996%2F995e44f0f71683a1c773757e477aa28c.jpg":element.urlToImage} newsUrl={element.url}/>
        </div > 
        })}
   </div>
  {/* this can do the display flex */}
<div className="container d-flex justify-content-between">
    <button  disabled= {this.state.page <= 1} type="button" className="btn btn-success" onClick={this.handlePrevClick}>&larr; Previous</button>
    <button disabled= {this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-success" onClick={this.handleNextClick}>Next &rarr;</button>
</div>
</div>    
</>
    )
  }
}

export default News
