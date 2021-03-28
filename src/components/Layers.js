import React, { Component } from 'react';
import { Button, InputGroup, Input, Form } from 'reactstrap';
import { v4 as uuidv4 } from "uuid";
class Layers extends Component {
    fixLayer = (e) => {
        this.props.fixLayer(e);
    }
    onChange = (e) => {
        const value =
            e.target.type === 'checkbox'
                ? e.target.checked
                : e.target.value;
        this.setState({ [e.target.name]: value });
    }
    editLayer = (e) => {
        e.preventDefault();
        console.log(e.target.id);
    }
    deleteLayer = (e) => {
        e.preventDefault();
    }
    render() {
        // console.log(this.props.layers.length);
        // console.log(this.props.check);
        return (
            <div id="layers" className="col-3 p-0 m-0" style={{ height: "450px", background: "lightblue", color: "ivory" }}>
                <h3 className="d-inline ml-2">LAYERS</h3>
                <div id="list">

                    <Form key={this.props.layers.length} onSubmit={this.fixLayer}> <InputGroup>
                        <Input type="text" id="path" placeholder="IPFS PATH" onChange={this.onChange} />

                        <Button type="submit" value="+" >+</Button>
                    </InputGroup>
                    </Form>
                    <div>{
                        console.log(this.props.layers),
                        this.props.layers.map(layer => (
                            <div key={layer.path} className="alert alert-success" >
                                <div>
                                    <img src={`https://ipfs.io/ipfs/${layer.path}`} alt="" style={{ width: `36px`, float: "left", marginRight: "2em" }} />

                                </div>

                                <Button className="btn-sm btn-danger" id={layer.path} onClick={this.deleteLayer}>delete</Button>

                            </div>
                        ))
                    }</div>
                </div>
            </div >
        );
    }
}

export default Layers;