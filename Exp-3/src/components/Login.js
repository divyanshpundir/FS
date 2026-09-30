import { useState } from "react";

function Login({ onLogin }) {

    const [username, setUsername] = useState("");

    const [password, setPassword] = useState("");
    
    const [role, setRole] = useState("Viewer");

  const handleLogin = () => {

    if (
        username === "admin" &&
        password === "admin123" &&
        role === "Admin"
    ) {

        onLogin(username, role);

    }

    else if (
        username === "editor" &&
        password === "editor123" &&
        role === "Editor"
    ) {

        onLogin(username, role);

    }

    else if (
        username === "viewer" &&
        password === "viewer123" &&
        role === "Viewer"
    ) {

        onLogin(username, role);

    }

    else {

        alert("Invalid Username, Password or Role");

    }

};

    return (

        <div className="container">

            <h2>JWT Login</h2>

            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e)=>setUsername(e.target.value)}
            />

            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
            />

            <select
    value={role}
    onChange={(e) => setRole(e.target.value)}
>
    <option>Admin</option>
    <option>Editor</option>
    <option>Viewer</option>
</select>


            <button onClick={handleLogin}>
                Login
            </button>

        </div>

    );

}

export default Login;