import React, { Component } from 'react';
import { Button, InputGroup, Input, Form } from 'reactstrap';
import { v4 as uuidv4 } from "uuid";
class Media extends Component {

    render() {
        // console.log(this.props.layers.length);
        // console.log(this.props.check);
        return (
            <div id="layers" className="col-9 p-0 m-0" style={{ height: "450px", background: "cornflowerblue", color: "ivory" }}>
                <div id="screen" style={{ width: "750px", height: "430px", background: "darkgrey", margin: "10px auto" }}>
                    <div style={{ position: "relative", top: "0", left: "0", width: "750px", height: "430px", background: "black", overflow: "hidden" }}>{
                        console.log(this.props.layers),
                        this.props.layers.map(layer => (
                            <img src={`https://ipfs.io/ipfs/${layer.path}`} alt="" key={layer.path} style={{ position: "absolute", top: `${0}px`, left: `${0}px`, opacity: 1, width: `${100}%` }} />
                        ))
                    }</div>
                </div>
            </div >
        );
    }
}

export default Media;