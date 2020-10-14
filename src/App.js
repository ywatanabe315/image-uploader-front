import React, {Component} from 'react';
import Main from './components/Main.js';
import UploadForm from './components/UploadForm.js';
import UploadingBar from './components/UploadingBar.js';
import Result from './components/Result.js';
import axios from 'axios';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {body: <UploadForm uploadImage={this.uploadImage}/>}
  }

  showUploadingBar = () => {
  this.setState({body: <UploadingBar />});
  };

  uploadImage = image => {
    var params = new FormData();
    params.append('post[image]', image);
    this.showUploadingBar();
    axios.post(process.env.REACT_APP_SERVER_URL + 'posts', params)
          .then(({data, message}) => {
            if (data){
              console.log(data);
              this.setState({body: <Result image={data.image}/>});
            } else {
              throw new Error(message);
            }
          })
          .catch(e => {
            console.log(e.message);
          });
  };

  render() {
    return (
      <div>
        <Main body={this.state.body}/>
      </div>
    );
  }
}
