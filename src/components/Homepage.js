import React, {Component} from 'react';
import Spinner from './Spinner';
import Search from './Search';
import Profile from './Profile';
import {connect} from 'react-redux';

class Homepage extends Component {
  constructor(props){
    super(props);

    this.state = {
      currentUser: {},
      errors: {},
      loading: false
    };
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.user){
      this.setState({
        currentUser: nextProps.user.user,
        errors: nextProps.user.errors,
        loading: nextProps.user.loading
      });
    }
  }

  render(){
    const {currentUser, loading, errors} = this.state;
    let homepage;
    if(currentUser === null || loading){
      homepage = <Spinner />
    }else{
      if(Object.keys(errors).length !== 0){
        homepage = <Search error = {errors.message} />
      }
      if(Object.keys(currentUser).length !== 0){
        homepage = <Profile user = {currentUser} />
      }else{
        homepage = <Search />
      }
    }
    return(
      <div>
        {homepage}
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, {})(Homepage);
