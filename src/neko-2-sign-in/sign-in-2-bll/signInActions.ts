const SET_USER = 'SET_USER';

interface ISameAction {
    type: typeof SET_USER,
    data: IData
}

interface IData {
    email: string,
    password: string,
    rememberMe: boolean
}

export type ISignInActions = ISameAction;

export let setUser = (email: string, password: string, rememberMe: boolean): ISignInActions => {
    return {type: SET_USER, data:{email, password, rememberMe} }
};