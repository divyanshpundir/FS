import "./styles/App.css";

import PostForm from "./components/PostForm";

import PostList from "./components/PostList";

function App(){

return(

<div className="container">

<h1>Redux Post Manager</h1>

<PostForm/>

<hr/>

<PostList/>

</div>

);

}

export default App;