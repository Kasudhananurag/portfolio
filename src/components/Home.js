import Languages from "./Languages"
import img from "./assets/ico.png"
import "./Home.css";
import { Link } from "react-router-dom";
import Projects from "./Projects";
import Contact from './Contact';
import About from "./About";

export default function Home(props) {
    return <>
        <div className="container-fluid text-center imgdiv">
            <img src={img} alt="" className="photo" />
            <p className="imgwidth">
                <div className="wrapper">
                    <div className="static-text">I'm </div>
                    <ul className="dynamic-text">
                        <li><span>an Author</span></li>
                        <li><span>Designer</span></li>
                        <li><span>Develoepr</span></li>
                        <li><span>Freelancer</span></li>
                    </ul>
                </div>
            </p>
        </div>
        <br />
        <Languages/>
        <hr />
        <div className="container-fluid text-center imgdiv">
           <Link to="work" ><span className="homelink" >See my work here</span></Link>
        </div>
        <Projects/> <hr />
        <About/> <hr />
        <Contact />
    </>
}