import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    
    const [blogs, setBlogs] = useState([
        { title:"My new website", body:"Lorem ipsum....", author:"Kevin", id: 1},
        { title:"My new set of teeth", body:"Lorem ipsum....", author:"Erick", id: 2},
        { title:"I am now a father", body:"Lorem ipsum....", author:"Owuor", id: 3},
        { title:"I got married", body:"Lorem ipsum....", author:"Majengo", id: 4}
    ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() => {
        console.log("Page rendered!")
    })

    return ( 
        <div className="home">
            <BlogList blogs={ blogs } title="All blogs" handleDelete={ handleDelete } />
            <BlogList blogs={ blogs.filter((blog) => blog.author === "Majengo") } title="Majengo's blogs" />
        </div>
    );
}
 
export default Home;