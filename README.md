# error-compass

**error-compass** is a lightweight JavaScript library for logging and capturing errors with ease.

## Installation

You can install **error-compass** via npm:

```bash
npm install error-compass

```

Usage
// Import the createErrorLogger function from error-compass
import { createErrorLogger } from "error-compass";

// Create an instance of ErrorLogger
const ErrorLogger = createErrorLogger();

try {
// Simulate code that may throw an error
// For example, accessing a property of an undefined object
let myObject; // myObject is undefined here
console.log(myObject.property); // This will throw the error
} catch (error) {
// Capture and log the error using ErrorLogger
ErrorLogger.captureError(error);
}

Features
Simple Interface
Customizable Options
Error Guidance

Contributing
Contributions are welcome! Follow the link->https://github.com/SayantanBong007/error-compass
