import {Simulate} from "react-dom/test-utils";


export interface ISignInState {
    email: string | null
    token: string | null
    error: string | undefined
}

export const signInInitialState: ISignInState = {
    email: null,
    token: null,
    error: undefined
};


