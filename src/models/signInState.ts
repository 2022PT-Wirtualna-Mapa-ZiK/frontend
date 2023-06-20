export interface SignInState {
    email: string;
    password: string;
    errors: {
        email: string;
        password: string;
    };
}
