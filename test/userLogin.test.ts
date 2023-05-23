import { User } from '../src/user'
import { UserLoginService } from '../src/userLoginService'

describe('User Service Login', () => {
  it('should log a user', () => {
    // arrange
    const service = new UserLoginService()
    const myUser = new User('javiducun')

    // act
    const response = service.manualLogin(myUser)

    // asert
    expect(response).toEqual('User successfully logged in')
  })

  it('is user already loged in', () => {
    // arrange
    const service = new UserLoginService()
    const myUser = new User('javiducun')

    // act
    service.manualLogin(myUser)
    const response = service.manualLogin(myUser)

    // asert
    expect(response).toEqual('User already logged in')
  })

  it('get Logged User array', () => {
    // arrange
    const service = new UserLoginService()
    const myUser = new User('javiducun')
    const myUser2 = new User('javiducun2')

    // act
    service.manualLogin(myUser)
    service.manualLogin(myUser2)
    const response = service.getLoggedUsers()

    // asert
    expect(response).toEqual([myUser, myUser2])
  })
})
