import * as React from 'react';
import axios from './Client';

class HostList extends React.Component{
  getImageList = () =>{
    axios.get('api/v1/docker/image')
      .then((res: any) => {
        console.log(res);
      });
  }

  render(){
    return (
      <button onClick={this.getImageList}>Console</button>
    )
  }
}

export default HostList;