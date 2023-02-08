
import {BrowserRouter,Link,Route,Routes} from "react-router-dom";
import Home from "./home";
import Posts from "./Posts";
import About from "./about";

const Navbar= ()=>{
    return(
<div>
    <BrowserRouter>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link to="https://github.com/MoAlshehab/react-leren-code-/tree/Develop" className="navbar-brand">Navbar</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/"className="nav-link active" >Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/post" className="nav-link" >Post</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link" >About</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                               aria-expanded="false">
                                Dropdown
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li>
                                    <hr className="dropdown-divider"/>
                                </li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled">Disabled</a>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>

        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/post" element={<Posts/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/https://github.com/MoAlshehab/react-leren-code-/tree/Develop" element={<Navbar/>}></Route>




        </Routes>
                                </BrowserRouter>
                                </div>

    );




}

export default Navbar;