function ForgotenPassword({ handleForgotPassword }) {


  const handleResetButton = () => {
    console.log("Reset button clicked");
    // Need to add proper validation logic
    // Add logic to send reset password email
  };


  return (
    <div className="forgotenPassword">
      <button onClick={() => handleForgotPassword(false)}>Return</button><br />
      <label>Email Address</label><br />
      <input type="email" placeholder="Email Address" /><br />
      <button onClick={handleResetButton}>Reset Password</button>
    </div>
  );
}

export default ForgotenPassword;