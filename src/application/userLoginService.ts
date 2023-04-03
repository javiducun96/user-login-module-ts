import {User} from "../domain/user"

export class UserLoginService {
    private loggedUsers: User[] = []

    public manualLogin = (): string => {
        return "user logged"
    }
}
