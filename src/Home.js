import { useState } from "react";

const Home = () => {
    
    const [blogs, setBlogs] = useState([
        { title:"My new website", body:"Lorem ipsum....", author:"Kevin", id: 1},
        { title:"My new set of teeth", body:"Lorem ipsum....", author:"Erick", id: 2},
        { title:"I am now a father", body:"Lorem ipsum....", author:"Owuor", id: 3},
        { title:"I got married", body:"Lorem ipsum....", author:"Majengo", id: 4}
    ]);

    return ( 
        <div className="home">
            {
                blogs.map((blog) => (
                    <div className="blog-preview" key={ blog.id }>
                        <h2>{ blog.title }</h2>
                        <p>Written by <b>{ blog.author }</b></p>
                        <br />
                    </div>
                ))
            }
        </div>
     );
}
 
export default Home;