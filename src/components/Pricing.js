import React from 'react';

const Pricing = () => {
  return (
    <div className="max-w-xl w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8">
      {/* API Pricing Heading */}
      <h2 className="text-2xl font-bold mb-4 bg-blue-600 text-white dark:bg-gray-700 dark:text-white px-4 py-2 rounded-md">
        API Pricing
      </h2>
      <p className="text-gray-600 dark:text-gray-300">
        Our API pricing is based on the model used and the number of tokens processed. Here's a breakdown of the costs:
      </p>
      {/* Pricing Table */}
      <div className="mt-6">
        <table className="min-w-full text-left">
          <thead>
            <tr>
              <th className="px-4 py-2 text-pink-600 dark:text-pink-400">API</th>
              <th className="px-4 py-2 text-green-600 dark:text-green-400">Model</th>
              <th className="px-4 py-2 text-purple-600 dark:text-purple-400">Price per 1K Tokens</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2 dark:text-gray-300">OpenAI</td>
              <td className="border px-4 py-2 dark:text-gray-300">GPT-3.5</td>
              <td className="border px-4 py-2 dark:text-gray-300">$0.002</td>
            </tr>
            <tr>
              <td className="border px-4 py-2 dark:text-gray-300">OpenAI</td>
              <td className="border px-4 py-2 dark:text-gray-300">GPT-4</td>
              <td className="border px-4 py-2 dark:text-gray-300">$0.03</td>
            </tr>
            <tr>
              <td className="border px-4 py-2 dark:text-gray-300">Together AI</td>
              <td className="border px-4 py-2 dark:text-gray-300">Llama-2-70b</td>
              <td className="border px-4 py-2 dark:text-gray-300">$0.0008</td>
            </tr>
            <tr>
              <td className="border px-4 py-2 dark:text-gray-300">Together AI</td>
              <td className="border px-4 py-2 dark:text-gray-300">Llama-2-13b</td>
              <td className="border px-4 py-2 dark:text-gray-300">$0.0006</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      {/* Token Estimation Section */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-2 bg-blue-600 text-white dark:bg-gray-700 dark:text-white px-4 py-2 rounded-md">
          Token Estimation
        </h3>
        <p className="text-gray-600 dark:text-gray-300">
          On average, 1 token is approximately 4 characters or 0.75 words. For precise pricing, we recommend using our token calculator tool.
        </p>
      </div>
      
      {/* Billing Section */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-2 bg-blue-600 text-white dark:bg-gray-700 dark:text-white px-4 py-2 rounded-md">
          Billing
        </h3>
        <p className="text-gray-600 dark:text-gray-300">
          You will only be charged for the tokens used in generating the book. The API tracks token usage and bills accordingly. Detailed usage reports are available in your account dashboard.
        </p>
      </div>
    </div>
  );
};

export default Pricing;
