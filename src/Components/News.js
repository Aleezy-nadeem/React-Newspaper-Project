// rce
import React, { Component } from 'react'
import NewsItems from './NewsItems'

export class News extends Component {
  articles= [{"source":{"id":"the-sport-bible","name":"The Sport Bible"}
,"author":"Brendan McGilligan","title":"Ricky Ponting urges Australia to drop two players after 'embarrassing' Bangladesh defeat","description":"Cricket icon Ricky Ponting urges Australia to drop two players after an 'embarrassing' defeat to Bangladesh.",
"url":"https://www.thesportbible.com/other/cricket-australia-bangladesh-ricky-ponting-test-defeat-239189-20260817",
"urlToImage":"https://resizer.ladbiblegroup.com/ogimage/v3/assets/blta90d05ad41a54a71/bltcca9128b7de79d43/6a82be58f2fc6f234842e460/Hasan_Mahmud_of_Bangladesh_celebrates_after_taking_the_wicket_of_Travis_Head_of_Australia_during_day_three_of_the_First_Test_Match_in_the_series_between_Australia_and_Bangladesh_at_Marrara_Stadium_on_August_15_2026_in_D.jpg",
"publishedAt":"2026-08-17T08:25:29Z","content":null},{"source":{"id":"espn-cric-info","name":"ESPN Cric Info"},"author":null,"title":"PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
"description":"Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com","url":"http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket","urlToImage":
"https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg","publishedAt":"2020-04-27T11:41:47Z","content":
"Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"},{"source":{"id":"espn-cric-info","name":"ESPN Cric Info"},"author":null,"title":"What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
"description":"Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com","url":"http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again","urlToImage":"https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg","publishedAt":"2020-03-30T15:26:05Z","content":"Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"}]

constructor(){
   super();
   this.state = {
      articles: this.articles,
      loading: false
   }
}
  render() {
    return (
        <>
  <div className = "container my-4">
        <h2>NewsMonkey - Top Headlines</h2>
   <div className="row">
        <div className="col-md-4">
            <NewsItems title="News" description="This is a news item" imageUrl="https://resizer.ladbiblegroup.com/ogimage/v3/assets/blta90d05ad41a54a71/bltcca9128b7de79d43/6a82be58f2fc6f234842e460/Hasan_Mahmud_of_Bangladesh_celebrates_after_taking_the_wicket_of_Travis_Head_of_Australia_during_day_three_of_the_First_Test_Match_in_the_series_between_Australia_and_Bangladesh_at_Marrara_Stadium_on_August_15_2026_in_D.jpg"/>
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
