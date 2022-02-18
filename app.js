function getInputValue (boxID) {
    let inputBox = document.getElementById(boxID);
    let inputAmount = parseFloat(inputBox.value);
    if (isNaN(inputAmount) || inputAmount < 0) {
        inputBox.value = ''
        return alert('Please input valid amount of money in number format')
    }
    if (boxID == 'incomeField') {
        return inputAmount
    }
    else {
        inputBox.value = ''
        return inputAmount
    }

}

// function getIncome () {
//     const income = document.getElementById('incomeField');
//     const incomeAmount = parseFloat(income.value);
//     if (isNaN(incomeAmount) || incomeAmount < 0) {
//         return alert('Please input valid amount of money in number format')
//     }
//     return incomeAmount;
// }



function updateBalance () {
    const income = getInputValue('incomeField');
    const expenses = calculateExpenses();
    const balance = income - expenses;
    if (balance < 0) {
        return alert('Your expense is more than your income');
    }

    else {
        document.getElementById('balance-text').innerHTML = balance;
        document.getElementById('total-expense-text').innerHTML = expenses;
    }


}


function calculateExpenses () {
    const food = getInputValue('food');
    const rent = getInputValue('rent');
    const cloth = getInputValue('cloth');

    const totalExpenses = food + rent + cloth;


    return totalExpenses;

}


function calculateSavings () {
    const income = getInputValue('incomeField');
    const rate = getInputValue('savings-field');
    const currentBalance = document.getElementById('balance-text').innerHTML;
    const currentBalanceValue = parseFloat(currentBalance)
    const savings = income * (rate / 100);

    const remainingBalance = currentBalanceValue - savings;
    if (remainingBalance < 0) {
        return alert('Your savings can not be more than your current balance');
    }
    else {
        document.getElementById('saving-amount').innerHTML = savings;
        document.getElementById('remaining-balance').innerHTML = remainingBalance;
        document.getElementById('incomeField').value = '';
    }
}

document.getElementById('calculate-btn').addEventListener('click', function () {
    updateBalance();

})

document.getElementById('save-btn').addEventListener('click', function () {
    calculateSavings();
})