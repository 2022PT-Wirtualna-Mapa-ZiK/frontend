export default interface SignUpState {
    name: string;
    surname: string;
    email: string;
    password: string;
    confPassword: string;
    errors: {
        name: string;
        surname: string;
        email: string;
        password: string;
        confPassword: string;
    };
}
