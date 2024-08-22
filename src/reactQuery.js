import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { wait } from "@testing-library/user-event/dist/utils";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Blogs = [{
    id: 1
    ,
    title: "My First Blog",
    author: "mario",
},
{
    id: 2,
    title: "Opening Party!",
    author: "yoshi"
},]





const ReactQuery = () => {
    const queryClient = useQueryClient(); //this return the new blog t hat we created 

    const BlogsQuery = useQuery({
        queryKey: ["blogs"],
        queryFn: () => wait(1000).then(() => [...Blogs])
    })


    const newBlogMutation = useMutation({
        mutationFn: title => {
            return wait(1000).then(() => Blogs.push({
                id: crypto.randomUUID() //pushing & creating random id
                , title // as long as a title that is being pushed into the function
            }))
        },
        onSuccess: () => {
            queryClient.invalidateQueries(["blogs"]) //when we successfully create new post we invalidate our old posts 
        }
    })

    if (BlogsQuery.isLoading) return <h1>loading....</h1>
    if (BlogsQuery.isError) return <h1>Error fetching blogs</h1>;



    return (
        <div>
            <nav className="navbar">
                <Link to="/blogList1">blogList 1 </Link>

                <Link to="/blogList2">blogList 2</Link>


            </nav>
            {BlogsQuery.data.map(blog => (
                <div key={blog.id}>{blog.title} Written by {blog.author}</div>
            ))}

            <button
                disabled={newBlogMutation.isLoading}
                onClick={() => newBlogMutation.mutate('New Blog')} style={{
                    color: "white",
                    backgroundColor: "#f1356d",
                    borderRadius: "8px",
                    borderStyle: "none"
                }}>
                Add New
            </button>
        </div>
    );
}



export default ReactQuery
    ;