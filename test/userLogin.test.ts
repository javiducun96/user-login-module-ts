import { User } from '../src/user'
import { UserLoginService } from '../src/userLoginService'

describe('User Service Login', () => {
  const service = new UserLoginService()

  it('should log a user', () => {
    const myUser = new User('javiducun')
    expect(service.manualLogin(myUser)).toEqual('User successfully logged in')
  })

  it('is user already loged in', () => {
    // arrange
    const myUser = new User('javiducun2')

    // act
    service.manualLogin(myUser)
    const response = service.manualLogin(myUser)

    // asert
    expect(response).toEqual('User already logged in')
  })
})
