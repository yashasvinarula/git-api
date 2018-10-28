import React, {Component} from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {clearUser} from '../actions/index.js';

class Profile extends Component {
  constructor(props){
    super(props);

    this.state = {
      user: {},
      userRepos: []
    };

    this.onHomeClick = this.onHomeClick.bind(this);
  }

  onHomeClick(event){
    event.preventDefault();
    this.props.clearUser({});
  }

  componentWillMount(){
    const username = this.props.user.login;
    console.log(username);
    axios.get(`https://api.github.com/users/${username}`)
      .then(res => this.setState({user: res.data}));
    axios.get(`https://api.github.com/users/${username}/repos`)
      .then(res => this.setState({userRepos: res.data}));
  }

  render(){
    const {user, userRepos} = this.state;
    if(user.hireable) user.hireable = user.hireable.toString(); else user.hireable = "false";
    const ur = [1,2,3];

    const repos = userRepos.map(repo => (
      <div className="row">
        <div key = {repo.id} className = 'row'>
          <div className="col s3 truncate">{repo.name}</div>
          <div className="col s8 truncate">{repo.description}</div>
          <div className="col s1"><a href = {repo.html_url} target = '_blank'>View</a></div>
        </div>
      </div>
    ));

    return(
      <div className = "container">
        <div className="row"></div>
        <div className="row"></div>
        <a onClick = {this.onHomeClick} class="btn-floating btn-large waves-effect waves-light right red"><i class="material-icons">home</i></a>
        <div className="row"></div>
        <div className="card-panel">
          <center>
            <img src={user.avatar_url} alt="" style = {{height: '80px', borderRadius: '50%'}} />
            <h5>{user.name}</h5>
            {user.bio}
            <div className="row"></div>
            <div className="container">
              <div className="row">
                <div className="col s4">
                  {user.public_repos}<br />Repositories
                </div>
                <div className="col s4">
                  {user.followers}<br />Followers
                </div>
                <div className="col s4">
                  {user.following}<br />Following
                </div>
              </div>
            </div>
          </center>
        </div>
        <div className="card-panel">
          <div className="row">
            <div className="col s2 left-align" style = {{fontWeight: 'bold'}}>
              Email:
            </div>
            <div className="col s10 right-align">
              {user.email}
            </div>
          </div>
          <div className="row">
            <div className="col s2 left-align" style = {{fontWeight: 'bold'}}>
              Blog:
            </div>
            <div className="col s10 right-align">
              <a href = {user.blog} target = '_blank'>{user.blog}</a>
            </div>
          </div>
          <div className="row">
            <div className="col s2 left-align" style = {{fontWeight: 'bold'}}>
              Location:
            </div>
            <div className="col s10 right-align">
              {user.location}
            </div>
          </div>
          <div className="row">
            <div className="col s2 left-align" style = {{fontWeight: 'bold'}}>
              Company:
            </div>
            <div className="col s10 right-align">
              {user.company}
            </div>
          </div>
          <div className="row">
            <div className="col s2 left-align" style = {{fontWeight: 'bold'}}>
              Hireable:
            </div>
            <div className="col s10 right-align">
              {user.hireable}
            </div>
          </div>
          <div className="row">
            <div className="col s2 left-align" style = {{fontWeight: 'bold'}}>
              Github:
            </div>
            <div className="col s10 right-align">
              <a href = {user.html_url} target = "_blank">{user.html_url}</a>
            </div>
          </div>
        </div>
        <div className="card-panel">
          <center>
            <h4>Github Repos</h4>
            <div className="row"></div>
            <div className="row"></div>
          </center>
          {repos}
        </div>
      </div>
    );
  }
}

Profile.propTypes =  {
   userRepos: PropTypes.array
 };
export default connect(null, {clearUser})(Profile);
