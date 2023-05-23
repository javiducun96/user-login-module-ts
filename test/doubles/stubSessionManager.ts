import { SessionManager } from '../../src/sessionManager'

export class StubSessionManager implements SessionManager {
  private sessions: number = 0

  login(userName: string, password: string): boolean {
    throw Error('This method should not be called')
  }

  getSessions(): number {
    return this.sessions
  }

  setSessions(sessions: number) {
    this.sessions = sessions
  }
}
