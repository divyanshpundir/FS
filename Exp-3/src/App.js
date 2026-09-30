import { useState } from "react";

import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import AdminPage from "./components/AdminPage";
import EditorPage from "./components/EditorPage";
import ViewerPage from "./components/ViewerPage";
import Unauthorized from "./components/Unauthorized";
import ProtectedRoute from "./components/ProtectedRoute";

import "./styles/App.css";

import Login from "./components/Login";

import Dashboard from "./components/Dashboard";

import PostsPage from "./components/PostsPage";

import {

generateToken,

decodeToken

}

from "./utils/auth";

function App(){

const savedToken = localStorage.getItem("token");

const [user,setUser] = useState(

savedToken ?

decodeToken(savedToken)

:

null

);

const login = (username, role)=>{

const token = generateToken(username, role);

localStorage.setItem(

"token",

token

);

setUser(

decodeToken(token)

);

};

const logout = ()=>{

localStorage.removeItem("token");

setUser(null);

};

return (

<BrowserRouter>

<Routes>

<Route

path="/"

element={

user ?

<Dashboard

user={user}

onLogout={logout}

/>

:

<Login

onLogin={login}

/>

}

/>

/>

<Route

path="/posts"

element={

user ?

<PostsPage user={user}/>

:

<Login onLogin={login}/>

}

/>

<Route

path="/unauthorized"

element={<Unauthorized/>}

/>

</Routes>

</BrowserRouter>

);

}

export default App;