import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { getDatabase, ref, set } from "firebase/database";
import { app } from "./firebase";
import { useState } from "react"

const db = getDatabase(app);


export default function Contact(props) {

    const [name, setName] = useState();
    const [mail, setMail] = useState();
    const [message, setMessage] = useState();
    const [msg, setMsg] = useState();
    const [error, setError] = useState(false)

    const putData = (e) => {
        e.preventDefault();
        // alert(name.length)
        if (name.length > 0 && mail.length > 0 && message.length > 0) {
            // alert("reached ehre insifde if");
            setError(true)
            setTimeout(() => {
                setError(false)
            }, 2000);
            set(ref(db, `contact/${name}`), {
                name: name,
                email: mail,
                message: message
            }).then(()=>setMsg("Form submission successfull, we will reach you shortly")).catch((err)=>setMsg("some error occurred"));
        }
        else if (name.length === 0 || mail.length === 0 || message.length === 0) {
            // alert("reached ehre in else");
            setError(true);setMsg("Please fill all fields")
            setTimeout(() => {
                setError(false)
            }, 2000);
            
        }
    };

    return <>
        <div className="col-lg-5 col-md-5 col-xm-10 col-xs-10 m-auto my-5 shadow-lg p-5 rounded " style={{ backgroundColor: "rgba(195, 169, 215, 0.895)" }} >
            <div className="row">
                <h1>Get in touch!</h1>
            </div>
            { error ? <div className="container-fluid bg-primary text-white font-bold">
                        {msg}
                </div>:<div className="container-fluid bg-primary text-white font-bold">
                        {msg}
                </div> }
            <form>
                <div class="form-group my-3">
                    <label for="exampleInputEmail1">Name:</label>
                    <input type="text" minLength={3} class="form-control" onChange={(e) => { setName(e.target.value) }} placeholder="Enter email" required />
                </div>
                <div class="form-group my-3">
                    <label for="exampleInputEmail1">Email address:</label>
                    <input
                        onChange={(e) => { setMail(e.target.value) }}
                        type="email" class="form-control" placeholder="Enter email" required />
                </div>
                <div class="form-group my-3">
                    <label for="exampleInputmessage">Your Message:</label>
                    <input
                        onChange={(e) => { setMessage(e.target.value) }}
                        type="text" class="form-control"  placeholder="Your Message" required/>
                </div>
                <button type="submit" onClick={putData} class="btn my-2 btn-primary">Submit</button>
            </form>

            <div className="row text-center" style={{ backgroundColor: "rgba(195, 169, 215, 0.895)" }} >
                <p>
                    <small>
                        You can also connect via
                    </small>
                </p>
                <p>
                    <a href="https://www.linkedin.com/in/kasudhananurag/" target={0}>
                        <FaLinkedin />
                    </a>
                    <a href="https://www.twitter.com" className="mx-2" target={0}>
                        <FaTwitter />
                    </a>
                    <a href="https://www.instagram.com/kasaudhankikalam/" className="mx-2" target={0}>
                        <FaInstagram />
                    </a>
                </p>
            </div>
        </div>

    </>
}