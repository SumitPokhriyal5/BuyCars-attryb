export interface ILoginUser {
    id: string,
    name: string,
    token: string,
}

export interface IUserLogin {
    email : string,
    password : string
}

export interface IUserSignup {
    username : string,
    email : string,
    password : string
}