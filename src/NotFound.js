import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h1>404</h1>
            <h1>PAGE NOT FOUND</h1>
            <p>The page your looking for does not exist</p>

            <br />
            
            <b><Link to="/">Back to the homepage ...</Link></b>
        </div>
     );
}
 
export default NotFound;