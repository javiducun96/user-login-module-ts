import { SessionManager } from './sessionManager'

export class MockFacebookSessionManager implements SessionManager {
  login(userName: string, password: string): boolean {
    return userName === 'javiducun'
  }

  getSessions(): number {
    return 20
  }
}
