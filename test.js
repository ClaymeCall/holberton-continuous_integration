// Simple test file - change shouldPass to test pass/fail behavior
// Set to true to pass, false to fail
const shouldPass = true;

// Test that fails with Node version < 25
const nodeVersion = parseInt(process.version.match(/^v(\d+)/)[1]);
if (nodeVersion < 25) {
  console.error(`Test failed: Node version ${nodeVersion} is less than 25`);
  process.exit(1);
}

if (!shouldPass) {
  console.error("Test failed: shouldPass is false");
  process.exit(1);
}

console.log("Test passed: shouldPass is true");
process.exit(0);
