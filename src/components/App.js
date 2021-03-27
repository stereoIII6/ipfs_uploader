import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Input, InputGroup, Form } from 'reactstrap';
import Screen from './Screen';
import Coming from './Coming';

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
      buffer: null,
      imageURL: null,
      check: "orange",
      layers: []
    }
  }

  addLayer = (e) => {
    e.preventDefault();
    console.log("add Layer");
    this.setState({
      layers: [
        ...this.state.layers, // SPREAD PREVIOUS LAYERS
        { ipfsPath: "", x: 1, y: 1, z: 1, r: 0, o: 1 } // NEW LAYER
      ]
    });
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
        this.setState({ imageURL: result.path, check: "orange" })
        console.log(this.state.imageURL);
      });

    }

  }
  copy = (e) => {
    e.preventDefault();
    console.log("copied");
    this.setState({ check: "mediumseagreen" })
  }
  render() {
    return (
      <div>
        <div className="container-fluid mt-5">
          <Coming />
          <div className="row">
            <main role="main" className="col-lg-12 d-flex text-center">
              <div className="content mr-auto ml-auto" >

                <h3>MEDIA UPLOAD</h3>

                <Form onSubmit={this.submitFile}>
                  <InputGroup>
                    <Input type="file" onChange={this.captureFile} />
                    <Input type="submit" value="UPLOAD" />
                  </InputGroup>
                </Form>

                {this.state.imageURL
                  ? <div >

                    <img src={`https://ipfs.io/ipfs/${this.state.imageURL}`} alt="upload" style={{ width: "420px" }} /> <br />
                    <div style={{ background: "#aa6633", borderRadius: "3px", marginTop: "2em", paddingLeft: "10px", color: "white" }}>
                      <a href={`https://ipfs.io/ipfs/${this.state.imageURL}`} style={{ color: "white", textDecoration: "none" }}>{this.state.imageURL}</a> &nbsp; &nbsp;
                    <CopyToClipboard text={this.state.imageURL}>
                        <Button style={{ background: this.state.check, borderRadius: "3px", border: "0px" }} onClick={this.copy}><img src="https://www.flaticon.com/svg/vstatic/svg/1250/1250673.svg?token=exp=1616545317~hmac=ea4f91b46af22e57de327b25ff3fe798" alt="" style={{ width: "16px" }} /></Button>
                      </CopyToClipboard></div>
                  </div>
                  : null}
              </div>

            </main>
          </div>
        </div>
        <Screen addLayer={this.addLayer} check={this.state.check} layers={this.state.layers} />
      </div>
    );
  }
}

export default App;
