import Languages from "./Languages"

export default function About(props) {
    return <>
        {/* <Languages/> */}
        <br />
        <div className="container-fluid m-auto text-center">
            <h3>About me</h3>
        </div>
        <div className="col-lg-10 col-md-10 col-xs-12 col-sm-12 m-auto rounded my-5 shadow-lg">

            <div class="accordion accordion-flush rounded shadow-lgx" id="accordionFlushExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingOne">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            <h1>About me</h1>
                        </button>
                    </h2>
                    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body abouttext">
                            <ul>
                                <li>Learner, Web Developer, Photographer, Author!</li>
                                <li>IN other words jack of all trades, master of a few!</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingTwo">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            <h1>Education</h1>
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body abouttext">
                            <ul>
                                <li>I am a BCA graduate.</li>
                                <li>I qualified my graduation in 2020 with an approx aggregate of 84%</li>
                                <li>I have started the journey of self learning ReactJs from November 2022</li>
                            </ul>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingThree">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                <h1>Interests</h1>
                            </button>
                        </h2>
                        <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body abouttext">
                                <ul>
                                    <li>
                                        I have a keen interest in coding and learning new technologies.
                                    </li>
                                    <li>
                                        Apart from coding I take pleasure in reading books, writing poems.
                                    </li>
                                    <li>
                                        I also am greatly interested in photography and music!
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}