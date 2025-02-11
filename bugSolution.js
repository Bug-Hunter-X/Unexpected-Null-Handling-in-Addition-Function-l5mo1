function foo(a, b) {
  if (a === null || b === null) {
    throw new Error('Invalid input: null values are not allowed.');
  }
  return a + b;
}

// Example usage:
console.log(foo(5, 5)); // Output: 10
try {
  console.log(foo(null, 5)); // Throws an error
} catch (e) {
  console.error(e.message); // Output: 'Invalid input: null values are not allowed.'
}

// Alternative solution with default values
function fooWithDefault(a, b) {
    const aVal = a === null ? 0 : a;  // Default value for a
    const bVal = b === null ? 0 : b;  // Default value for b
    return aVal + bVal;
}

console.log(fooWithDefault(null,5)); //Output: 5
console.log(fooWithDefault(5,null)); //Output: 5