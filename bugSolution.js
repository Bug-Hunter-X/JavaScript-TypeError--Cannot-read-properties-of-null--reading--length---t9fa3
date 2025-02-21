function foo(x) {
  //Solution 1: Optional Chaining
  return x?.length || 0;

  // Solution 2: Explicit Check
  //if (x !== null && x !== undefined && typeof x === 'object' && x.hasOwnProperty('length')) {
  //  return x.length; 
  //} else {
  //  return 0;
  //} 
}
