import { Component } from "react";

class PopularProducts extends Component {
    render() {
        return (
            <section id="populer-products" className="populer-products">
                <div className="container">
                    <div className="populer-products-content">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="single-populer-products">
                                    <div className="single-populer-product-img mt40">
                                        <img src="https://a.hwstatic.com/image/upload/f_auto,q_auto,t_30/v1/propertyimages/2/294322/vax1jk6wpow1s4ebt0zn" alt="populer-products images" />
                                    </div>
                                    <h2><a href="#">Get Room of Your Choice</a></h2>
                                    <div className="single-populer-products-para">
                                        <p>Nemo enim ipsam voluptatem quia volu ptas sit asperna aut odit aut fugit.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="single-populer-products">
                                    <div className="single-inner-populer-products">
                                        <div className="row">
                                            <div className="col-md-4 col-sm-12">
                                                <div className="single-inner-populer-product-img">
                                                    <img src="https://q-xx.bstatic.com/xdata/images/hotel/max500/189248703.jpg?k=f0d3b2aff16ed74e80475a5bcb8ad32801077a6c9b6f41aefd8748fefab650b1&o=" alt="populer-products images" />
                                                </div>
                                            </div>
                                            <div className="col-md-8 col-sm-12">
                                                <div className="single-inner-populer-product-txt">
                                                    <h2>
                                                        <a href="#">
                                                            <span>Get Comfortable and Spacious Room</span>
                                                        </a>
                                                    </h2>
                                                    <p>
                                                        Edi ut perspiciatis unde omnis iste natusina error sit voluptatem accusantium doloret mque laudantium, totam rem aperiam.
                                                    </p>
                                                    <div className="populer-products-price">
                                                        <h4>Sales Start from <span>$99.00</span></h4>
                                                    </div>
                                                    <button className="btn-cart welcome-add-cart populer-products-btn" onclick="window.location.href='#'">
                                                        discover more
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="single-populer-products">
                                    <div className="single-populer-products">
                                        <div className="single-populer-product-img">
                                            <img src="https://media-cdn.tripadvisor.com/media/photo-m/1280/1b/94/c4/f0/getlstd-property-photo.jpg" alt="populer-products images" />
                                        </div>
                                        <h2><a href="#">Search As per your Location</a></h2>
                                        <div className="single-populer-products-para">
                                            <p>Nemo enim ipsam voluptatem quia volu ptas sit asperna aut odit aut fugit.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        )
    }
}

export default PopularProducts;