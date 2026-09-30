import React, { useState, useMemo } from "react";

import { useDispatch } from "react-redux";

import { addPost } from "../slices/postSlice";


function PostForm() {


    const dispatch = useDispatch();
    

    const [platform, setPlatform] = useState("Twitter");

    const [content, setContent] = useState("");
    const limits = {
    Twitter: 280,
    Instagram: 2200,
    LinkedIn: 3000
};



const isValid = content.length <= limits[platform];
 const characterCount = useMemo(() => {

    console.log("useMemo Executed");

    return content.length;

}, [content]);

    const handleSubmit = () => {

        if(content.trim()===""){

            alert("Write a post");

            return;

        }

        dispatch(

          

            addPost({

                id:Date.now(),

                platform,

                content

            })

        );

        setContent("");

    };

    return(

        <div>

            <h3>Create Post</h3>

            <select

            value={platform}

            onChange={(e)=>setPlatform(e.target.value)}

            >

                <option>Twitter</option>

                <option>Instagram</option>

                <option>LinkedIn</option>

            </select>

            <input

            type="text"

            placeholder="Write post..."

            value={content}

            onChange={(e)=>setContent(e.target.value)}

            />
<p>
    Characters : {characterCount} / {limits[platform]}
</p>


{
!isValid &&

<p style={{color:"red"}}>

Character limit exceeded!

</p>

}

        <button
    onClick={handleSubmit}
    disabled={!isValid}
>
    Add Post
</button>

        </div>

    );

}

export default PostForm;