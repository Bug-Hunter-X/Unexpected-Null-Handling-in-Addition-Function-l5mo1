# Unexpected Null Handling in Addition Function

This repository demonstrates a common JavaScript error involving unexpected null handling in a simple addition function.

## Bug Description

The `foo` function adds two numbers, but it silently returns 0 if either input is `null`. While this avoids an error, it might mask a problem in the data pipeline.  A more informative approach would be to explicitly handle null values, perhaps by throwing an error or using a default value.

## Solution

The `bugSolution.js` file provides an improved version that throws an error when null values are encountered.  This makes the unexpected behavior explicit and aids debugging.