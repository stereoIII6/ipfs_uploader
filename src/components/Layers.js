import React, { Component } from 'react';
import { Button, InputGroup, Input, Form } from 'reactstrap';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addLayer, deleteLayer, moveLayer } from "./action/layerActions.js"

class Layers extends Component {
    state = {
        path: null,
        key: null,
        obj: null
    }
    static propTypes = {
        layers: PropTypes.array,
        addLayer: PropTypes.func,
        deleteLayer: PropTypes.func,
        moveLayer: PropTypes.func
    };
    onChange = (e) => {
        const value =
            e.target.type === 'checkbox'
                ? e.target.checked
                : e.target.value;
        this.setState({ [e.target.name]: value });
        console.log(e.target.value);
    }
    goAddLayer = (e) => {
        e.preventDefault();
        const newLayer = {
            path: document.getElementById("path").value,
            key: this.props.layers.length,
            obj: null
        }
        console.log("click add layer", newLayer);
        this.props.addLayer(newLayer);
        document.getElementById("path").value = "";
    }
    goDeleteLayer = (e) => {
        e.preventDefault();
        console.log("click delete layer", e.target.id);
        const dropLayer = e.target.id;
        // drop layer
        const newLayers = this.props.layers.filter(layer => layer.key !== dropLayer);
	if(dropLayer < this.props.layers.length){
	// renumerate layers after dropped layer
        let holdLayers = [];
	let i = 0;
	while(i < this.props.layers.length){
		if(i >= dropLayer){
			holdLayers[i] = this.props.layers[i];
			holdlayers[i].key = i; 
		}
		i++;
	}
	// sort layers array
	let delLayers = holdLayers.sort(dynamicSort("key")); 
	this.props.deleteLayer(delLayers);
        document.getElementById("path").value = "";
	}
	else{
		this.props.deleteLayer(newLayers);	
	}
    }
    dynamicSort = (property) => {
        var sortOrder = 1;
        if(property[0] === "-") {
	        sortOrder = -1;
	        property = property.substr(1);
	    }
        return function (a,b) {
	        var result = (a[property] < b[property]) 
			? -1 : (a[property] > b[property]) ? 1 : 0;
	        return result * sortOrder;
		}
}
    render() {

        // console.log(this.props.layers.length);
        // console.log(this.props.check);
        return (
            <div id="layers" className="col-3 p-0 m-0" style={{ height: "450px", background: "lightblue", color: "ivory" }}>
                <h3 className="d-inline ml-2">LAYERS</h3>
                <div id="list">

                    <Form onSubmit={this.goAddLayer}> <InputGroup>
                        <Input type="text" id="path" placeholder="IPFS PATH" onChange={this.onChange} />

                        <Button type="submit" value="+" >+</Button>
                    </InputGroup>
                    </Form>
                    <div>{
                        // console.log(this.props.layers),
                        this.props.layers.map(layer => (

                            <div key={layer.key} className="alert alert-success" >
                                <h3 style={{ float: "left", marginRight: "1em" }}>{layer.key}</h3>
                                <Button style={{ float: "left", marginRight: "1em", width: "4em" }}>
                                    <img src={`https://ipfs.io/ipfs/${layer.path}`} alt="" style={{ width: `36px`, float: "left", marginRight: "2em" }} />

                                </Button>

                                <Button className={layer.obj ? "btn-sm btn-success" : "btn-sm btn-warning"} id={layer.key} onClick={this.setEdit}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-gear-wide-connected" viewBox="0 0 16 16" id={layer.key}>
                                        <path id={layer.key} d="M7.068.727c.243-.97 1.62-.97 1.864 0l.071.286a.96.96 0 0 0 1.622.434l.205-.211c.695-.719 1.888-.03 1.613.931l-.08.284a.96.96 0 0 0 1.187 1.187l.283-.081c.96-.275 1.65.918.931 1.613l-.211.205a.96.96 0 0 0 .434 1.622l.286.071c.97.243.97 1.62 0 1.864l-.286.071a.96.96 0 0 0-.434 1.622l.211.205c.719.695.03 1.888-.931 1.613l-.284-.08a.96.96 0 0 0-1.187 1.187l.081.283c.275.96-.918 1.65-1.613.931l-.205-.211a.96.96 0 0 0-1.622.434l-.071.286c-.243.97-1.62.97-1.864 0l-.071-.286a.96.96 0 0 0-1.622-.434l-.205.211c-.695.719-1.888.03-1.613-.931l.08-.284a.96.96 0 0 0-1.186-1.187l-.284.081c-.96.275-1.65-.918-.931-1.613l.211-.205a.96.96 0 0 0-.434-1.622l-.286-.071c-.97-.243-.97-1.62 0-1.864l.286-.071a.96.96 0 0 0 .434-1.622l-.211-.205c-.719-.695-.03-1.888.931-1.613l.284.08a.96.96 0 0 0 1.187-1.186l-.081-.284c-.275-.96.918-1.65 1.613-.931l.205.211a.96.96 0 0 0 1.622-.434l.071-.286zM12.973 8.5H8.25l-2.834 3.779A4.998 4.998 0 0 0 12.973 8.5zm0-1a4.998 4.998 0 0 0-7.557-3.779l2.834 3.78h4.723zM5.048 3.967c-.03.021-.058.043-.087.065l.087-.065zm-.431.355A4.984 4.984 0 0 0 3.002 8c0 1.455.622 2.765 1.615 3.678L7.375 8 4.617 4.322zm.344 7.646l.087.065-.087-.065z" />
                                    </svg>
                                </Button>

                                <Button className="btn-sm btn-danger" id={layer.key} onClick={this.goDeleteLayer}>
                                    <svg id={layer.key} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16"  >
                                        <path id={layer.key} d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                                    </svg>
                                </Button>

                            </div>
                        ))
                    }</div>
                </div>
            </div >
        );
    }
}
const mapStateToProps = state => ({
    layers: state.layerState.layers,
});
export default connect(mapStateToProps, { addLayer, deleteLayer, moveLayer })(Layers);
