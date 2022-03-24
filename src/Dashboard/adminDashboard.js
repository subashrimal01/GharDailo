import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Admindashboard(){

    const [listrooms,setlistrooms] = useState([])
    const [listusers,setlistusers] = useState([])

  useEffect(() => {
    axios.get("https://ghardailo.herokuapp.com/product/showall")
    .then(res => {
      setlistrooms(res.data.data)
    })
    .catch(err =>{
      console.log(err)
    })

    axios.get("https://ghardailo.herokuapp.com/user/showall")
    .then(res => {
      setlistusers(res.data.data)
    })
    .catch(err =>{
      console.log(err)
    })
      
  }, []);

  const logout = (e) => {
    localStorage.clear()
    window.location.href = "/login"
  }

  if(!localStorage.getItem("admin")){
    localStorage.clear()
    window.location.href="/login"
  }
        return(
            <section id="new-arrivals" className="new-arrivals mt-4">
            <div className="container-scroller">
  <div className="container-fluid page-body-wrapper">
    <nav className="sidebar sidebar-offcanvas" id="sidebar">
      <ul className="nav">
        <li className="nav-item nav-profile">
          <a href="#" className="nav-link">
            <div className="nav-profile-text d-flex flex-column">
              <span className="font-weight-bold mb-2">{localStorage.getItem('username')}</span>
              <span className="text-secondary text-small">Administrator</span>
            </div>
            <i className="mdi mdi-bookmark-check text-success nav-profile-badge" />
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            <span className="side-menu">Dashboard</span>
            <i className="mdi mdi-home menu-icon" />
          </a>
        </li>
        
        
        <li className="nav-item">
          <NavLink to={"/admin/users"} className="nav-link">
            <span className="side-menu">Users</span>
            <i className="mdi mdi-format-list-bulleted menu-icon" />
          </NavLink>
        </li>
       
        <li className="nav-item">
          <NavLink to={"/admin/rooms"} className="nav-link" >
            <span className="side-menu">Rooms</span>
            <i className="mdi mdi-table-large menu-icon" />
          </NavLink>
        </li>
        <li>
          <a href="/addroom"><span>
            <button style={{fontSize: "16px"}} className=" btn btn-block btn-lg btn-gradient-primary mt-4">+ Add a Room</button>
          </span></a>
        </li>
        <li className="nav-item sidebar-actions">
          <h1><span className="nav-link">
            <button style={{fontSize: "16px"}} className="btn btn-danger ml-3" onClick={logout}>Logout</button>
          </span></h1>
        </li>
      </ul>
    </nav>
    <div className="main-panel">
      <div className="content-wrapper">
        <div className="page-header">
          <h3 className="page-title">
            <span className="page-title-icon bg-gradient-primary text-white mr-2">
              <i className="mdi mdi-home" />
            </span> Dashboard
          </h3>
          <nav aria-label="breadcrumb">
            <ul className="breadcrumb">
              <li className="breadcrumb-item active" aria-current="page">
                <span />Overview <i className="mdi mdi-alert-circle-outline icon-sm text-primary align-middle" />
              </li>
            </ul>
          </nav>
        </div>
        <div className="row">
          <div className="col-md-4 stretch-card grid-margin">
            <div className="card bg-gradient-danger card-img-holder text-white">
              <div className="card-body">
                <img src="adminassets/images/dashboard/circle.svg" className="card-img-absolute" alt="circle-image" />
                <h4 style={{fontSize: "20px"}} className="font-weight-normal mb-3">Total Users <i className="mdi mdi-chart-line mdi-24px float-right" />
                </h4>
                <h2 className="mb-5">{listusers.length}</h2>
              </div>
            </div>
          </div>
          <div className="col-md-4 stretch-card grid-margin">
            <div className="card bg-gradient-info card-img-holder text-white">
              <div className="card-body">
                <img src="adminassets/images/dashboard/circle.svg" className="card-img-absolute" alt="circle-image" />
                <h4 style={{fontSize: "20px"}} className="font-weight-normal mb-3">Total Rooms <i className="mdi mdi-bookmark-outline mdi-24px float-right" />
                </h4>
                <h2 className="mb-5">{listrooms.length}</h2>
              </div>
            </div>
          </div>
          <div className="col-md-4 stretch-card grid-margin">
            <div className="card bg-gradient-success card-img-holder text-white">
              <div className="card-body">
                <img src="adminassets/images/dashboard/circle.svg" className="card-img-absolute" alt="circle-image" />
                <h4 className="font-weight-normal mb-3">Visitors Online <i className="mdi mdi-diamond mdi-24px float-right" />
                </h4>
                <h2 className="mb-5">9,541</h2>
                <h6 className="card-text">Increased by 5%</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</section>
        ) 
    
}

export default Admindashboard;