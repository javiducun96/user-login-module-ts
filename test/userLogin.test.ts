import { User } from '../src/user'
import { UserLoginService } from '../src/userLoginService'
import { MockSessionManager } from './doubles/mockSessionManager'
import { DummySessionManager } from './doubles/dummySessionManager'
import { StubSessionManager } from './doubles/stubSessionManager'

describe('User Service Login', () => {
  it('should log a user', () => {
    // arrange
    const service = new UserLoginService(new DummySessionManager())
    const myUser = new User('javiducun')

    // act
    const response = service.manualLogin(myUser)

    // asert
    expect(response).toEqual('User successfully logged in')
  })

  it('is user already loged in', () => {
    // arrange
    const service = new UserLoginService(new DummySessionManager())
    const myUser = new User('javiducun')

    // act
    service.manualLogin(myUser)
    const response = service.manualLogin(myUser)

    // asert
    expect(response).toEqual('User already logged in')
  })

  it('get Logged User array', () => {
    // arrange
    const service = new UserLoginService(new DummySessionManager())
    const myUser = new User('javiducun')
    const myUser2 = new User('javiducun2')

    // act
    service.manualLogin(myUser)
    service.manualLogin(myUser2)
    const response = service.getLoggedUsers()

    // asert
    expect(response).toEqual([myUser, myUser2])
  })

  it('get facebook external sessions', () => {
    // arrange
    const stubSessionManager = new StubSessionManager()
    stubSessionManager.setSessions(20)
    const service = new UserLoginService(stubSessionManager)

    // act
    const response = service.getExternalSessions()

    // asert
    expect(response).toEqual(20)
  })

  it('login user from sessionManager', () => {
    // arrange
    const mockSessionManager = new MockSessionManager()
    mockSessionManager.addValidUsernameAndPassword('javiducun', 'password')
    const service = new UserLoginService(mockSessionManager)

    // act
    const response = service.login('javiducun', 'password')

    // asert
    expect(response).toEqual('Login correcto')
  })

  it('login user from sessionManager is in loggedUser array', () => {
    // arrange
    const mockSessionManager = new MockSessionManager()
    mockSessionManager.addValidUsernameAndPassword('javiducun', 'password')
    const service = new UserLoginService(mockSessionManager)

    // act
    service.login('javiducun', 'password')
    const response = service.getLoggedUsers()

    // asert
    expect(response[0].getUserName()).toBe('javiducun')
    //expect(JSON.stringify(response)).toStrictEqual(JSON.stringify([new User('javiducun')]))
  })

  it('wrong login from sessionManager', () => {
    // arrange
    const mockSessionManager = new MockSessionManager()
    mockSessionManager.addValidUsernameAndPassword('javiducun', 'password')
    const service = new UserLoginService(mockSessionManager)

    // act
    const response = service.login('javiducun', 'wrong password')

    // asert
    expect(response).toEqual('Login incorrecto')
  })
})
