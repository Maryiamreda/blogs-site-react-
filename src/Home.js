import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";


const Home = () => {

    const [name, setName] = useState('my name is maryiam');
    const handleClick = () => {
        setName('hey there !')
    }

    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id);
    //     setBlogs(newBlogs);
    // }
    const { data: blogs, isPending } = useFetch('http://localhost:8000/blogs');

    return (

        <div className="home">
            <h2>Home Page</h2>
            <p>{name}</p>
            <button onClick={handleClick} style={{
                color: "white",
                backgroundColor: "#f1356d",
                borderRadius: "8px"
            }}> Click me </button>
            {isPending && <div style={{ paddingTop: "20px" }}>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs!"
            //  handleDelete={handleDelete}
            />
            }
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Marios's Blogs" handleDelete={handleDelete} />  */}
        </div>


    );
}

export default Home;