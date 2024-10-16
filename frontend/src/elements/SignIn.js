import React from 'react';

const SignIn = ({ onSignIn }) => {
  const handleSignIn = () => {
    // Simulate sign-in (replace this with your actual sign-in logic)
    const userData = { name: 'John Doe' }; // Replace with actual user data
    onSignIn(userData);
  };

  return (
    <div>
      <h2 className="text-xl">Sign In</h2>
      <button onClick={handleSignIn} className="bg-blue-500 text-white px-4 py-2 rounded">
        Sign In
      </button>
    </div>
  );
};

export default SignIn;
