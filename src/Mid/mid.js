import { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Admindashboard from "../Dashboard/adminDashboard";
import UserDashboard from "../Dashboard/Userdashboard";
import Home from "../Header/Home/home";
import Login from "./login";
import SignUp from "./signUp";
import UserProfile from "./userprofile";
import UserDetailUpdate from "../Dashboard/UserDetailUpdate";
import AboutUs from "./aboutus";
import AdminLogin from "./adminlogin";
import Findroom from "./Findaroom";
import RoomDashboard from "../Dashboard/roomdashboard";
import RoomDetailUpdate from "../Dashboard/roomupdate";
import AddRoom from "./addroom";
import RoomDetail from "./roomDetail";
import MyWatchList from "./myWatchlist";
import ForgotPassword from "./forgot-password";
import ResetPassword from "./reset-password";


class Mid extends Component{
    render(){
        return(
            <>
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/adminlogin" element={<AdminLogin />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/findroom" element={<Findroom />} />
            <Route path="/room/:id" element={<RoomDetail/>} />
            <Route path="/admin" element={<Admindashboard />} />
            <Route path="/admin/users" element={<UserDashboard/>} />
            <Route path="/admin/rooms" element={<RoomDashboard/>}/>
            <Route path="/addroom" element={<AddRoom/>}/>
            <Route path="/userprofile" element={<UserProfile/>}/>
            <Route path="/mywatchlist" element={<MyWatchList/>}/>
            <Route path="/room/update/:iddd" element={<RoomDetailUpdate/>} />
            <Route path="/user/update/:idd" element={<UserDetailUpdate/>} />
            <Route path="/aboutus" element={<AboutUs/>}/>
            <Route path="/forgot-password" element={<ForgotPassword/>}/>
            <Route path="/reset-password" element={<ResetPassword/>}/>
            </Routes>
            </>
        )
    }
}

export default Mid;