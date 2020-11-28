export class User {
    name: string;
    email: string;
    password: string;
    token?: string;

    constructor(name: string, email: string, password: string, token?: string) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.token = token;
    }
}

export class UserAuthResponse {
    success: boolean;
    message: string;
    data: User;
}
