import React, {useReducer} from 'react';
import { connect } from 'react-redux';

import {addFeature, removeItem} from './components/actions/featuresActions'

import { featuresReducer, initialState } from './components/reducers/featuresReducer';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

const App = props => {

  // const [state, dispatch] = useReducer(featuresReducer, initialState)

  const removeFeature = item => {
    // dispatch an action here to remove an item
    props.removeItem(item)
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
    // dispatch({ type: 'ADD_FEATURE', payload: item })
    props.addFeature(item)
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car}/>
        <AddedFeatures car={props.car} removeFeature={removeFeature}/>
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={props.additionalFeatures} buyItem={buyItem}/>
        <Total />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    car: state.car,
    additionalFeatures: state.additionalFeatures,
    additionalPrice: state.additionalPrice
  }
}

export default connect(mapStateToProps, {addFeature, removeItem})(App);
