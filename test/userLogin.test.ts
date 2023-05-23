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
})
