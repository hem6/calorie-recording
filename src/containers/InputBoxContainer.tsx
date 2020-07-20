// eslint-disable-next-line
import React from 'react';
import { State } from '../store/index';
import { addFood } from '../store/actions';
import { connect } from 'react-redux';
import InputBox from '../components/InputBox';

const mapStateToProps = (state: State) => {
  return {
    options: state.foods.map((food) => ({ label: food.name, kcal: food.kcal })),
  };
};

export default connect(mapStateToProps, { addFood })(InputBox);
