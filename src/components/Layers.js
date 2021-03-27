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

    render() {
        // console.log(this.props.layers.length);
        // console.log(this.props.check);
        return (
            <div id="layers" className="col-3 p-0 m-0" style={{ height: "450px", background: "lightblue", color: "ivory" }}>
                <h3 className="d-inline ml-2">LAYERS</h3>
                <div id="list">

                    <Form key={this.props.layers.length} onSubmit={this.fixLayer}> <InputGroup>
                        <Input type="text" id="path" placeholder="IPFS PATH" onChange={this.onChange} />
                    </InputGroup><InputGroup>
                            <Input type="text" id="x" placeholder="X POS" onChange={this.onChange} />
                            <Input type="text" id="y" placeholder="Y POS" onChange={this.onChange} />
                            <Input type="text" id="z" placeholder="Z POS" onChange={this.onChange} />
                            <Input type="text" id="r" placeholder="ROTATE" onChange={this.onChange} />
                            <Input type="text" id="o" placeholder="ALPHA" onChange={this.onChange} />
                            <Button type="submit" value="+" >+</Button>
                        </InputGroup>
                    </Form>
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

export default Layers;