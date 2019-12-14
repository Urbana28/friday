const SET_USER = 'SET_USER';

interface ISameAction {
    type: typeof SET_USER,
    data: IData
}

interface IData {
    email: string,
    token: string,
    error: string | undefined
}

export type ISignInActions = ISameAction;

export let setUser = (userData: IData): ISignInActions => {
    return {type: SET_USER, data: userData}
};