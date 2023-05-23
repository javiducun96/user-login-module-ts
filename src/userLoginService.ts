import { User } from './user'

export class UserLoginService {
  private loggedUsers: User[] = []

  public manualLogin = (user: User): string => {
    return 'User successfully logged in'
  }

  private isUserAlreadyLogged = (user: User) =>
    this.loggedUsers.some(loggedUser => loggedUser.getUserName() === user.getUserName())
}
