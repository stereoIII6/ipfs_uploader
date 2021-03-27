import React, { Component } from 'react';
import { Button, InputGroup, Input, Form } from 'reactstrap';
import { v4 as uuidv4 } from "uuid";
class Media extends Component {
    render() {
        // console.log(this.props.layers.length);
        // console.log(this.props.check);
        return (
            <div id="layers" className="col-3 p-0 m-0" style={{ height: "450px", background: "lightblue", color: "ivory" }}>
                <h3 className="d-inline ml-2">LAYERS</h3>
                <div id="list">
                    <div>{
                        console.log(this.props.layers),
                        this.props.layers.map(layer => (
                            <div key={layer.path} className="alert alert-success" >
                                <div>
                                    <img src={`https://ipfs.io/ipfs/${layer.path}`} alt="" style={{ width: `${layer.z / 100 * 36}px`, opacity: layer.o / 100 }} />
                                    {layer.r}°
                                    {layer.o}%op
                                    {layer.z}%sc
                                    {layer.x}x
                                    {layer.y}y
                                 </div>
                                <Button className="btn-sm btn-info" value="edit">edit</Button>
                                <Button className="btn-sm btn-danger" >delete</Button>

                            </div>
                        ))
                    }</div>
                </div>
            </div >
        );
    }
}

export default Media;