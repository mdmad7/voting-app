import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import logo from '../logo.svg'
import * as VoteActions from '../actions'

import Results from './Results'

class App extends Component {
  constructor(props) {
    super(props)

    this.handleVoteAngular = this.handleVoteAngular.bind(this)
    this.handleVoteReact = this.handleVoteReact.bind(this)
    this.handleVoteVuejs = this.handleVoteVuejs.bind(this)
  }

  handleVoteAngular () {
    this.props.actions.voteAngular()
  }

  handleVoteReact () {
    this.props.actions.voteReact()
  }

  handleVoteVuejs () {
    this.props.actions.voteVuejs()
  }

  render() {
    // console.log(this.props)
    return (
      <div>
        <div className="jumbotron text-center">
          <img src={logo} height="150" alt={logo}/>
          <div className="hero-text">
            <h2>What is your favourite front-end library in 2017?</h2>
            <h4>Click on the logos below to vote!</h4>
          </div>

          <div className="row">
            <div className="offset-sm-3 col-4 col-sm-2">
              <img className="logos" src="angular.png" alt="angular logo" onClick={this.handleVoteAngular} />
            </div>

            <div className="col-4 col-sm-2">
              <img className="logos" src="react.png" alt="react logo" onClick={this.handleVoteReact} />
            </div>

            <div className="col-4 col-sm-2">
              <img className="logos" src="vuejs.png" alt="vuejs logo" onClick={this.handleVoteVuejs} />
            </div>
          </div>
        </div>
        <hr />
        <Results store={this.props.votes} actions={this.props.actions} />
      </div>
    )
  }
}

const mapStateToProps = (state, appProps) => {
      return {
        votes: state.votes
      }
    }

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(VoteActions, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
