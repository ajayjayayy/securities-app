import { USER_INPUT }     from "../Constants";
import { USER_SELECTION } from "../Constants";

let initialState = {
    assetsName: ["TSLA", "KO", "IBM", "AAPL", "NFLX"],
    assetType: "function=TIME_SERIES_MONTHLY_ADJUSTED&"
};

function userInteractionReducer(state = initialState, action)
{
    switch(action.type)
    {
        case USER_INPUT:
            return Object.assign({}, state, {
                ...state,
                assetsName: action.assetsName
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

export default userInteractionReducer;