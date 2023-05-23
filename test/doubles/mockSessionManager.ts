import { SessionManager } from '../../src/sessionManager'

export class MockSessionManager implements SessionManager {
  login(userName: string, password: string): boolean {
    return userName === 'javiducun'
  }

  getSessions(): number {
    return 20
  }
}
