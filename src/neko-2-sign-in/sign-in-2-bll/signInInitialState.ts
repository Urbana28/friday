export interface ISignInState {
    login: string,
    password: string,
    isAuth: boolean,
    userId: number
}

export const signInInitialState: ISignInState = {
    login: 'hanna',
    password: 'h2',
    isAuth: false,
    userId: 1
};
