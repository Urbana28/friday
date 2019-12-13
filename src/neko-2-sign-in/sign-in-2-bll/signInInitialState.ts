export interface ISignInState {
    login: string,
    password: string,
    rememberMe: boolean
}

export const signInInitialState: ISignInState = {
    login: '',
    password: '',
    rememberMe: false
};
