import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
class Media extends Component {
    static propTypes = {
        layers: PropTypes.array,
        addLayer: PropTypes.func
    };
    render() {
        return (
            <div id="layers" className="col-9 p-0 m-0" style={{ height: "450px", background: "cornflowerblue", color: "ivory" }}>
                <div id="screen" style={{ width: "750px", height: "430px", background: "darkgrey", margin: "10px auto" }}>
                    <div style={{ position: "relative", top: "0", left: "0", width: "750px", height: "430px", background: "black", overflow: "hidden" }}>{
                        this.props.layers.map(layer => (
                            <img src={`https://ipfs.io/ipfs/${layer.path}`} alt="" key={layer.key} style={{ position: "absolute", top: `${0}px`, left: `${0}px`, opacity: 1, height: `${100}%`, zIndex: `${100 + layer.key}` }} />
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
export default connect(mapStateToProps)(Media);