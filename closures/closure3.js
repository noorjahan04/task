function createBankAccount(initialBalance){
    let balance=initialBalance;
    return{
      deposite(amount){
        balance=balance+amount;
        return balance;
      },
      withdraw(amount){
        if(amount<=balance){
          balance=balance-amount;
          return balance;
        }else{
          return "Insufficient funds"
        }
      },
      getBalance(){
        return balance;
      }
    }
  }
  let amount=createBankAccount(100);
  console.log(amount.deposite(50))
  console.log(amount.withdraw(30))
  console.log(amount.getBalance())
  