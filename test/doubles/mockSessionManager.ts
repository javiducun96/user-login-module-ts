import { SessionManager } from '../../src/sessionManager'

export class MockSessionManager implements SessionManager {
  private validUsername: string
  private validPassword: string

  login(userName: string, password: string): boolean {
    if (this.validUsername && this.validUsername === userName && this.validPassword && this.validPassword === password)
      return true
    return false
  }

  getSessions(): number {
    throw Error('This method should not be called')
  }

  addValidUsernameAndPassword(username: string, password: string) {
    this.validUsername = username
    this.validPassword = password
  }
}
