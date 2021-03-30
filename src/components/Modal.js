import React from 'react';
import ReactDom from "react-dom";
import { Button, Input, Form, InputGroup } from 'reactstrap';
import { layersLoaded } from './action/layerActions';

const MODAL_STYLES = {
    position: "fixed",
    width: "90%",
    height: "90%",
    top: "5%",
    left: "5%",
    transform: "translate(0%,0%)",
    padding: "0px",
    background: "ivory",
    border: "2px solid red",
    opacity: 0.95,
    zIndex: 1000

}
const OVER_STYLES = {
    position: "relative",
    top: "0",
    width: "100%",
    height: "100%",
    left: "0",
    bottom: "0",
    right: "0",
    background: "limegreen",
    opacity: 0.6,
    padding: "0",
    zIndex: 1000

}

export default function Modal({ open, children, onClose, layer, layers }) {
    if (!open) return null;
    console.log(layers);


    return ReactDom.createPortal(<>
        <div style={OVER_STYLES}></div>
        <div style={MODAL_STYLES}>
            <div className="row pt-3" style={{ width: "100%" }}>
                <div className="col-10" style={{ width: "75%" }}><h3 className="ml-3">{children}for Layer {layer}</h3></div>
                <div className="col-2"><Button onClick={onClose} className="btn-danger ml-5" style={{ width: "35px", float: "right" }}>x</Button></div>
            </div>
            <hr />
            <div className="p-3">
                {
                    layers[layer].obj ? "edit" : "create"
                }
                <Form>
                    <div className="row">
                        <div className="col-4">
                        
                            Monoparametric Content
                            
                            <Input type="select">
                                <option id="default" >----</option>
                                <option id="datetime" >Date Time</option>
                                <option id="time" >Time</option>
                                <option id="date" >Date</option>
                                <option id="fossile" >Fossile Reserve</option>
                                <option id="project" >Total Income</option>
                                <option id="crowd" >Crowd Fund</option>
                                <option id="custom" >Custom</option>
                            </Input>
                            <Input type="text" id="oracle_path" placeholder="Oracle" />
                            <InputGroup >
                            <Input type="text" id="monostart" placeholder="Start Trigger"/>
                            <Input type="text" id="end" placeholder="End Trigger"/>
                            </InputGroup>
                        </div>
                        <div className="col-4"></div>
                        <div className="col-4">
                        
                            Diparametric Content
                            
                            <Input type="select">
                                <option id="default" >----</option>
                                <option id="pricechange" >Price Change</option>
                                <option id="temperature" >Temperature</option>
                                <option id="custom" >Custom</option>
                            </Input>
                            <Input type="text" id="oracle_path" placeholder="Oracle" />
                            <InputGroup >
                            <Input type="text" id="distart" placeholder="Start Trigger"/>
                            <Input type="text" id="top" placeholder="Top Trigger"/>
                            <Input type="text" id="bottom" placeholder="Bottom Trigger"/>
                            </InputGroup>
                        </div>
                    </div>
                </Form>
            </div>
        </div>
    </>, document.getElementById("portal")
    )
}