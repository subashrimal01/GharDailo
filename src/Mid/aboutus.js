import { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';


class AboutUs extends Component {
    render() {
        return (

            <section id="new-arrivals" className="new-arrivals">
                <section className="ftco-section">
                    <div className="container">
                        <div class="row justify-content-center">
                            <div class="col-md-6 text-center mb-5">
                                <h2 class="heading-section">Contact Us</h2>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-10 col-md-12">
                                <div className="wrapper">
                                    <div className="row no-gutters">
                                        <div className="col-md-7 d-flex align-items-stretch">
                                            <div className="contact-wrap w-100 p-md-5 p-4">
                                                <h3 className="mb-4">Get in touch</h3>
                                                <div id="form-message-warning" className="mb-4" />
                                                <div id="form-message-success" className="mb-4">
                                                    Your message was sent, thank you!
                                                </div>
                                                <form method="POST" id="contactForm" name="contactForm">
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <input type="text" className="form-control" name="name" id="name" placeholder="Name" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <input type="email" className="form-control" name="email" id="email" placeholder="Email" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <div className="form-group">
                                                                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <div className="form-group">
                                                                <textarea name="message" className="form-control" id="message" cols={30} rows={7} placeholder="Message" defaultValue={""} />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <div className="form-group">
                                                                <input type="submit" defaultValue="Send Message" className="btn btn-primary" />
                                                                <div className="submitting" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="col-md-5 d-flex align-items-stretch">
                                            <div className="info-wrap bg-primary w-100 p-lg-5 p-4">
                                                <h3 className="mb-4 mt-md-4">Contact us</h3>
                                                <div className="dbox w-100 d-flex align-items-start">
                                                    <div className="icon d-flex align-items-center justify-content-center">
                                                        <span className="fa fa-map-marker" />
                                                    </div>
                                                    <div className="text pl-3 mt-4">
                                                        <p><span>Address: Kathmandu, Nepal</span></p>
                                                    </div>
                                                </div>
                                                <div className="dbox w-100 d-flex align-items-center">
                                                    <div className="icon d-flex align-items-center justify-content-center">
                                                        <span className="fa fa-phone" />
                                                    </div>
                                                    <div className="text pl-3">
                                                        <p><span>Phone:</span> <a href="tel://1234567920">+ 1235 2355 98</a></p>
                                                    </div>
                                                </div>
                                                <div className="dbox w-100 d-flex align-items-center">
                                                    <div className="icon d-flex align-items-center justify-content-center">
                                                        <span className="fa fa-paper-plane" />
                                                    </div>
                                                    <div className="text pl-3">
                                                        <p><span>Email:</span> <a href="mailto:info@roomfinder.com">info@roomfinder.com</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>

                <div>
                    <Map google={this.props.google}
                        zoom={14}
                        initialCenter={
                            {
                                lat: 27.714791523739223,
                                lng: 85.32738716911682
                            }
                        }
                    >
                        <Marker onClick={this.onMarkerClick}
                            name={'RoomFinder Office'} />

                        {/* <InfoWindow onClose={this.onInfoWindowClose}>
                            <div>
                                <h1>{this.state.selectedPlace.name}</h1>
                            </div>
                        </InfoWindow> */}
                    </Map>
                </div>

            </section>


        )
    }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyAgCpVu6vm54zUzcB1bVXRli2AIUozsXMM")
})(AboutUs)