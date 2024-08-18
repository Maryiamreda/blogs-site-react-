import { useState, useEffect } from "react";
import BlogList from "./BlogList";


const Home = () => {
    const [blogs, setBlogs] = useState(null
        //     [
        //     { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        //     { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        //     { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
        // ]
    )
    const [name, setName] = useState('my name is maryiam');
    const handleClick = () => {
        setName('hey there !')
    }
    const [isPending, setIsPending] = useState(true);


    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id);
    //     setBlogs(newBlogs);
    // }

    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8000/blogs').then(
                res => {
                    return res.json();
                }
            ).then(data => {
                setBlogs(data);
                setIsPending(false);
            })
        }, 1000)


    }, []);
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