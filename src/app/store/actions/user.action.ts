

export class UserLogin {
    static readonly type = '[User] Login';
    constructor(public payload: { username: string; password: string }) {}
}