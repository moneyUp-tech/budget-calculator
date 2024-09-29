document.getElementById("budget-form").addEventListener("submit", function (e) {
    e.preventDefault();
  
    // Get income values
    const income = parseFloat(document.getElementById("salary").value) || 0;
    const freelance = parseFloat(document.getElementById("freelance").value) || 0;
    const totalIncome = income + freelance;
  
    // Get all expense values
    const expenseNames = document.querySelectorAll('.expense-name');
    const expenseAmounts = document.querySelectorAll('.expense-amount');
    let totalExpenses = 0;
  
    expenseAmounts.forEach(function(amountInput) {
      totalExpenses += parseFloat(amountInput.value) || 0;
    });
  
    const savingsGoal = parseFloat(document.getElementById("savings-goal").value) || 0;
  
    const remainingBudget = totalIncome - totalExpenses;
  
    // Update financial summary
    document.getElementById("remaining-budget").innerText = `Remaining Budget: KShs ${remainingBudget}`;
    document.getElementById("savings-progress").innerText = `Savings Goal Progress: ${(remainingBudget >= savingsGoal) ? 'On Track' : 'Falling Behind'}`;
  
    // TODO: Update charts (using Chart.js for example)
  });
  
  // Function to dynamically add expense rows
  document.getElementById("add-expense").addEventListener("click", function () {
    const expensesSection = document.getElementById("expenses-section");
  
    // Create a new expense row
    const newExpenseRow = document.createElement('div');
    newExpenseRow.classList.add('expense-row');
  
    newExpenseRow.innerHTML = `
      <input type="text" placeholder="Expense Name" class="expense-name">
      <input type="number" placeholder="Amount" class="expense-amount">
      <span class="currency-label">KShs</span>
    `;
  
    expensesSection.insertBefore(newExpenseRow, document.getElementById("add-expense"));
  });
  