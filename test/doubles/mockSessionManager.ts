import { SessionManager } from '../../src/sessionManager'

export class MockSessionManager implements SessionManager {
  private validUsernames: string[] = []
  private sessions: number = 0

  login(userName: string, password: string): boolean {
    return this.validUsernames.includes(userName)
  }

  getSessions(): number {
    return this.sessions
  }

  setSessions(sessions: number) {
    this.sessions = sessions
  }

  addValidUsername(username: string) {
    this.validUsernames.push(username)
  }
}
