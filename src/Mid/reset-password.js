import axios from "axios";
import { toast } from "react-toastify";

const { Component } = require("react");

class ResetPassword extends Component {
     state = {
          otpCode: "",
          newPassword: "",
          confirmNewPassword: "",
          otpCodeError: "",
          newPasswordError: "",
          confirmNewPasswordError: ""
     }

     changeState = (e) => {
          this.setState({
               [e.target.name]: e.target.value
          })
     }

     otpValidation() {
          //login email validation
          const regex = /^([0-9]{4})$/;
          if (regex.test(this.state.otpCode) === false) {
               return false;
          }
          return true;
     }

     newOTP = (e) => {
          e.preventDefault()
          window.location.href = "/forgot-password"
          
     }


     submit = (e) => {
          e.preventDefault()

          this.setState({
               otpCodeError: "",
               newPasswordError: "",
               confirmNewPasswordError: ""
          })

          let otpCodeError = "";
          let newPasswordError = "";
          let confirmNewPasswordError = "";

          //login form validation
          if (this.state.otpCode === "") {
               otpCodeError = "**Please enter OTP Code!";
          }

          else if (this.otpValidation() === false) {
               otpCodeError = "**Invalid OTP code!";
          }

          if (this.state.newPassword === "") {
               newPasswordError = "**Password field cannot be empty!";
          }

          else if (this.state.newPassword.length < 8 || this.state.newPassword.length > 20) {
               newPasswordError = "**Password must be at least 8 characters long!"
          }

          else if (this.state.confirmPassword === "") {
               confirmNewPasswordError = "**Password field cannot be empty!";
          }

          else if (!(this.state.newPassword === this.state.confirmNewPassword)) {
               newPasswordError = "**Passwords do not match!";
               confirmNewPasswordError = "**Passwords do not match!";
          }

          if (otpCodeError || newPasswordError || confirmNewPasswordError) {
               this.setState({
                    otpCodeError, newPasswordError, confirmNewPasswordError
               })
          }

          else {
               const data = {
                    otp: this.state.otpCode,
                    newPassword: this.state.newPassword
               }
               axios.put("https://ghardailo.herokuapp.com/reset-password", data)
               toast.success("Your password has been changed successfully!", {
                    position: toast.POSITION.TOP_CENTER})
               setTimeout(() => {
                    window.location.href = "/login"
                 }, 2000);
               
          }

     }

     render() {
          return (
               <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100 p-l-50 p-r-50 p-t-77 p-b-30">
            <form className="login100-form validate-form">
              <h3>
                Enter OTP and New Password
              </h3>
              <div className="wrap-input100 validate-input mt-4 m-b-16" data-validate="Valid OTP is required: 12345">
                <input className="input100" type="text" name="otpCode" value={this.state.otpCode} onChange={this.changeState} placeholder="OTP Code" />
                <div style={{ color: "red", fontSize: "small" }}>{this.state.otpCodeError}</div>
                <span className="focus-input100" />
                <span className="symbol-input100">
                  <span className="lnr lnr-envelope" />
                </span>
              </div>
              <div className="wrap-input100 validate-input m-b-16" data-validate="Valid email is required: ex@abc.xyz">
                <input className="input100" type="password" name="newPassword" value={this.state.newPassword} onChange={this.changeState} placeholder="Password" />
                <div style={{ color: "red", fontSize: "small" }}>{this.state.newPasswordError}</div>
                <span className="focus-input100" />
                <span className="symbol-input100">
                  <span className="lnr lnr-envelope" />
                </span>
              </div>
              <div className="wrap-input100 validate-input m-b-16" data-validate="Password is required">
                <input className="input100" type="password" name="confirmNewPassword" value={this.state.confirmNewPassword} onChange={this.changeState} placeholder="Confirm Password" />
                <div style={{ color: "red", fontSize: "small" }}>{this.state.confirmNewPasswordError}</div>
                <span className="focus-input100" />
                <span className="symbol-input100">
                  <span className="lnr lnr-lock" />
                </span>
              </div>
              <div className="container-login100-form-btn p-t-25">
                <button type="submit" onClick={this.submit} className="login100-form-btn">
                  Submit
                </button>
              </div>
              <div className="text-center w-full p-t-115">
                <span className="txt1">
                  Didn't receive the code?&nbsp;
                </span>
                <a className="txt1 bo1 hov1" href="#" onClick={this.newOTP}>
                  Re-Send code
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
          )
     }
}

export default ResetPassword;