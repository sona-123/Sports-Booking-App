import React from 'react';

const SignUp = ({ onSignIn }) => {
  const handleSignUp = () => {
    // Simulate sign-up (replace this with your actual sign-up logic)
    const userData = { name: 'John Doe' }; // Replace with actual user data
    onSignIn(userData);
  };

  return (
    <div>
      <h2 className="text-xl">Sign Up</h2>
      <button onClick={handleSignUp} className="bg-green-500 text-white px-4 py-2 rounded">
        Sign Up
      </button>
    </div>
  );
};

export default SignUp;
