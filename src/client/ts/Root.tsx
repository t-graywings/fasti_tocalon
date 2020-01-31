import * as React from 'react';
import axios from './Client';

interface Props{}

interface State{
  data: Array<{id: string, tags: Array<string>}>;
}

class Root extends React.Component<Props, State>{
  constructor(props: Props, state: State){
    super(props, state);
    this.state = {
      data: []
    };
  }

  componentDidMount(){
    this.getImageList();
  }

  getImageList = () => {
    axios.get('api/v1/docker/image')
      .then((result: any) => {
        this.setState({data: result.data});
      });
  }

  render(){
    let list: Array<any> = [];
    this.state.data.forEach((image) => {
      list.push(<li key={image.id}><button>{image.tags[0]}</button></li>);
    });
    return (
      <>
      <ul>{list}</ul>
      </>
    )
  }
}

export default Root;