import {
    GET_LAYERS,
    GET_LAYER,
    LOAD_LAYERS,
    ADD_LAYER,
    DEL_LAYER,
    MOVE_LAYER
} from "../action/types";
const initState = {
    layers: [],
    loadingLayers: false,

};

export default function (state = initState, action) {
    switch (action.type) {
        case GET_LAYERS:
            return {
                ...state,
                layers: action.payload,
                loadingLayers: false
            };
        case LOAD_LAYERS:

            return {
                ...state,
                loadingLayers: true
            };
        case ADD_LAYER:
            console.log("reduced add layer", action.payload);
            return {
                ...state,
                layers: [action.payload, ...state.layers]
            };
        default:
            return state;
    }
}