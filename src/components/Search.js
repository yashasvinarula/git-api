import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {getUser} from '../actions/index.js';

class Search extends Component {
  constructor(props){
    super(props);

    this.state = {
      username: "",
      user: {}
    };
    this.onChange = this.onChange.bind(this);
    this.searchPress = this.searchPress.bind(this);
  }

  onChange(event){
    this.setState({
      username: event.target.value
    })
  }

  searchPress(event){
    event.preventDefault();
    this.props.getUser(this.state.username);
  }

  render(){
    console.log(this.props);
    return(
      <div>
        <div className="row"></div>
        <div className="row"></div>
        <div className="row"></div>
        <div className="row"></div>
        <div className="row"></div>
        <div className="container">
          <center>
            <h2>Github API Client</h2>
          </center>
        </div>
        <div className = "username">
          <input onChange = {this.onChange} type="text" name="username" placeholder = "Enter the username you want to search for..." />
          <br />
          <span className="helper-text red-text">{this.props.error}</span>
        </div>
        <br /><br />
        <button onClick = {this.searchPress} href="" className="btn waves-effect waves-light">
          Search for User
          <i className="material-icons right">search</i>
        </button>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, {getUser})(Search);
