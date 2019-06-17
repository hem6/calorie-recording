import React from 'react';
import { State } from '../store/index';
import { removeFood } from '../store/actions';
import { connect } from 'react-redux';
import RecordBox from '../components/RecordBox';

const mapStateToProps = (state: State) => ({
  foods: state.foods.slice().sort((a, b) => b.id - a.id)
});

export default connect(
  mapStateToProps,
  { removeFood }
)(RecordBox);
