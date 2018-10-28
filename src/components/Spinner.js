import React, {Component} from 'react';
import spinner from '../images/spinner.gif';

class Spinner extends Component {
  render(){
    return(
      <div>
        <center>
          <img src = {spinner} alt="" style = {{height: '200px', marginTop: '10%', position: 'absolutea'}}/>
        </center>
      </div>
    );
  }
}
export default Spinner;
