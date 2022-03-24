import { Component } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

class SignUp extends Component{

  state = {
    full_name: "",
    email: "",
    age: "",
    password: "",
    confirm_password: "",
    full_nameError: "",
    emailError: "",
    ageError: "",
    passwordError: "",
    confirmPasswordError: ""
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

  nameValidation() {

    //full name validation
    //checks whether the full name has number or not
    if (!this.state.full_name.match(/^[a-zA-Z\s]+$/)) {
      return false;
    }
    return true;
  }

  register = (e) => {
    e.preventDefault()

    this.setState({
      full_nameError: "",
      emailError: "",
      ageError: "",
      passwordError: "",
    })

    let full_nameError = "";
    let emailError = "";
    let ageError = "";
    let passwordError = "";
    let confirmPasswordError = "";


    //registration form validation
    if (this.state.full_name === "") {
      full_nameError = "**Fullname cannot be empty!";
    }

    else if (this.nameValidation() === false) {
      full_nameError = "**Fullname must not contain number!";
    }

    if (this.state.email === "") {
      emailError = "**E-mail field cannot be empty!";
    }

    else if (this.emailValidation() === false) {
      emailError = "**Invalid e-mail address!";
    }

    if (this.state.age === "") {
      ageError = "**Age cannot be empty!";
    }

    if (this.state.password === "") {
      passwordError = "**Password field cannot be empty!";
    }

    if (this.state.password.length < 8 || this.state.password.length > 20) {
      passwordError = "**Password must be at least 8 characters long!"
    }

    if (this.state.confirm_password === "") {
      confirmPasswordError = "**Password field cannot be empty!";
    }

    else if (!(this.state.password === this.state.confirm_password)) {
      passwordError = "**Passwords do not match!";
      confirmPasswordError = "**Passwords do not match!";
    }

    if (full_nameError || emailError || ageError || passwordError || confirmPasswordError) {
      this.setState({ full_nameError, emailError, ageError, passwordError, confirmPasswordError })
      return false;
    }

    else {

      //registration function
      if (this.state.password === this.state.confirm_password) {
        const data = {
          full_name: this.state.full_name,
          email: this.state.email,
          age: this.state.age,
          password: this.state.password
        }

        axios.post("https://ghardailo.herokuapp.com/signup", data)
        .then((res) => {
          toast.success("Registration successful!", {
            position: toast.POSITION.TOP_CENTER
          })
      })
      window.location.href="/login"
      } else {
        toast.error("Something went wrong!")
      }
    }
    return true;
  }
  render() {
    return (
      <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100 p-l-50 p-r-50 p-t-77 p-b-30 mt-4">
          <form action="post">
                  <h1>Create Account</h1>
                  <input className="input100 mb-4" type="text" name="full_name" placeholder="Full Name" value={this.state.full_name} onChange={this.changeState} />
                  <div style={{ color: "red", fontSize: "small" }}>{this.state.full_nameError}</div>
                  <input className="input100 mb-4" type="text" name="email" placeholder="Email" value={this.state.email} onChange={this.changeState} />
                  <div style={{ color: "red", fontSize: "small" }}>{this.state.emailError}</div>
                  <input className="input100 mb-4" type="number" name="age" placeholder="Age" value={this.state.age} onChange={this.changeState} />
                  <div style={{ color: "red", fontSize: "small" }}>{this.state.ageError}</div>
                  <input className="input100 mb-4" type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.changeState} />
                  <div style={{ color: "red", fontSize: "small" }}>{this.state.passwordError}</div>
                  <input className="input100 mb-4" type="password" name="confirm_password" placeholder="Confirm Password" value={this.state.confirm_password} onChange={this.changeState} />
                  <div style={{ color: "red", fontSize: "small" }}>{this.state.confirmPasswordError}</div>
                  <button className="login100-form-btn" onClick={this.register} >Sign Up</button>
                </form>
                <div className="text-center w-full p-t-115">
                <span className="txt1">
                  Already a member?
                </span>
                <a className="txt1 bo1 hov1" href="/login">
                  Sign in now
                </a>
              </div>
          </div>
        </div>
      </div>


    )
  }
}

export default SignUp;