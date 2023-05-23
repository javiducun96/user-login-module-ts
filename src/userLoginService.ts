import { User } from './user'

export class UserLoginService {
  private loggedUsers: User[] = []

  public manualLogin = (user: User): string => {
    if (this.isUserAlreadyLogged(user)) {
      return 'User already logged in'
    }
    this.addLoggedUser(user)
    return 'User successfully logged in'
  }

  public getLoggedUsers = () => {
    return this.loggedUsers
  }

  private addLoggedUser = (user: User) => {
    this.loggedUsers.push(user)
  }

  private isUserAlreadyLogged = (user: User) =>
    this.loggedUsers.some(loggedUser => loggedUser.getUserName() === user.getUserName())
}
