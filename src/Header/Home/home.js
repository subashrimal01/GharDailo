import { Component } from "react";
import Blog from "../../Mid/blog";
import NewsLetter from "../../Mid/newsletter";
import Navbar from "./navbar";
import PopularProducts from "./popularProducts";

class Home extends Component {
    render() {
        return (
          <>
          <Navbar></Navbar>
            <PopularProducts></PopularProducts>
            <Blog></Blog>
            <NewsLetter></NewsLetter>
            </>

        )
    }
}

export default Home;