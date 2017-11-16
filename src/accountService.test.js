//TODO: 
//- deposit into account
//- withdraw from an account
//- print bank statement

// statement should have the following

// DATE | AMMOUNT | BALANCE
// 10/04/2014 | 500 | 1400
// 02/04/2014
import AccountService from './AccountService'

describe('deposit', ()=>{
  it('should deposit into accout given a ammount', () => {
    const account  = new AccountService()
    account.deposit(1000)

    expect(1000, account.get)

  })
})