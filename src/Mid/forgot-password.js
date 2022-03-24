import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const { Component } = require("react");


class ForgotPassword extends Component {
     state = {
          email: "",
          emailError: "",

     }

     changeState = (e) => {
          this.setState({
               [e.target.name]: e.target.value
          })
     }

     emailValidation() {

          //login email validation
          const regex = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i;
          if (regex.test(this.state.email) === false) {
               return false;
          }
          return true;
     }




     submit = (e) => {
          e.preventDefault()

          this.setState({
               emailError: ""
          })

          let emailError = "";


          if (this.state.email === "") {
               emailError = "**E-mail field cannot be empty!";
          }

          else if (this.emailValidation() === false) {
               emailError = "**Invalid e-mail address!";
          }


          if (emailError) {
               this.setState({
                    emailError
               })
          }

          else {
               const data = {
                    email: this.state.email
               }
               axios.post("https://ghardailo.herokuapp.com/find-email", data)
                    .then((result) => {
                         if (result.data.success === true) {
                              toast.success("Please check your e-mail for OTP code!", {
                                   position: toast.POSITION.TOP_CENTER})
                              axios.post("https://ghardailo.herokuapp.com/forgot-password", data)
                              setTimeout(() => {
                                   window.location.href = "/reset-password"
                                }, 2000);
                         }
                    }).catch(function (error) {

                         if (error.response) {
                              toast.error("User not found!", {
                                   position: toast.POSITION.TOP_CENTER})
                              console.log(error.response.data);
                         }
                    });
          }

     }

     render() {
          return (
               <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100 p-l-50 p-r-50 p-t-77 p-b-30">
            <form className="login100-form validate-form">
              <span className="login100-form-title p-b-55">
                Forget Password
              </span>
              <h2>Please enter your e-mail id.</h2>
              <div className="wrap-input100 validate-input mt-4 m-b-16" data-validate="Valid email is required: ex@abc.xyz">
                <input className="input100" type="email" name="email" value={this.state.email} onChange={this.changeState} placeholder="Email" />
                <div style={{ color: "red", fontSize: "small" }}>{this.state.emailError}</div>
                <span className="focus-input100" />
                <span className="symbol-input100">
                  <span className="lnr lnr-envelope" />
                </span>
              </div>
              <div className="container-login100-form-btn p-t-25">
                <button type="submit" onClick={this.submit} className="login100-form-btn">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
          )
     }
}

export default ForgotPassword;