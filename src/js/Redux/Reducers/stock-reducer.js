import { USER_INPUT }     from "../Constants";
import { USER_SELECTION } from "../Constants";

let initialState = {
    assetName: "TSLA",
    assetType: "function=TIME_SERIES_MONTHLY_ADJUSTED&"
};

function stockReducer(state = initialState, action)
{
    switch(action.type)
    {
        case USER_INPUT:
            return Object.assign({}, state, {
                ...state,
                assetName: action.assetName
            });
        case USER_SELECTION:
            return Object.assign({}, state, {
                ...state,
                assetType: action.assetType
            });
        default:
            return state;
    }
}

export default stockReducer;
