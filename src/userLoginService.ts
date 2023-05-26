import { SessionManager } from './sessionManager'
import { User } from './user'

export class UserLoginService {
  private loggedUsers: User[] = []

  constructor(private sessionManager: SessionManager) {}

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

  private removeLoggedUser = (username: string) => {
    this.loggedUsers = this.loggedUsers.filter(user => user.getUserName() !== username)
  }

  private isUserAlreadyLogged = (user: User) =>
    this.loggedUsers.some(loggedUser => loggedUser.getUserName() === user.getUserName())

  public getExternalSessions = () => {
    return this.sessionManager.getSessions()
  }

  public login = (username: string, password: string) => {
    try {
      if (this.sessionManager.login(username, password)) {
        this.addLoggedUser(new User(username))
        return 'Login correcto'
      }
    } catch (ex) {
      return ex
    }
    return 'Login incorrecto'
  }

  public logout = (username: string) => {
    if (!this.isUserAlreadyLogged(new User(username))) {
      return 'User not found'
    }
    this.removeLoggedUser(username)
    return 'User logged out'
  }
}
