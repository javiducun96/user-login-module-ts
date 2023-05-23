import { User } from '../src/user'
import { UserLoginService } from '../src/userLoginService'

describe('User Service Login', () => {
  const service = new UserLoginService()

  it('should log a user', () => {
    const myUser = new User('javiducun')
    expect(service.manualLogin(myUser)).toEqual('User successfully logged in')
  })
})
