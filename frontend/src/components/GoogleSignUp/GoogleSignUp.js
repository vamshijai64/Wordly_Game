// src/components/Wordle/GoogleSignUp.js
import React, { useState } from 'react';
import { auth, GoogleAuthProvider, signInWithPopup, signOut } from '../../firebase/firebase'; // Update path
import { useNavigate } from 'react-router-dom';
import './GoogleSignUp.scss'; // Import the SCSS styles

const GoogleSignUp = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleGoogleSignUp = async () => {
    try {
      setLoading(true);

      // Sign out the user first to ensure they are prompted for Google sign-in
      await signOut(auth);

      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);

      const user = result.user;
      console.log("User Info:", user);

      // Redirect to the game screen after successful sign-up
      navigate('/game'); // Redirect to the game screen after successful sign-in
    } catch (err) {
      setError(err.message);
      setLoading(false);
      console.error("Error signing in with Google: ", err.message);
    }
  };

  return (
    <div className="google-signup-container">
      <h2>Sign Up with Google</h2>
      <button onClick={handleGoogleSignUp} disabled={loading}>
        {loading ? 'Signing in...' : 'Sign Up with Google'}
      </button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default GoogleSignUp;
