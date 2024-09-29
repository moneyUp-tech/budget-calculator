document.getElementById("budget-form").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const income = parseFloat(document.getElementById("salary").value) || 0;
    const freelance = parseFloat(document.getElementById("freelance").value) || 0;
    const totalIncome = income + freelance;
  
    const rent = parseFloat(document.getElementById("rent").value) || 0;
    const groceries = parseFloat(document.getElementById("groceries").value) || 0;
    const entertainment = parseFloat(document.getElementById("entertainment").value) || 0;
    const totalExpenses = rent + groceries + entertainment;
  
    const savingsGoal = parseFloat(document.getElementById("savings-goal").value) || 0;
  
    const remainingBudget = totalIncome - totalExpenses;
  
    // Update financial summary
    document.getElementById("remaining-budget").innerText = `Remaining Budget: ${remainingBudget}`;
    document.getElementById("savings-progress").innerText = `Savings Goal Progress: ${(totalIncome - totalExpenses >= savingsGoal) ? 'On Track' : 'Falling Behind'}`;
  
    // TODO: Update charts (using Chart.js for example)
  });
  