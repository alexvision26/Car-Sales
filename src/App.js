import React from 'react';
import { connect } from 'react-redux';

import { featuresReducer } from './components/reducers/featuresReducer';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

const App = props => {

  const removeFeature = item => {
    // dispatch an action here to remove an item
    return {
      type: 'REMOVE_FEATURE'
    }
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
    const ADD_FEATURE = 'ADD_FEATURE';
    return {
      type: ADD_FEATURE,
      payload: item.feature.id
    }
    
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header />
        <AddedFeatures  removeFeature={removeFeature}/>
      </div>
      <div className="box">
        <AdditionalFeatures buyItem={buyItem}/>
        <Total />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    ...state
  }
}

export default connect(mapStateToProps, {})(App);
