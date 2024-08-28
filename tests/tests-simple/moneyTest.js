import {formatCurrency} from "../../scripts/utils/money.js";
// Automated Tests = using code to test code
// group of related tests = test suite
console.log('test suite: formatCurrency');

console.log('converts cents into dollars');
// Two types of Edge case

// This is Basic Test Cases


if (formatCurrency(2095) === '20.95'){
  console.log('passed');
}else{
  console.log('failed');
}

console.log('rounds up to nearest cent');

// This is Edge Cases
if (formatCurrency(2000.5) === '20.01'){
  console.log('passed');
}else{
  console.log('failed');
}
console.log('rounds up to nearest cent');

if (formatCurrency(2000.4) === '20.00'){
  console.log('passed');
}else{
  console.log('failed');
}