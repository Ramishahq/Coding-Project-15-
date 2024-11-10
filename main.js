import { calculatePortfolioValue, getPortfolioAllocation } from './portfolio.js';
import { Transaction } from './transaction.js';

// Function to display portfolio value
function displayPortfolioValue() {
    const portfolioValueSection = document.getElementById("portfolio-value");
    const portfolioValue = calculatePortfolioValue();
    console.log("Portfolio Value:", portfolioValue);  
    portfolioValueSection.innerHTML = `<h2>Portfolio Value: $${portfolioValue.toFixed(2)}</h2>`;
}

// Function to display portfolio allocation
function displayPortfolioAllocation() {
    const allocationSection = document.getElementById("portfolio-allocation");
    const allocations = getPortfolioAllocation();
    console.log("Portfolio Allocation:", allocations);  

    allocations.forEach(allocation => {
        const allocationItem = document.createElement("p");
        allocationItem.textContent = `${allocation.asset}: ${allocation.percentage.toFixed(2)}%`;
        allocationSection.appendChild(allocationItem);
    });
}

// Function to display transaction 
function displayTransactionLog(transactions) {
    const transactionLogSection = document.getElementById("transaction-log");
    transactionLogSection.innerHTML = '';  

    transactions.forEach(transaction => {
        const transactionReceipt = document.createElement("p");
        transactionReceipt.className = "transaction";
        transactionReceipt.textContent = transaction.getReceipt();  
        transactionLogSection.appendChild(transactionReceipt);
    });
}


    // Initialize portfolio and display
    displayPortfolioValue();
    displayPortfolioAllocation();

    const transactions = [];
    try {
        const transaction1 = new Transaction(1, 'buy', 10);
        const transaction2 = new Transaction(2, 'sell', 5);
        const transaction3 = new Transaction(3, 'buy', 7);

        transactions.push(transaction1, transaction2, transaction3);
        console.log(transactions);  

    } catch (error) {
        console.error(error.message);
    }

    
    displayTransactionLog(transactions);
