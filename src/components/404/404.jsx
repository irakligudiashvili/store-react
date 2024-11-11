import { Link } from "react-router-dom";
import Header from "../partials/header/Header";

function PageNotFound(){
    return(
        <>
            <Header />
            <h1>Page not found</h1>
            <Link to='/'>Return to homepage</Link>
        </>
    )
}

export default PageNotFound;