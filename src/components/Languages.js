import c3 from "./assets/css3.png";
import h5 from "./assets/html5.png";
import b from "./assets/bootstrap.png";
import rjs from "./assets/react.png";
import jq from "./assets/jquery.png";
import frbs from "./assets/firebase.png";

export default function Languages() {
    return <>
        <hr className="shadow"/>
        <div className="col-lg-5 col-md-7 my-3 col-xs-12 col-sm-12 m-auto text-center">
            <div className="row">
                <h3>Technologies I use in my projects</h3> <br /><br /> <br />
            </div>
            <br />
            <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 text-center">
                    <img src={h5} alt="" height="50px" width="50px" className="langicon" />
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 text-center">
                    <img src={c3} alt="" height="50px" width="50px" className="langicon" />
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 text-center">
                    <img src={b} alt="" height="50px" width="50px" className="langicon" />
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 text-center">
                    <img src={rjs} alt="" height="50px" width="50px" className="langicon" />
                </div>
            </div><br /><hr className="somehr" color="#7B3F00"/>
            <div className="row">
                <div className="col-2">&nbsp;</div>
                <div className="col-4">
                    <img src={jq} alt="" height="50px" width="50px" className="langicon" />
                </div>
                <div className="col-4">
                    <img src={frbs} alt="" height="50px" width="50px" className="langicon" />
                </div>
                <div className="col-2">&nbsp;</div>
            </div>
        </div>
        &nbsp; <br />
    </>
}