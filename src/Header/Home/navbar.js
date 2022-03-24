import { Component } from "react";

class Navbar extends Component {
    render() {
        return (
            <header id="home" className="welcome-hero">
                <div id="header-carousel" className="carousel slide carousel-fade" data-ride="carousel">
                    {/*/.carousel-indicator */}
                    <ol className="carousel-indicators">
                        <li data-target="#header-carousel" data-slide-to={0} className="active"><span className="small-circle" /></li>
                        <li data-target="#header-carousel" data-slide-to={1}><span className="small-circle" /></li>
                        <li data-target="#header-carousel" data-slide-to={2}><span className="small-circle" /></li>
                    </ol>{/* /ol*/}
                    {/*/.carousel-indicator */}
                    {/*/.carousel-inner */}
                    <div className="carousel-inner" role="listbox">
                        {/* .item */}
                        <div className="item active">
                            <div className="single-slide-item slide1">
                                <div className="container">
                                    <div className="welcome-hero-content">
                                        <div className="row">
                                            <div className="col-sm-4">
                                                <div className="single-welcome-hero">
                                                    <div className="welcome-hero-txt">
                                                        <h2>Get Comfortable Living</h2>
                                                        <p>
                                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiuiana smod tempor  ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
                                                        </p>
                                                        <div className="packages-price">
                                                            <p>
                                                                $ 199.00
                                                                <del>$ 299.00</del>
                                                            </p>
                                                        </div>
                                                        
                                                        <button className="btn-cart welcome-add-cart welcome-more-info" onclick="window.location.href='#'">
                                                            more info
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-8">
                                                <div className="single-welcome-hero">
                                                    <div className="welcome-hero-img">
                                                        <img src="https://i.ytimg.com/vi/mEfrBBW2i7g/maxresdefault.jpg" alt="slider image" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="single-slide-item slide2">
                                <div className="container">
                                    <div className="welcome-hero-content">
                                        <div className="row">
                                            <div className="col-sm-4">
                                                <div className="single-welcome-hero">
                                                    <div className="welcome-hero-txt">
                                                        <h2>Healthy Environment</h2>
                                                        <p>
                                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiuiana smod tempor  ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
                                                        </p>
                                                        <div className="packages-price">
                                                            <p>
                                                                $ 199.00
                                                                <del>$ 299.00</del>
                                                            </p>
                                                        </div>
                                                        
                                                        <button className="btn-cart welcome-add-cart welcome-more-info" onclick="window.location.href='#'">
                                                            more info
                                                        </button>
                                                    </div>{/*/.welcome-hero-txt*/}
                                                </div>{/*/.single-welcome-hero*/}
                                            </div>{/*/.col*/}
                                            <div className="col-sm-8">
                                                <div className="single-welcome-hero">
                                                    <div className="welcome-hero-img">
                                                        <img src="https://www.homestaysnepal.com/files/groups/81624685_1414676658710134_7867061398168141824_n.jpg" alt="slider image" />
                                                    </div>{/*/.welcome-hero-txt*/}
                                                </div>{/*/.single-welcome-hero*/}
                                            </div>{/*/.col*/}
                                        </div>{/*/.row*/}
                                    </div>{/*/.welcome-hero-content*/}
                                </div>{/* /.container*/}
                            </div>{/* /.single-slide-item*/}
                        </div>{/* /.item .active*/}
                        <div className="item">
                            <div className="single-slide-item slide3">
                                <div className="container">
                                    <div className="welcome-hero-content">
                                        <div className="row">
                                            <div className="col-sm-4">
                                                <div className="single-welcome-hero">
                                                    <div className="welcome-hero-txt">
                                                        <h2>Spacious Accomodation</h2>
                                                        <p>
                                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiuiana smod tempor  ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
                                                        </p>
                                                        <div className="packages-price">
                                                            <p>
                                                                $ 299.00
                                                                <del>$ 399.00</del>
                                                            </p>
                                                        </div>
                                                       
                                                        <button className="btn-cart welcome-add-cart welcome-more-info" onclick="window.location.href='#'">
                                                            more info
                                                        </button>
                                                    </div>{/*/.welcome-hero-txt*/}
                                                </div>{/*/.single-welcome-hero*/}
                                            </div>{/*/.col*/}
                                            <div className="col-sm-8">
                                                <div className="single-welcome-hero">
                                                    <div className="welcome-hero-img">
                                                        <img src="https://www.friendshiphomestay.com/wp-content/uploads/2017/03/77f85ec8_original.jpg" alt="slider image" />
                                                    </div>{/*/.welcome-hero-txt*/}
                                                </div>{/*/.single-welcome-hero*/}
                                            </div>{/*/.col*/}
                                        </div>{/*/.row*/}
                                    </div>{/*/.welcome-hero-content*/}
                                </div>{/* /.container*/}
                            </div>{/* /.single-slide-item*/}
                        </div>{/* /.item .active*/}
                    </div>{/* /.carousel-inner*/}
                </div>{/*/#header-carousel*/}
                {/* top-area Start */}
            </header>
        )
    }
}

export default Navbar;