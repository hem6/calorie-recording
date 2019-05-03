import React from 'react';
import { AppState } from '../store/index';
import { addFood } from '../store/actions';
import { connect } from 'react-redux';
import InputBox from '../components/InputBox';

export default connect(
  null,
  { addFood }
)(InputBox);
