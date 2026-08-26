// Simple test file - change shouldPass to test pass/fail behavior
// Set to true to pass, false to fail
const shouldPass = true;

if (!shouldPass) {
  console.error("Test failed: shouldPass is false");
  process.exit(1);
}

console.log("Test passed: shouldPass is true");
process.exit(0);
