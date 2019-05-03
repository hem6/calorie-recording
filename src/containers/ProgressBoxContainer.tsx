import React from 'react';
import { AppState } from '../store/index';
import { connect } from 'react-redux';
import { progressSelector } from '../store/selectors';
import ProgressBox from '../components/ProgressBox';

export default connect(progressSelector)(ProgressBox);
