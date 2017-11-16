import AccountService from './AccountService'

describe('Acceptance criteria', () => {
  
  it('should given ammount console show acceptance result', () => {
    const account = new AccountService()
    account.deposit(1000)
    expect(account.printStatement()).toContain(1000)
  });
  
});
