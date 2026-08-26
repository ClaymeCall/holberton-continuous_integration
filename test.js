// Simple test file - change shouldPass to test pass/fail behavior
// Set to true to pass, false to fail
const shouldPass = false;

if (!shouldPass) {
  console.error("Test failed: shouldPass is false");
  process.exit(1);
}

console.log("All tests passed!");
process.exit(0);
