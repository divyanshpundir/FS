import React, { useState } from "react";
import "./App.css";


function App() {
  const [platform, setPlatform] = useState("Twitter");
const [post, setPost] = useState("");
const [drafts, setDrafts] = useState([]);
const limits = {
  Twitter: 280,
  Instagram: 2200,
  LinkedIn: 3000
};
const characterCount = post.length;

const isValid = characterCount <= limits[platform];

const handlePublish = () => {
  alert("Post Published Successfully!");
};

const saveDraft = () => {

  if(post.trim() === ""){
    alert("Please write something before saving.");
    return;
  }

  const newDraft = {
    id: Date.now(),
    platform: platform,
    content: post
  };

  setDrafts([...drafts, newDraft]);

  alert("Draft Saved Successfully!");

  setPost("");
};

const deleteDraft = (id) => {

  const updatedDrafts = drafts.filter((draft) => draft.id !== id);

  setDrafts(updatedDrafts);

};

const editDraft = (draft) => {

  setPlatform(draft.platform);

  setPost(draft.content);

  deleteDraft(draft.id);

};

 return (
  <div className="container">
    <h2>Social Media Post Composer</h2>
    <label>Select Platform:</label>

<br /><br />

<select
  value={platform}
  onChange={(e) => setPlatform(e.target.value)}
>
  <option>Twitter</option>
  <option>Instagram</option>
  <option>LinkedIn</option>
</select>

<br /><br />

<label>Write Your Post:</label>

<br /><br />

<textarea
  rows="8"
  placeholder="Type your post here..."
  value={post}
  onChange={(e) => setPost(e.target.value)}
></textarea>

<br />

<p>
  Characters: {characterCount} / {limits[platform]}
</p>

{
  isValid ? (
    <p style={{ color: "green" }}>
      ✅ Post is valid
    </p>
  ) : (
    <p style={{ color: "red" }}>
      ❌ Character limit exceeded
    </p>
  )
}

<div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
  <button
    disabled={!isValid}
    onClick={handlePublish}
  >
    Publish Post
  </button>

  <button onClick={saveDraft}>
    Save Draft
  </button>
</div>
<hr />

<h3>Saved Drafts</h3>

{
  drafts.length === 0 ? (
    <p>No drafts available.</p>
  ) : (
    drafts.map((draft) => (
  <div className="draft-card" key={draft.id}>
        <p><b>Platform:</b> {draft.platform}</p>

        <p><b>Content:</b> {draft.content}</p>

   <div style={{marginTop:"12px"}}>

<button
onClick={() => editDraft(draft)}
style={{background:"#28a745"}}
>
Edit
</button>

<button
onClick={() => deleteDraft(draft.id)}
style={{background:"#dc3545"}}
>
Delete
</button>

</div>
      </div>
    ))
  )
}

  </div>
);
}

export default App;