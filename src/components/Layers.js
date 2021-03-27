import React, { Component } from 'react';
import { Button } from 'reactstrap';
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
            </div>
        );
    }
}

export default Layers;