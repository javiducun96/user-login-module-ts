import { SessionManager } from '../../src/sessionManager'

export class DummySessionManager implements SessionManager {
  login(userName: string, password: string): boolean {
    throw Error('This method should not be called')
  }

  logout(userName: string): boolean {
    throw Error('This method should not be called')
  }

  getSessions(): number {
    throw Error('This method should not be called')
  }
}
