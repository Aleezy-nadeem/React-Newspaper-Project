import React, { Component } from 'react'
import PropTypes from 'prop-types'
export class NewsItems extends Component {
  render() {
// this.props we used the props
// destructuring the props
let {title, description} = this.props;

    return (
      <div className="card" style={{ width: '18rem' }}>
  <img src="https://resizer.ladbiblegroup.com/ogimage/v3/assets/blta90d05ad41a54a71/bltcca9128b7de79d43/6a82be58f2fc6f234842e460/Hasan_Mahmud_of_Bangladesh_celebrates_after_taking_the_wicket_of_Travis_Head_of_Australia_during_day_three_of_the_First_Test_Match_in_the_series_between_Australia_and_Bangladesh_at_Marrara_Stadium_on_August_15_2026_in_D.jpg" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href="/" className="btn btn-primary">Read More</a>
  </div>
</div>
    )
  }
}

export default NewsItems
