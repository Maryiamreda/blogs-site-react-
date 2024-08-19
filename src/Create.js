import { useState } from "react";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [auther, setAuther] = useState('mario');
    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, auther };
        console.log(blog)
    }
    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title</label>
                <input type="text" required value={title}
                    onChange={(e) => setTitle(e.target.value)}

                ></input>
                <label>Blog body</label>
                <textarea required value={body}
                    onChange={(e) => setBody(e.target.value)}></textarea>
                <label>Blog auther</label>
                <select
                    value={auther}
                    onChange={(e) => setAuther(e.target.value)}
                >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>

                </select>
                <button>Add Blog</button>
                <p>{title}</p>
                <p>{body}</p>
                <p>{auther}</p>

            </form>
        </div>
    );
}

export default Create;