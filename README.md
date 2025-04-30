# AI In Development: Home Work

## 1. Web Application: Expense Calculator

This task has been implemented and is available in the following repository:
[Expense Calculator Repository](https://github.com/igor-privalov/expense-calculator)

The application is built using:
- Frontend: React with TypeScript
- Backend: Spring Boot
- Database: MongoDB

For detailed information about the implementation, setup instructions, and how to run the application, please refer to the repository's [README.md](https://github.com/igor-privalov/expense-calculator/blob/main/README.md).

## 2. API Testing: Identifying Defects in Product Data
All the tests have been successfully passed, including verifying server responses, product attributes, and defect detection. For more detailed test results, please refer to the full documentation.

For more details on the test cases and results, check the full [README.md](https://github.com/igor-privalov/ai-in-development-homework/blob/main/task-2/README.md).
- Test 1: Response Status Code
Expected: 200, Actual: 200
✅ Passed
----------------------------------------

- Test 2: Product Data Validation
✅ All products passed validation
----------------------------------------

- Test 3: Products with Defects Summary
✅ No products with defects found
----------------------------------------

## 3. SQL Queries: Analyzing a Database Online

## Task 1: Calculate Total Sales Volume for March 2024

```sql
SELECT SUM(amount) as total_month_sales
FROM orders
WHERE order_date BETWEEN '2024-03-01' AND '2024-03-31';
```

**Explanation:**
- `2024-03-01` AND `2024-03-31`: Filters for orders within March 2024 (from the 1st to the 31st)
- `WHERE` clause filters for March 2024
- `SUM(amount)` calculates the total sales amount

**Expected result: 27,000**

## Task 2: Find the Customer Who Spent the Most Overall

```sql
SELECT 
    customer,
    SUM(amount) as total_spent
FROM orders
GROUP BY customer
ORDER BY total_spent DESC
LIMIT 1;
```

- `GROUP BY customer` groups the orders by customer
- `SUM(amount)` calculates the total amount spent by each customer
- `ORDER BY total_spent DESC` sorts customers by total spending in descending order
- `LIMIT 1` returns only the top spender

**Expected result: Alice (20,000)**

## Task 3: Calculate Average Order Value for the Last Three Months

```sql
SELECT 
    AVG(amount) as average_order_value
FROM orders
WHERE order_date >= date('2024-02-01');
```

**Explanation:**
- `WHERE order_date >= date('2024-02-01')` filters orders from February 2024 onwards
- `AVG(amount)` calculates the average order value

**Expected result: 6,000**
