import { Link } from "react-router-dom";
const NotFound = () => {
    return ( <>
        <h1>Not Found</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis odio distinctio dolore reiciendis aperiam, amet expedita similique, rerum vitae, facilis ipsum dolores. Dolore quod molestiae iste voluptates? Ipsam distinctio veritatis similique fuga iste quaerat, voluptatem vel in nihil recusandae dolore.</p>
        <p>Return to <Link to="/home">Home</Link>  page</p>
        
    </> );
}
 
export default NotFound;