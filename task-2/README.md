# API Testing for Fake Store API

This project contains automated tests to validate the data provided by the Fake Store API (https://fakestoreapi.com/products).

## Test Objectives

1. Verify server response code (expected 200)
2. Validate product data:
    - Check for empty titles
    - Check for negative prices
    - Check for rating rates exceeding 5
3. Generate a list of products containing defects

## Prerequisites

- Node.js installed
- npm (Node Package Manager)

## Setup

1. Install dependencies:
```bash
npm install axios
```

2. Run the tests:
```bash
node api_tests.js
```

## Test Results

The test script will output:
- Response status code verification
- List of products with validation defects
- Summary of all products with defects

## Example Output

```
Test 1: Response Status Code
Expected: 200, Actual: 200
✅ Passed
----------------------------------------

Test 2: Product Data Validation
✅ All products passed validation
----------------------------------------

Test 3: Products with Defects Summary
✅ No products with defects found
```

## Notes

- The tests use the axios library for making HTTP requests
- All validation rules are implemented according to the requirements
- The script includes error handling for API request failures 