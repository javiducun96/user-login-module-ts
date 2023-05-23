import { User } from '../src/user'
import { UserLoginService } from '../src/userLoginService'
import { MockSessionManager } from './doubles/mockSessionManager'

describe('User Service Login', () => {
  const mockSessionManager = new MockSessionManager()
  mockSessionManager.addValidUsername('javiducun')
  mockSessionManager.setSessions(20)

  it('should log a user', () => {
    // arrange
    const service = new UserLoginService(mockSessionManager)
    const myUser = new User('javiducun')

    // act
    const response = service.manualLogin(myUser)

    // asert
    expect(response).toEqual('User successfully logged in')
  })

  it('is user already loged in', () => {
    // arrange
    const service = new UserLoginService(mockSessionManager)
    const myUser = new User('javiducun')

    // act
    service.manualLogin(myUser)
    const response = service.manualLogin(myUser)

    // asert
    expect(response).toEqual('User already logged in')
  })

  it('get Logged User array', () => {
    // arrange
    const service = new UserLoginService(mockSessionManager)
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
    const service = new UserLoginService(mockSessionManager)

    // act
    const response = service.getExternalSessions()

    // asert
    expect(response).toEqual(20)
  })
})
