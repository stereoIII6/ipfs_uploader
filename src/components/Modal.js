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
    opacity: 1,
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
                <h6>Dynamic Input</h6>
                {
                    layers[layer].obj ? "edit your dynamicinput values" : "create new dynamic inputs"
                }
                <Form>
                    <div className="row">
                        <div className="col-4 pb-2">

                            <Input type="select">
                                <option id="default" >----</option>
                                <option id="pricechange" >Price Change</option>
                                <option id="temperature" >Temperature</option>
                                <option id="custom" >Custom</option>
                            </Input>
                            <Input type="text" id="oracle_path" placeholder="Oracle" />
                            <InputGroup >
                                <Input type="text" id="start" placeholder="Start Trigger" />
                                <Input type="text" id="top" placeholder="Top Trigger" />
                                <Input type="text" id="bottom" placeholder="Bottom Trigger" />
                            </InputGroup>
                            <InputGroup >
                                <Input type="text" id="start" placeholder="Start x" />
                                <Input type="text" id="top" placeholder="Top x" />
                                <Input type="text" id="bottom" placeholder="Bottom x" />
                            </InputGroup>
                            <InputGroup >
                                <Input type="text" id="start" placeholder="Start y" />
                                <Input type="text" id="top" placeholder="Top y" />
                                <Input type="text" id="bottom" placeholder="Bottom y" />
                            </InputGroup>
                            <InputGroup >
                                <Input type="text" id="start" placeholder="Start z" />
                                <Input type="text" id="top" placeholder="Top z" />
                                <Input type="text" id="bottom" placeholder="Bottom z" />
                            </InputGroup>
                            <InputGroup >
                                <Input type="text" id="start" placeholder="Start r" />
                                <Input type="text" id="top" placeholder="Top r" />
                                <Input type="text" id="bottom" placeholder="Bottom r" />
                            </InputGroup>
                            <InputGroup >
                                <Input type="text" id="start" placeholder="Start o" />
                                <Input type="text" id="top" placeholder="Top o" />
                                <Input type="text" id="bottom" placeholder="Bottom o" />
                            </InputGroup>
                        </div>
                        <div className="col-8" style={{}}>
                            Screen Preview
                            <div style={{ background: "black", width: "375px", height: "215px" }}></div>
                        </div>
                    </div>
                </Form>
            </div>
        </div>
    </>, document.getElementById("portal")
    )
}