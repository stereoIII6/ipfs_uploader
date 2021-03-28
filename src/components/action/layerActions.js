import {
    GET_LAYERS,
    GET_LAYER,
    LOAD_LAYERS,
    ADD_LAYER,
    DEL_LAYER,
    MOVE_LAYER
} from "./types";

export const getLayers = () => (dispatch, getState) => {
    dispatch(setLoadLayer());
    console.log(getState);
};

export const setLoadLayer = () => {
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

export const deleteLayer = () => {
    return {
        type: DEL_LAYER
    };
};

export const moveLayer = () => {
    return {
        type: MOVE_LAYER
    };
};