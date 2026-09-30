import { Link } from "react-router-dom";

function Dashboard({ user, onLogout }) {
    const sendProtectedRequest = () => {

    const token = localStorage.getItem("token");

    console.log("Authorization: Bearer " + token);

    alert("Protected Request Sent Successfully!");

};

    return (

        <div className="container">

            <h2>Dashboard</h2>

            <h3>Welcome {user.user}</h3>

            <p>

<b>Role:</b> {user.role}

</p>

            <p>

                Login Time :

                {user.loginTime}

            </p>

{
(user.role === "Admin" ||
 user.role === "Editor" ||
 user.role === "Viewer") && (

<Link to="/posts">

<button style={{ marginBottom: "15px" }}>

Open Posts

</button>

</Link>

)
}

            <button
    onClick={sendProtectedRequest}
    style={{marginBottom:"10px"}}
>
    Send Protected Request
</button>

            <button onClick={onLogout}>

                Logout

            </button>

        </div>

    );

}

export default Dashboard;