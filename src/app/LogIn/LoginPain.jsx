import React, { useState } from "react";

function LoginPain({ handleForgotPassword }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLoginButton = () => {
        console.log("Login button clicked:", username, password);

        // Need to add proper validation logic
        if (username === "admin" && password === "admin") {
            console.log("Login successful");
            // Perform login action here (e.g., redirect, set auth state)
        } else {
            console.log("Invalid credentials");
            //Add error handling logic here
        }
    };

    return (
        <div className="LoginPain">
            <h1>Login to your account</h1>

            <label>Username</label>
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />

            <label>Password</label>
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />

            <button onClick={handleLoginButton}>Login</button>

            <br />
            <a href="#" onClick={() => handleForgotPassword(true)}>Forgot Password?</a>

            <br />
            <label>Don't have an account? </label>
            <a href="#">Signup Now!</a>
        </div>
    );
}

export default LoginPain;
