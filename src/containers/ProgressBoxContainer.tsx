// eslint-disable-next-line
import React from 'react';
import { connect } from 'react-redux';
import { progressSelector } from '../store/selectors';
import ProgressBox from '../components/ProgressBox';

export default connect(progressSelector)(ProgressBox);
