import React, { Component } from 'react'

class Results extends Component {
  // constructor(props){
  //   super(props)
  // }

  votesAngularInPercent() {
    if(this.props.store.angular) {
      return (this.props.store.angular / (this.props.store.angular + this.props.store.react + this.props.store.vuejs)) * 100
    } else {
      return 0
    }
  }

  votesReactInPercent() {
    if(this.props.store.react) {
      return (this.props.store.react / (this.props.store.angular + this.props.store.react + this.props.store.vuejs)) * 100
    } else {
      return 0
    }
  }

  votesVuejsInPercent() {
    if(this.props.store.vuejs) {
      return (this.props.store.vuejs / (this.props.store.angular + this.props.store.react + this.props.store.vuejs)) * 100
    } else {
      return 0
    }
  }

  render() {
    

  return (
    <div className="container">
      <h3 className="badge badge-danger">Angular: {this.votesAngularInPercent().toFixed(2) + '%'} </h3>
      <div className="progress active">
        <div className="progress-bar progress-bar-striped progress-bar-animated bg-danger" role="progressbar" style={{width: `${this.votesAngularInPercent()}%`}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">{this.votesAngularInPercent().toFixed(2)}%</div>
      </div>
      <hr />
      <h3 className="badge badge-info">React: {this.votesReactInPercent().toFixed(2) + '%'} </h3>
      <div className="progress active">
        <div className="progress-bar progress-bar-striped progress-bar-animated bg-info" role="progressbar" style={{width: `${this.votesReactInPercent()}%`}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">{this.votesReactInPercent().toFixed(2)}%</div>
      </div>
      <hr />
      <h3 className="badge badge-success">Vue JS: {this.votesVuejsInPercent().toFixed(2) + '%'} </h3>
      <div className="progress active">
        <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" style={{width: `${this.votesVuejsInPercent()}%`}} aria-valuenow={this.votesVuejsInPercent().toFixed(2)}aria-valuemin="0" aria-valuemax="100">{this.votesVuejsInPercent().toFixed(2)}%</div>
      </div>
      <hr />
    </div>
    )
  }
}

export default Results