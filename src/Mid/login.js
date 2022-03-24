import { Component } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

class Login extends Component {

  state = {
    loginemail: '',
    loginpassword: '',
    loginEmailError: "",
    loginPasswordError: "",
    invalidLoginError: ""
  }


  changeState = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }


  emailValidation() {
    // registration email validation
    const regex = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i;
    if (regex.test(this.state.email) === false) {
      return false;
    }
    return true;
  }

  loginEmailValidation() {

    //login email validation
    const regex = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i;
    if (regex.test(this.state.loginemail) === false) {
      return false;
    }
    return true;
  }

  login = (e) => {
    e.preventDefault()

    this.setState({
      loginEmailError: "",
      loginPasswordError: "",
      invalidLoginError: ""
    })

    let loginEmailError = "";
    let loginPasswordError = "";
    let invalidLoginError = "";

    //login form validation
    if (this.state.loginemail === "") {
      loginEmailError = "**E-mail field cannot be empty!";
    }

    else if (this.loginEmailValidation() === false) {
      loginEmailError = "**Invalid e-mail address!";
    }

    if (this.state.loginpassword === "") {
      loginPasswordError = "**Password field cannot be empty"
    }

    if (loginEmailError || loginPasswordError) {
      this.setState({ loginEmailError, loginPasswordError })
      return false;
    }

    else {

      // login function
      const data = {
        email: this.state.loginemail,
        password: this.state.loginpassword
      }
      axios.post('https://ghardailo.herokuapp.com/user/login', data)
        .then((res) => {
          toast.success("Logged in successfully!", {
            position: toast.POSITION.TOP_CENTER
          })

          localStorage.setItem('token', res.data.token);
          localStorage.setItem('userID', res.data.userID);
          localStorage.setItem('username', res.data.username);
          localStorage.setItem('email', res.data.email);
          window.location.href = "/"

        })
        .catch((err) => {
          invalidLoginError = "**Invalid credentials!";
          if (invalidLoginError) {
            this.setState({ invalidLoginError })
            return false;
          }
        })

    }

    return true;
  }

  forgotPassword = (e) => {
    window.location.href = "/forgot-password"
  }

  render() {
    return (
      <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100 p-l-50 p-r-50 p-t-77 p-b-30">
            <form className="login100-form validate-form">
              <span className="login100-form-title p-b-55">
                Login
              </span>
              <div className="wrap-input100 validate-input m-b-16" data-validate="Valid email is required: ex@abc.xyz">
                <input className="input100" type="email" name="loginemail" value={this.state.loginemail} onChange={this.changeState} placeholder="Email" />
                <div style={{ color: "red", fontSize: "small" }}>{this.state.loginEmailError}</div>
                <span className="focus-input100" />
                <span className="symbol-input100">
                  <span className="lnr lnr-envelope" />
                </span>
              </div>
              <div className="wrap-input100 validate-input m-b-16" data-validate="Password is required">
                <input className="input100" type="password" name="loginpassword" value={this.state.loginpassword} onChange={this.changeState} placeholder="Password" />
                <div style={{ color: "red", fontSize: "small" }}>{this.state.loginPasswordError}</div>
                  <div style={{ color: "red", fontSize: "small" }}>{this.state.invalidLoginError}</div>
                  <a href="#" onClick={this.forgotPassword}>Forgot your password?</a>
                <span className="focus-input100" />
                <span className="symbol-input100">
                  <span className="lnr lnr-lock" />
                </span>
              </div>
              <div className="container-login100-form-btn p-t-25">
                <button type="submit" onClick={this.login} className="login100-form-btn">
                  Login
                </button>
              </div>
              <div className="text-center w-full p-t-115">
                <span className="txt1">
                  Not a member?
                </span>
                <a className="txt1 bo1 hov1" href="/signup">
                  Sign up now
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>


    )
  }
}

export default Login;