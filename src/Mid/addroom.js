import { Component } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

class AddRoom extends Component {

    state = {
        Rname: "",
        Rprice: "",
        Rdescription: "",
        location: "",
        latitude: "",
        longitude: "",
        facility: "",
        RnameError: "",
        RpriceError: "",
        RdescriptionError: "",
        LocationError: "",
        latitudeError: "",
        longitudeError: "",
        FacilityError:"",
        filename: null
    }


    changeState = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    fileChangeHandler = (e) => {
        this.setState({
            filename: e.target.files[0],
        })
    }


    PnameValidation() {

        //full name validation
        //checks whether the full name has number or not
        if (!this.state.Rname.match(/^[a-zA-Z\s]+$/)) {
            return false;
        }
        return true;
    }

    register = (e) => {
        e.preventDefault()

        this.setState({
            RnameError: "",
            RPriceError: "",
            RdescriptionError: "",
            LocationError: "",
            latitudeError: "",
            longitudeError: "",
            FacilityError:""
        })

        let RnameError = ""
        let RpriceError = ""
        let RdescriptionError = ""
        let LocationError = ""
        let latitudeError = ""
        let longitudeError = ""
        let FacilityError = ""


        //registration form validation
        if (this.state.Rname === "") {
            RnameError = "**Room Name cannot be empty!";
        }

        if (this.state.Rdescription === "") {
            RdescriptionError = "**Description field cannot be empty!";
        }

        if (this.state.Rprice === "") {
            RpriceError = "**Price cannot be empty!";
        }

        if (this.state.location === "") {
            LocationError = "**Location field cannot be empty!";
        }

        if (this.state.latitude === "") {
            latitudeError = "**Latitude field cannot be empty!";
        }

        if (this.state.longitude === "") {
            longitudeError = "**Longitude field cannot be empty!";
        }

        if (this.state.facility === "") {
            FacilityError = "**Facility field cannot be empty!";
        }

        if (RnameError || RdescriptionError || RpriceError || LocationError || latitudeError || longitudeError || FacilityError) {
            this.setState({ RnameError, RdescriptionError, RpriceError, LocationError, latitudeError, longitudeError, FacilityError })
            return false;
        }

        else {
            const data = new FormData();

            data.append('Rname', this.state.Rname)
            data.append('Rdescription', this.state.Rdescription)
            data.append('Rprice', this.state.Rprice)
            data.append('Rimage', this.state.filename)
            data.append('location', this.state.location)
            data.append('latitude', this.state.latitude)
            data.append('longitude', this.state.longitude)
            data.append('facility', this.state.facility)

            axios.post("https://ghardailo.herokuapp.com/addroom", data)
                .then((result) => {
                    console.log(result)
                    toast.success("Room has been added!", {
                        position: toast.POSITION.TOP_CENTER
                    })
                })
                .catch()
            window.location.href="/addroom"

        }
        return true;
    }
    
    render() {
        if(!localStorage.getItem("admin")){
            localStorage.clear()
            window.location.href="/login"
          }
        return (
            <div className="limiter mt-4">
                <div className="container-login100 mt-4">
                    <div className="wrap-login100 p-l-50 p-r-50 p-t-77 p-b-30 mt-4">
                        <form action="post">
                            <h1>Add room</h1>
                            <input className="input100 mb-4" type="text" name="Rname" placeholder="Room Name" value={this.state.Rname} onChange={this.changeState} />
                            <div style={{ color: "red", fontSize: "small" }}>{this.state.RnameError}</div>
                            <input className="input100 mb-4" type="text" name="Rdescription" placeholder="Description" value={this.state.Rdescription} onChange={this.changeState} />
                            <div style={{ color: "red", fontSize: "small" }}>{this.state.RdescriptionError}</div>
                            <input className="input100 mb-4" type="number" name="Rprice" placeholder="Price" value={this.state.Rprice} onChange={this.changeState} />
                            <div style={{ color: "red", fontSize: "small" }}>{this.state.RpriceError}</div>
                            <input className="input100 mb-4" type="text" name="location" placeholder="Location" value={this.state.location} onChange={this.changeState} />
                            <div style={{ color: "red", fontSize: "small" }}>{this.state.LocationError}</div>
                            <input className="input100 mb-4" type="text" name="latitude" placeholder="Latitude" value={this.state.latitude} onChange={this.changeState} />
                            <div style={{ color: "red", fontSize: "small" }}>{this.state.latitudeError}</div>
                            <input className="input100 mb-4" type="text" name="longitude" placeholder="Longitude" value={this.state.longitude} onChange={this.changeState} />
                            <div style={{ color: "red", fontSize: "small" }}>{this.state.longitudeError}</div>
                            <input className="input100 mb-4" type="text" name="facility" placeholder="Facility" value={this.state.facility} onChange={this.changeState} />
                            <div style={{ color: "red", fontSize: "small" }}>{this.state.FacilityError}</div>
                            <div style={{ color: "red", fontSize: "small" }}>{this.state.confirmPasswordError}</div>
                            <h2><label>Upload Room Image</label></h2>
                            <input type="file" accept="image/*" name="filename" onChange={this.fileChangeHandler} />
                            <button className="login100-form-btn" onClick={this.register} >Add</button>
                        </form>
                    </div>
                </div>
            </div>


        )
    }
}

export default AddRoom;