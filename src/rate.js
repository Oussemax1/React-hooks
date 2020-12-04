import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
 
class Rate extends React.Component {
  constructor(props) {
    super();
 
    this.state = {
      rating: 1
    };
  }
 
  onStarClick(nextValue, prevValue, name) {
    this.setState({rating: nextValue});
  }
 
  render() {
    const { rating } = this.state;
    
    return (                
      <div>
        <h2>{rating}</h2>
        <StarRatingComponent 
          name="rate1" 
          starCount={10}
          value={props.valeur}
          onStarClick={this.onStarClick.bind(this)}
        />
      </div>
    );
  }
}
export default Rate; 