import React, { Component } from 'react'
import { connect } from 'react-redux'
import App from '../components/App.js'
import { updateTask } from '../actions'


const mapStateToProps = (state) => {
  return {
    token: state.token,
  }
}


export default connect(
  mapStateToProps,
  { updateTask }
)(App);
