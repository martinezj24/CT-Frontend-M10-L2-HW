// Task 1: Create a Function to Handle Deposits into a Bank Account

let balance = 0;

function deposit(amount) {
    if (amount > 0) {
        balance += amount;
        console.log(`Deposit successful. New balance: $${balance.toFixed(2)}`);
    } else {
        console.log("Deposit amount must be positive");
    }
}

// Task 2: Implement a Function to Handle Withdrawals from a Bank Account, Ensuring Sufficient Balance

function withdraw(amount) {
    if (amount > 0) {
        if (amount <= balance) {
            balance -= amount;
            console.log(`Withdrawal successful. New balance: $${balance.toFixed(2)}`);
        } else {
            console.log("Insufficient balance for this withdrawal");
        }
    } else {
        console.log("Withdrawal amount must be positive");
    }
}

// function checkBalance() {
    function checkBalance() {
        console.log(`Current balance: $${balance.toFixed(2)}`);
    }

// Banking operations
deposit(100);       // Deposit $100
withdraw(50);       // Withdraw $50
checkBalance();     // Check balance
withdraw(100);      // Attempt to withdraw $100 (should fail due to insufficient balance)
deposit(-20);       // Attempt to deposit a negative amount (should fail)