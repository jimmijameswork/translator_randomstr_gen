import { useState, useCallback, useEffect } from "react";

export default function RandomString() {
  const [randomString, setRandomString] = useState("");

  const generateString = useCallback(() => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 10; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    setRandomString(result);
  }, []);

  useEffect(() => {
    generateString(); // generate on mount
  }, [generateString]);

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow rounded mt-6 text-center">
      <h2 className="text-xl font-bold mb-4">Random String Generator</h2>
      <p className="mb-4 text-lg font-mono">{randomString}</p>
      <button
        onClick={generateString}
        className="bg-green-500 text-white p-2 rounded cursor-pointer hover:bg-green-600"
      >
        Generate New String
      </button>
    </div>
  );
}
