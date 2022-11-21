import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import Footer from "./Footer"

export default function Contact(props) {
    return <>
        <div className="col-lg-5 col-md-5 col-xm-10 col-xs-10 m-auto my-5 shadow-lg p-5 rounded " style={ { backgroundColor:"rgba(195, 169, 215, 0.895)" } } >
            <div className="row">
                <h1>Get in touch!</h1>
            </div>
            <form>
            <div class="form-group my-3">
                    <label for="exampleInputEmail1">Name:</label>
                    <input type="text" required class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                </div>
                <div class="form-group my-3">
                    <label for="exampleInputEmail1">Email address:</label>
                    <input type="email" required class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                </div>
                <div class="form-group my-3">
                    <label for="exampleInputmessage">Your Message:</label>
                    <input type="text" required class="form-control" id="exampleInputPassword1" placeholder="Your Message"/>
                </div>
                <button type="submit" class="btn my-2 btn-primary">Submit</button>
            </form>

            <div className="row text-center" style={ { backgroundColor:"rgba(195, 169, 215, 0.895)" } } >
                <p>
                    <small>
                        You can also connect via
                    </small>
                </p>
                <p>
                    <a href="https://www.linkedin.com/in/kasudhananurag/" target={0}>
                        <FaLinkedin/>
                    </a>
                    <a href="https://www.twitter.com" className="mx-2" target={0}>
                        <FaTwitter/>
                    </a>
                    <a href="https://www.instagram.com/kasaudhankikalam/" className="mx-2" target={0}>
                        <FaInstagram/>
                    </a>
                </p>
            </div>
        </div>
       
    </>
}