import { useState } from "react";

const Create = () => {

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("Kevin");

    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form>
                <label>Blog title:</label>
                <input
                    required                     
                    type="text"
                    value={ title }
                    onChange={ (e) => setTitle(e.target.value) }
                />

                <label>Blog body:</label>
                <textarea
                    required
                    value={ body }
                    onChange={ (e) => setBody(e.target.value) }
                ></textarea>

                <label>Blog author</label>
                <select
                    value={ author }
                    onChange={ (e) => setAuthor(e.target.value)}
                >
                    <option value="Kevin">Kevin</option>
                    <option value="Chris">Chris</option>
                </select>

                <button>Add Blog</button>
            </form>
        </div>
     );
}
 
export default Create;