import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [isError, setIsError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch("http://localhost:8000/blogs")
                .then(res => {
                    console.log(res);
                    if( !res.ok ){
                        throw Error("Could not fetch data for that resource");
                    }
                    return res.json();
                })
                .then(data => {
                    setBlogs(data);
                    setIsPending(false);
                    setIsError(null);
                    
                })
                .catch(err => {
                    setIsError(err.message);
                    setIsPending(false);
                });
        }, 1000);
    }, []);

    return ( 
        <div className="home">
            { isPending && <div>Loading ...</div>}
            { isError && <div>{ isError }</div>}
            { blogs && <BlogList blogs={blogs} title="All blogs" /> }
        </div>
    );
}
 
export default Home;