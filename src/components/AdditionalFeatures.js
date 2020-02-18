import React from 'react';
import AdditionalFeature from './AdditionalFeature';
import { connect } from 'react-redux';
import {addFeature} from './actions/featuresActions';

const AdditionalFeatures = props => {
  // console.log(props.features)
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.features.length ? (
        <ol type="1">
          {props.features.map(item => (
            <AdditionalFeature key={item.id} feature={item} buyItem={props.buyItem} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    features: [...state.additionalFeatures]
  }
}

export default connect(mapStateToProps, {})(AdditionalFeatures)
