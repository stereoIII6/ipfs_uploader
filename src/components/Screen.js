import React, { Component } from 'react';
// import { Button } from 'reactstrap';
import Layers from './Layers';

class Screen extends Component {

    render() {
        return (
            <div id="screen" className="jumbotron mt-5 p-0">
                <div className="row p-0 m-0 ">
                    <Layers fixLayer={this.props.fixLayer} check={this.props.check} layers={this.props.layers} />

                    <div id="mediaDragStage" className="col-9 p-0 m-0" style={{ height: "450px", background: "cornflowerblue" }}>
                        { }
                    </div>
                </div>
                <div className="row p-0 m-0">
                    <div id="timeline" className="row m-0 p-0">
                        <div className="col" style={{ textAlign: "center", height: "120px", border: "1px dashed green" }}>1</div>
                        <div className="col" style={{ textAlign: "center", height: "120px", border: "1px dashed green" }}>2</div>
                        <div className="col" style={{ textAlign: "center", height: "120px", border: "1px dashed green" }}>3</div>
                        <div className="col" style={{ textAlign: "center", height: "120px", border: "1px dashed green" }}>4</div>
                        <div className="col" style={{ textAlign: "center", height: "120px", border: "1px dashed green" }}>5</div>
                        <div className="col" style={{ textAlign: "center", height: "120px", border: "1px dashed green" }}>6</div>
                        <div className="col" style={{ textAlign: "center", height: "120px", border: "1px dashed green" }}>7</div>
                        <div className="col" style={{ textAlign: "center", height: "120px", border: "1px dashed green" }}>8</div>
                        <div className="col" style={{ textAlign: "center", height: "120px", border: "1px dashed green" }}>9</div>
                        <div className="col" style={{ textAlign: "center", height: "120px", border: "1px dashed green" }}>10</div>
                        <div className="col" style={{ textAlign: "center", height: "120px", border: "1px dashed green" }}>11</div>
                        <div className="col" style={{ textAlign: "center", height: "120px", border: "1px dashed green" }}>12</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Screen;