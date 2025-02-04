// Task 1: Business Profit Calculation
function calculateProfit(costPrice, sellingPrice, unitsSold) {
    let profit = (sellingPrice - costPrice) * unitsSold;
    console.log(`Total Profit: $${profit}`);
}

// Test Cases
calculateProfit(20, 30, 100);  // Expected output: "Total Profit: $1000"
calculateProfit(50, 70, 200);  // Expected output: "Total Profit: $4000"
// Task 2: Sales Tax Computation
const calculateSalesTax = function(amount, taxRate) {
    let salesTax = amount * taxRate;
    console.log(`Sales Tax: $${salesTax}`);
};

// Test Cases
calculateSalesTax(100, 0.07);  // Expected output: "Sales Tax: $7"
calculateSalesTax(500, 0.1);   // Expected output: "Sales Tax: $50"
// Task 3: Employee Bonus Calculation
const calculateBonus = (salary, performanceRating) => {
    let bonusPercentage = performanceRating === "Excellent" ? 0.2 :
                          performanceRating === "Good" ? 0.1 :
                          performanceRating === "Average" ? 0.05 : 0;
    let bonus = salary * bonusPercentage;
    console.log(`Bonus: $${bonus}`);
};

// Test Cases
calculateBonus(5000, "Excellent");  // Expected output: "Bonus: $1000"
calculateBonus(7000, "Good");       // Expected output: "Bonus: $700"
// Task 4: Subscription Pricing Model
function calculateSubscriptionCost(plan, months, discount = 0) {
    const pricing = {
        "Basic": 10,
        "Premium": 20,
        "Enterprise": 50
    };
    let cost = (pricing[plan] * months) - discount;
    console.log(`Total Cost: $${cost}`);
}

// Test Cases
calculateSubscriptionCost("Basic", 6, 10);   // Expected output: "Total Cost: $50"
calculateSubscriptionCost("Premium", 12, 0); // Expected output: "Total Cost: $240"

