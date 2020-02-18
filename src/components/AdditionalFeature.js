import React from 'react';
import { connect } from 'react-redux';

const AdditionalFeature = props => {
  console.log('feature props', props)
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={() => {
        // console.log(props.buyItem(props))
        props.buyItem(props)
      }}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = state => {
  return {
    ...state
  }
}

export default connect(mapStateToProps, {})(AdditionalFeature)
