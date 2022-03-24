import { Component } from "react";

class Footer extends Component{
    render(){
        return(
            <footer id="footer" className="footer">
  <div className="container">
    <div className="hm-footer-copyright text-center">
      <div className="footer-social">
        <a href="#"><i className="fa fa-facebook" /></a>	
        <a href="#"><i className="fa fa-instagram" /></a>
        <a href="#"><i className="fa fa-linkedin" /></a>
        <a href="#"><i className="fa fa-pinterest" /></a>
        <a href="#"><i className="fa fa-behance" /></a>	
      </div>
      <p>
        ©copyright. designed and developed by <a href="#">GharDailo</a>
      </p>
    </div>
  </div>
  <div id="scroll-Top">
    <div className="return-to-top">
      <i className="fa fa-angle-up " id="scroll-top" data-toggle="tooltip" data-placement="top" title data-original-title="Back to Top" aria-hidden="true" />
    </div>
  </div>
</footer>

        )
    }
}

export default Footer;