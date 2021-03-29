import {
    GET_LAYERS,
    GET_LAYER,
    LOAD_LAYERS,
    ADD_LAYER,
    DEL_LAYER,
    MOVE_LAYER
} from "./types";

export const getLayers = () => (dispatch) => {
    console.log("action get layers")
    dispatch(setLoadLayer());
};

export const setLoadLayer = () => {
    console.log("action layers loading")
    return {
        type: LOAD_LAYERS
    };
};

export const addLayer = (newLayer) => {
    console.log("action add layer", newLayer);
    return {
        type: ADD_LAYER,
        payload: newLayer
    };
};

export const deleteLayer = (id) => {
    console.log("action delete layer", id);
    return {
        type: DEL_LAYER,
        payload: id
    };
};

export const moveLayer = () => {
    return {
        type: MOVE_LAYER
    };
};