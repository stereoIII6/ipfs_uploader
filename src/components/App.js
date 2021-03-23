import React, { Component } from 'react';

import './App.css';

const IpfsHttpClient = require("ipfs-http-client");

const ipfs = IpfsHttpClient({
  host: "ipfs.infura.io",
  port: "5001",
  protocol: "https",
});
// const ipfs = IpfsHttpClient('localhost', '5001', { protocol: 'http' });
// console.log(ipfs);

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      buffer: null
    }
  }

  captureFile = (e) => {
    e.preventDefault();
    // console.log("file captured");
    const file = e.target.files[0];
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(file);
    reader.onloadend = () => {
      // console.log("Buffer :", Buffer(reader.result));
      this.setState({ buffer: Buffer(reader.result) })
    }

  }
  submitFile = (e) => {
    e.preventDefault();
    // console.log("file submitted");
    // console.log(this.state.buffer);

    if (this.state.buffer) {
      ipfs.add(this.state.buffer).then((result, err) => {

        console.log('Ipfs Result', result);

        if (err) {
          // console.error(err);
          return
        }
        this.setState({ imageURL: result.path })
        console.log(this.state.imageURL);
      });

    }

  }
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
          <a
            className="navbar-brand col-sm-3 col-md-2 mr-0"
            href="http://fractio.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Fract.io file uploader
          </a>
        </nav>
        <div className="container-fluid mt-5">
          <div className="row">
            <main role="main" className="col-lg-12 d-flex text-center">
              <div className="content mr-auto ml-auto">

                <h1>UPLOAD FORM</h1>

                <form onSubmit={this.submitFile}>
                  <input type="file" onChange={this.captureFile} />
                  <input type="submit" />
                </form>

                <a
                  className="App-link"
                  href="http://fractio.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Create Pyenamic NFT's <u><b>NOW! </b></u>
                </a>
                {this.state.imageURL ? <div> <img src={`https://ipfs.io/ipfs/${this.state.imageURL}`} />  </div> : null}
              </div>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
