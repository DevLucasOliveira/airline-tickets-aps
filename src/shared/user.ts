export class User {
    name: string;
    email: string;
    password: string;
    logged: boolean;

    constructor(name: string, email: string, password: string, logged: boolean) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.logged = logged;
    }
}