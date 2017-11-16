import AccountService from './AccountService'

describe('Acceptance criteria', () => {
  
  it('should given ammount console show acceptance result', () => {
    const account = new AccountService()
    account.deposit(1000)
    account.withdraw(100)
    account.deposit(500)
    expect(account.printStatement()).toContain("1000")
    expect(account.printStatement()).toContain("-100")
    expect(account.printStatement()).toContain("500")
  });
  
});
