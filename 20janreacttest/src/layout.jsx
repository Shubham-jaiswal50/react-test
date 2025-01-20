
import { Link,Outlet } from "react-router-dom";
const Layout=()=>{
    return(
        <>
        <Link to="home">Home |</Link>
        <Link to="question1">Question1 |</Link>
        <Link to="question2">Question2 |</Link>
        <Link to="question3">Question3 |</Link>
        <Link to="question4">Question4</Link>

        <Outlet/>
        </>
    )
}
export default Layout