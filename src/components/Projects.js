import img from "./assets/weather.png"
import tic from "./assets/tictactoe.png"
import quotes from "./assets/quotes.png"
import tu from "./assets/tu.png"
import bmi from "./assets/bmi.png"
import calc from "./assets/calc.png"
import q from "./assets/quiz.png"
import bb from "./assets/bb.png"
import chatapp from "./assets/chatapp.png"
import signup from "./assets/signup.png"

export default function Projects(props) {
    return <>

        <div className="container-fluid text-center m-3">
            <h2>
                Have a look at all of my react based works!
            </h2>
        </div>

        <div className="col-lg-10 col-md-9 col-sm-12 col-xs-12 m-auto ml-5 text-center pro">
            <div className="row">
                <div className="col-lg-3 col-md-3 rounded bbb col-xs-6 m-5 com-sm-6 bg-light">
                    <a href="https://customquiz-6e8b1.web.app/" target={0}><img src={q} alt="" srcset="" height="300px" className="projectimg" /></a>
                    <p className="projectlink" >
                        A cutomised quiz tat can take data from data base and can be used as a test/game on the go.
                        &nbsp;&nbsp;&nbsp;&nbsp;<a href="https://customquiz-6e8b1.web.app/" target={0} className="ml-2" >Visit</a>
                    </p>
                </div>
                <div className="col-lg-3 col-md-3 rounded bbb col-xs-6 m-5 com-sm-6 bg-light">
                    <a href="https://bingo-bookbb.web.app" target={0}><img src={bb} alt="" srcset="" height="300px" className="projectimg" /></a>
                    <p className="projectlink" >
                        an online version of the slambook!!!
                        &nbsp;&nbsp;&nbsp;&nbsp;<a href="https://bingo-bookbb.web.app" target={0} className="ml-2" >Visit</a>
                    </p>
                </div>
                <div className="col-lg-3 col-md-3 rounded bbb col-xs-6 m-5 com-sm-6 bg-light">
                    <a href="https://varta-lapam.web.app/signup" target={0}><img src={chatapp} alt="" srcset="" height="300px" className="projectimg" /></a>
                    <p className="projectlink" >
                        A self made chatting application <b>(under development)</b>
                        &nbsp;&nbsp;&nbsp;&nbsp;<a href="https://varta-lapam.web.app/signup" target={0} className="ml-2" >Visit</a>
                    </p>
                </div>
            </div>
            <div className="row">
                
                <div className="col-lg-3 col-md-3 m-auto rounded bbb col-xs-6 m-5 com-sm-6 bg-light">
                    <a href="https://signuppage-f2bcb.web.app/" target={0}><img src={signup} alt="" srcset="" height="300px" className="projectimg" /></a>
                    <p className="projectlink" >
                        A ready to be used anywhere signup page, just import the component, connect with backend and there you go!!! 
                        &nbsp;&nbsp;&nbsp;&nbsp;<a href="https://signuppage-f2bcb.web.app/" target={0} className="ml-2" >Visit</a>
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3 col-md-3 rounded bbb col-xs-6 m-5 com-sm-6 bg-light">
                    <a href="https://weatherapp-90d85.web.app/" target={0}><img src={img} alt="" srcset="" height="300px" className="projectimg" /></a>
                    <p className="projectlink" >
                        A web application that asks for location and displays the current weather at that location using a Weather API
                        &nbsp;&nbsp;&nbsp;&nbsp;<a href="https://weatherapp-90d85.web.app/" target={0} className="ml-2" >Visit</a>
                    </p>
                </div>
                <div className="col-lg-3 col-md-3 rounded bbb col-xs-6 m-5 com-sm-6 bg-light">
                    <a href="https://tictactoe-4856d.web.app/" target={0}><img src={tic} alt="" srcset="" height="300px" className="projectimg" /></a>
                    <p className="projectlink" >
                        A react absed tic tac toe game. Enjoy!
                        &nbsp;&nbsp;&nbsp;&nbsp;<a href="https://tictactoe-4856d.web.app/" target={0} className="ml-2" >Visit</a>
                    </p>
                </div>
                <div className="col-lg-3 col-md-3 rounded bbb col-xs-6 m-5 com-sm-6 bg-light">
                    <a href="https://quotes-db49f.web.app/quotes" target={0}><img src={quotes} alt="" srcset="" height="300px" className="projectimg" /></a>
                    <p className="projectlink" >
                        A fun quotes application! Get your name and quote recorded in the leagues of great thinkers!!
                        &nbsp;&nbsp;&nbsp;&nbsp;<a href="https://quotes-db49f.web.app/quotes" target={0} className="ml-2" >Visit</a>
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3 col-md-3 rounded bbb col-xs-6 m-5 com-sm-6 bg-light">
                    <a href="https://textutility-4d7ab.web.app/" target={0}><img src={tu} alt="" srcset="" height="300px" className="projectimg" /></a>
                    <p className="projectlink" >
                        A text based web application that provides with various functionalities that might come in handy next time you're typing an online answer or an essay.
                        &nbsp;&nbsp;&nbsp;&nbsp;<a href="https://textutility-4d7ab.web.app/" target={0} className="ml-2" >Visit</a>
                    </p>
                </div>
                <div className="col-lg-3 col-md-3 rounded bbb col-xs-6 m-5 com-sm-6 bg-light">
                    <a href="https://bmicalculator-51c8f.web.app/" target={0}><img src={bmi} alt="" srcset="" height="300px" className="projectimg" /></a>
                    <p className="projectlink" >
                        A web application that asks for user's height in metres and weight in Kilograms and then returns with BMI
                        &nbsp;&nbsp;&nbsp;&nbsp;<a href="https://bmicalculator-51c8f.web.app/" target={0} className="ml-2" >Visit</a>
                    </p>
                </div>
                <div className="col-lg-3 col-md-3 rounded bbb col-xs-6 m-5 com-sm-6 bg-light">
                    <a href="https://basic-calculator-4bd1c.web.app/" target={0}><img src={calc} alt="" srcset="" height="300px" className="projectimg" /></a>
                    <p className="projectlink" >
                        A basic calculator ,ade entirely using react js and CSS
                        &nbsp;&nbsp;&nbsp;&nbsp;<a href="https://basic-calculator-4bd1c.web.app/" target={0} className="ml-2" >Visit</a>
                    </p>
                </div>
            </div>
            
        </div>

    </>
}