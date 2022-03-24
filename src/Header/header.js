import { Component } from "react";
import { NavLink } from "react-router-dom";

class Header extends Component {

    logOut = (e) => {
        localStorage.clear()
        window.location.href = "/login"
    }

    render() {

        if (localStorage.getItem('token') || localStorage.getItem('admin')) {
            var menu = <div className="collapse navbar-collapse menu-ui-design" id="navbar-menu">
                <ul className="nav navbar-nav navbar-center" data-in="fadeInDown" data-out="fadeOutUp">
                    <li><NavLink to="/">home</NavLink></li>
                    <li><NavLink to="/findroom">Find a room</NavLink></li>
                    <li><NavLink to="/aboutus">contact</NavLink></li>
                </ul>
            </div>

            var nav = <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                    <span className="lnr lnr-user" />
                    &nbsp;
                    <span >{localStorage.getItem("username")}</span>
                </a>
                <ul className="dropdown-menu cart-list s-cate">
                    <li className="single-cart-list">
                        <a href="/userprofile" className="pointer">Profile</a>
                    </li>
                    <li className="single-cart-list">
                        <a href="/mywatchlist" className="pointer">Watchlist</a>
                    </li>
                    <li className="single-cart-list">
                        <a className="pointer" onClick={this.logOut}>Logout</a>
                    </li>
                </ul>
            </li>



        }
        else {
            var menu = <div className="collapse navbar-collapse menu-ui-design" id="navbar-menu">
                <ul className="nav navbar-nav navbar-center" data-in="fadeInDown" data-out="fadeOutUp">
                    <li><a href="/">home</a></li>
                    <li><NavLink to="/findroom">Find a room</NavLink></li>
                    <li><NavLink to="/aboutus">contact</NavLink></li>
                </ul>
            </div>

            var nav = <li>
                <a href="/login">Login</a>
            </li>
        }
        return (
            <div className="top-area">
                <div className="header-area">
                    <nav className="navbar navbar-default bootsnav  navbar-sticky navbar-scrollspy" data-minus-value-desktop={70} data-minus-value-mobile={55} data-speed={1000}>
                        <div className="top-search">
                            <div className="container">
                                <div className="input-group">
                                    <span className="input-group-addon"><i className="fa fa-search" /></span>
                                    <input type="text" className="form-control" placeholder="Search" />
                                    <span className="input-group-addon close-search"><i className="fa fa-times" /></span>
                                </div>
                            </div>
                        </div>

                        <div className="container">
                            <div className="attr-nav">
                                <ul>
                                    <li className="search">
                                        <a href="#"><span className="lnr lnr-magnifier" /></a>
                                    </li>
                                    {nav}

                                </ul>
                            </div>

                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                                    <i className="fa fa-bars" />
                                </button>
                                <a className="navbar-brand" href="/">GharDailo</a>
                            </div>
                            {menu}
                        </div>
                    </nav>
                </div>
                <div className="clearfix" />
            </div>
        )
    }
}

export default Header;