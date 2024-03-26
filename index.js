// Function to create ErrorLogger instance
export function createErrorLogger() {
  // Array to store error logs
  const errorLogs = [];

  // Method to capture errors
  function captureError(error) {
    try {
      // Create an object to store error details
      const errorDetails = {
        message: error.message, // Error message
        stackTrace: error.stack, // Stack trace
        timestamp: new Date().toISOString(), // Timestamp of when the error occurred
      };

      // Add error details to the errorLogs array
      errorLogs.push(errorDetails);

      // Log the error details to the console
      logError(errorDetails);
    } catch (loggingError) {
      console.error("Error occurred while logging:", loggingError);
    }
  }

  // Method to log error details to the console
  function logError(errorDetails) {
    // Log error message and stack trace to the console
    console.error(`[ERROR] ${errorDetails.timestamp}: ${errorDetails.message}`);
    console.error(errorDetails.stackTrace);

    // Provide guidance to users on how to handle errors
    console.error(
      "An error occurred. You can search for solutions using the following link:"
    );
    console.error(
      `Google Search: https://www.google.com/search?q=${encodeURIComponent(
        errorDetails.message
      )}`
    );
  }

  // Method to get all error logs
  function getErrorLogs() {
    // Return the array of error logs
    return errorLogs;
  }

  // Return the ErrorLogger object with methods
  return {
    captureError,
    logError,
    getErrorLogs,
  };
}
