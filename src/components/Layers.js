import React, { Component } from 'react';
import { Button, InputGroup, Input, Form } from 'reactstrap';
class Layers extends Component {
    addLayer = (e) => {
        this.props.addLayer(e);
    }
    render() {
        console.log(this.props.layers.length);
        // console.log(this.props.check);
        return (
            <div id="layers" className="col-3 p-0 m-0" style={{ height: "450px", background: "lightblue", color: "ivory" }}>
                {}
                <h3 className="d-inline ml-2">LAYERS</h3>
                <Button className="btn-info d-inline ml-2" onClick={this.addLayer}>+</Button>
                <div id="llist">
                    {
                        this.props.layers.map(layer =>
                        (<Form><InputGroup>
                            <Input type="text" id="path" placeholder="IPFS PATH" />
                        </InputGroup><InputGroup>
                                <Input type="text" id="x" placeholder="X POS" />
                                <Input type="text" id="y" placeholder="Y POS" />
                                <Input type="text" id="z" placeholder="Z POS" />
                                <Input type="text" id="r" placeholder="ROTATE" />
                                <Input type="text" id="o" placeholder="ALPHA" />
                            </InputGroup></Form>))
                    }
                </div>
            </div >
        );
    }
}

export default Layers;