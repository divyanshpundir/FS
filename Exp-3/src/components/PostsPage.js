import { useState } from "react";

function PostsPage({ user }) {

    const [posts, setPosts] = useState([
        {
            id: 1,
            platform: "Twitter",
            content: "Welcome to RBAC Demo"
        },
        {
            id: 2,
            platform: "LinkedIn",
            content: "React JWT Authentication"
        }
    ]);

    const [newPost, setNewPost] = useState("");

    const addPost = () => {

        if(newPost.trim()==="") return;

        setPosts([
            ...posts,
            {
                id: Date.now(),
                platform: "Twitter",
                content: newPost
            }
        ]);

        setNewPost("");

    };

    const deletePost = (id)=>{

        setPosts(posts.filter(post=>post.id!==id));

    };

    const editPost=(id)=>{

        const text=prompt(

            "Edit Post"

        );

        if(!text) return;

        setPosts(

            posts.map(post=>

                post.id===id

                ?

                {...post,content:text}

                :

                post

            )

        );

    };

    return(

<div className="container">

<h2>Posts</h2>

{
(user.role==="Admin" ||

user.role==="Editor")

&&

<div>

<input

type="text"

placeholder="Write Post"

value={newPost}

onChange={(e)=>setNewPost(e.target.value)}

/>

<button

onClick={addPost}

>

Create Post

</button>

</div>

}

<hr/>

{

posts.map(post=>(

<div

key={post.id}

className="card"

>

<p>

<b>Platform:</b>

{post.platform}

</p>

<p>

<b>Content:</b>

{post.content}

</p>

{

(user.role==="Admin" ||

user.role==="Editor")

&&

<button

onClick={()=>editPost(post.id)}

style={{marginRight:"10px"}}

>

Edit

</button>

}

{

user.role==="Admin"

&&

<button

onClick={()=>deletePost(post.id)}

style={{background:"red"}}

>

Delete

</button>

}

</div>

))

}

</div>

);

}

export default PostsPage;