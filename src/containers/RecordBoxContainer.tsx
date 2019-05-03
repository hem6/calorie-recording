import React from 'react';
import { AppState } from '../store/index';
import { removeFood } from '../store/actions';
import { connect } from 'react-redux';
import RecordBox from '../components/RecordBox';

const mapStateToProps = (state: AppState) => ({
  foods: state.foods.slice().sort((a, b) => b.id - a.id)
});

export default connect(
  mapStateToProps,
  { removeFood }
)(RecordBox);
