import { useQuery, useMutation } from "@tanstack/react-query";
import { wait } from "@testing-library/user-event/dist/utils";


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
const BlogList1 = () => {

    // const queryClient = useQueryClient(); //this return the new blog t hat we created

    // const BlogsQuery = useQuery({
    //     queryKey: ["blogs"],
    //     queryFn: () => wait(1000).then(() => [...Blogs])
    // })
    // if (BlogsQuery.isLoading) return <h1>loading....</h1>
    // if (BlogsQuery.isError) return <h1>Error fetching blogs</h1>;






    return (<div className="blog-details">

        {/* {BlogsQuery.data.map(blog => (
            <div key={blog.id}>{blog.title} Written by {blog.author}</div>
        ))} */}

    </div>);
}

export default BlogList1;