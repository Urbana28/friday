import {signInInitialState} from "./signInInitialState";
import {
    ISignInActions
} from "./signInActions";

export const signInReducer = (state = signInInitialState, action: ISignInActions) => {
    switch (action.type) {
        case 'SET_USER':
        return {
            ...state,
            ...action.data
        };
        default: {
            return state;
        }
    }
};


