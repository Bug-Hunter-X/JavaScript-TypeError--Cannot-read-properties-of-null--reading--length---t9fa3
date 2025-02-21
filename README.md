# JavaScript TypeError: Cannot read properties of null (reading 'length')

This repository demonstrates a common JavaScript error: a `TypeError` thrown when attempting to access the `length` property of a null or undefined object.

The `bug.js` file contains the erroneous code. The `bugSolution.js` provides a corrected version.

## Bug

The issue arises from insufficient null and undefined checks.  Simply checking for `null` or `undefined` isn't enough when trying to access properties that might not exist if those values are present.

## Solution

The solution involves using optional chaining (?.) to safely access the length property, or a more explicit check that verifies the object's type before property access.