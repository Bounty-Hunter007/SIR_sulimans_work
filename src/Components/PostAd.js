import { useState } from "react";
import { postAd } from "../config/firebasic";

function PostAd() {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [price, setPrice] = useState();
  const [file, setFile] = useState();
  const [loading, setLoading] = useState(false);

  async function addData() {
    setLoading(true);
    await postAd({ title, description, price, file: file[0] });
    setLoading(false);
  }

  return (
    <div className="card-stylish" style={{ display: "flex", flexDirection: "column" }}>
      <h1>Post Ad</h1>
      <input
      style={{"height":"30px"}}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Write your title here"
      />
      <br/>
      <input 
      style={{"height":"30px"}}

        onChange={(e) => setDescription(e.target.value)}
        placeholder="Write your description here"
      />
      <br/>

      <input
      style={{"height":"30px"}}

        onChange={(e) => setPrice(e.target.value)}
        placeholder="Write your price here"
        type="number"
/>
<br/>

      <input 
      style={{"height":"30px"}}
      
      onChange={(e) => setFile(e.target.files)} type="file" />
      <br/>

      {loading ? (
        <img src="https://i.gifer.com/ZKZg.gif" width="20" />
      ) : (
        <button className="btn-style" onClick={addData}>Submit</button>
      )}
    </div>
  );
}
export default PostAd;
