import React, { useState } from 'react';

// Custom Hook for managing error state
const useError = () => {
  const [error, setError] = useState<string | null>(null);

  const triggerError = (message: string) => {
    setError(message);
  };

  const clearError = () => {
    setError(null);
  };

  return { error, triggerError, clearError };
};

const ErrorPage = () => {
  const { error, triggerError, clearError } = useError();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {error ? (
        <div className="text-center">
          <h1 className="text-9xl font-bold text-red-500">Error</h1>
          <p className="mt-4 text-lg font-medium text-gray-800">{error}</p>
          <button
            onClick={clearError}
            className="px-4 py-2 mt-6 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
          >
            Clear Error
          </button>
        </div>
      ) : (
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800">No Errors</h1>
          <p className="mt-2 text-gray-600">Everything is running smoothly.</p>
          <button
            onClick={() => triggerError('An unexpected error occurred.')}
            className="px-4 py-2 mt-6 text-white bg-red-500 rounded-lg hover:bg-red-600"
          >
            Simulate Error
          </button>
        </div>
      )}
    </div>
  );
};

export default ErrorPage;
