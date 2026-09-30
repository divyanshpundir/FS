import { useSelector, useDispatch } from "react-redux";
import React, { useMemo } from "react";
import {
    selectTotalPosts,
    selectTwitterPosts,
    selectInstagramPosts,
    selectLinkedInPosts
} from "../selectors/postSelectors";

import {
  deletePost,
  updatePost
} from "../slices/postSlice";


function PostList(){

const posts = useSelector(

(state)=>state.posts.posts

);

const totalPosts = useSelector(selectTotalPosts);

const twitterPosts = useSelector(selectTwitterPosts);

const instagramPosts = useSelector(selectInstagramPosts);


const linkedInPosts = useMemo(() => {
    console.log("Filtering LinkedIn Posts...");
    return posts.filter(post => post.platform === "LinkedIn");
}, [posts]);
const dispatch = useDispatch();

const editPost = (post)=>{

const newContent = prompt(

"Edit Post",

post.content

);

if(newContent){

dispatch(

updatePost({

id:post.id,

content:newContent

})

);

}

};

return(

<div>

<h3>All Posts</h3>

<p>Total Posts : {totalPosts}</p>

<p>Twitter Posts : {twitterPosts.length}</p>

<p>Instagram Posts : {instagramPosts.length}</p>

<p>LinkedIn Posts : {linkedInPosts.length}</p>

{
linkedInPosts.length > 0 && (

<div>

<h4>LinkedIn Posts Only</h4>

{
linkedInPosts.map((post) => (

<p key={post.id}>{post.content}</p>

))
}

</div>

)
}

{

posts.length===0 ?

(

<p>No Posts Yet</p>

)

:

(

posts.map((post)=>(

<div

className="card"

key={post.id}

>

<p>

<b>Platform:</b>

{post.platform}

</p>

<p>

<b>Content:</b>

{post.content}

</p><button

onClick={()=>editPost(post)}

style={{marginRight:"10px"}}

>

Edit

</button>


<button

onClick={() => dispatch(deletePost(post.id))}

style={{background:"red"}}

>

Delete

</button>

</div>

))

)

}

</div>

);

}



export default React.memo(PostList);