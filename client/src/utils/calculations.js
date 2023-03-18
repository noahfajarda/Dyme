// calculation functions
export default function getTotalExpensesByCategory(user, total, setTotalExpensesByCategory) {
    const categoryTotalsPercentage = {
        "Rent & Living Expenses": [0, 0.0],
        Lifestyle: [0, 0.0],
        "Auto & Transportation": [0, 0.0],
        "Food & Dining": [0, 0.0],
        "Health & Fitness": [0, 0.0],
        Entertainment: [0, 0.0],
        Miscellaneous: [0, 0.0],
    };

    // EXPENSES MATH LOGIC TODO:

    // retrieve all user expenses
    // console.log("ALL: ", user?.expenses);

    // calculate total based on category
    if (user?.expenses !== undefined && user?.expenses?.length !== 0) {
        for (const category in categoryTotalsPercentage) {
            // filteredExpense is the array of expenses in ONE category
            const filteredExpense = user?.expenses.filter(
                (expense) => expense.category === category
            );
            if (filteredExpense.length > 0) {
                // add all expense amounts in a category
                const categoryTotal = filteredExpense.reduce(
                    (accumulator, currentValue) =>
                        accumulator + currentValue.amount,
                    0
                );
                // get percentage of it
                const categoryPercentage = parseFloat(
                    ((categoryTotal / total) * 100).toFixed(1)
                );

                categoryTotalsPercentage[category] = [
                    categoryTotal,
                    categoryPercentage,
                ];
            }
        }
        setTotalExpensesByCategory(categoryTotalsPercentage);
    }
}