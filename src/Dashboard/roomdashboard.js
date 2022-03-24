import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";



function RoomDashboard() {

  const [listrooms, setlistrooms] = useState([])
  const [searchdata, setSearchdata] = useState("")
  const navigate = useNavigate()

  useEffect(() => {
    axios.get("https://ghardailo.herokuapp.com/room/showall")
      .then(res => {
        setlistrooms(res.data.data)
      })
      .catch(err => {
        console.log(err)
      })

  }, []);

  const logout = (e) => {
    localStorage.clear()
    window.location.href = "/login"
  }


  const CourseDetailUpdate = (room_id) => {
    axios.get("https://ghardailo.herokuapp.com/room/" + room_id)
      .then((res) => {
        console.log(res.data)
        navigate(`/room/update/${room_id}`, { state: res.data })
      }
      )
  }


  //delete function

  const deleteroom = (pro_idd) => {
    axios.delete("https://ghardailo.herokuapp.com/deleteroom/" + pro_idd)
      .then()
      .catch()
    window.location.href = "/admin"
  }

  if (!localStorage.getItem("admin")) {
    localStorage.clear()
    window.location.href = "/login"
  }

  return (
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
                <a className="nav-link" href="/admin">
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
                <NavLink to={"/admin/rooms"} className="nav-link">
                  <span className="side-menu">rooms</span>
                  <i className="mdi mdi-table-large menu-icon" />
                </NavLink>
              </li>
              <li className="nav-item sidebar-actions">
                <a href="/addroom"><span className="nav-link">
                  <button style={{ fontSize: "16px" }} className="btn btn-block btn-lg btn-gradient-primary mt-4">+ Add a Room</button>
                </span></a>
              </li>
              <li className="nav-item sidebar-actions">
                <h1><span className="nav-link">
                  <button style={{ fontSize: "16px" }} className="btn btn-danger ml-3" onClick={logout}>Logout</button>
                </span></h1>
              </li>
            </ul>
          </nav>


          <div className="main-panel">
            <div className="content-wrapper">
              <div className="container p-5 ">
                <div className="row">
                  <div className="col-12 grid-margin">
                    <div className="card">
                      <div className="card-body">
                        <input style={{ fontSize: "14px" }} type="text" placeholder="Search.." name="searchdata" value={searchdata} onChange={e => { setSearchdata(e.target.value) }} />
                        <br />
                        <br />
                        <br />
                        <table className="table">
                          <thead className="thead-dark">
                            <tr>

                              <th style={{ fontSize: "14px" }} scope="col">room Name</th>
                              <th style={{ fontSize: "14px" }} scope="col">Price</th>
                              <th style={{ fontSize: "14px" }} scope="col">Category</th>
                              <th style={{ fontSize: "14px" }} scope="col">Actions</th>
                            </tr>
                          </thead>

                          {
                            listrooms.filter((room) => {
                              if (searchdata === "") {
                                return room
                              } else if (room.roomName.toLowerCase().includes(searchdata.toLowerCase())) {
                                return room
                              }
                            }).map(room => {
                              return (

                                <tbody>
                                  <tr>

                                    <td style={{ fontSize: "14px" }}>{room.roomName}
                                    </td>
                                    <td style={{ fontSize: "14px" }}>Rs.{room.roomPrice}</td>
                                    <td style={{ fontSize: "14px" }}>{room.category}</td>

                                    <button style={{ fontSize: "14px" }} onClick={e => { CourseDetailUpdate(room._id) }} className="btn-success bg-success m-4">Update</button>
                                    <button style={{ fontSize: "14px" }} onClick={e => { deleteroom(room._id) }} className="btn-danger bg-danger m-4">Delete</button>
                                  </tr>


                                </tbody>
                              )
                            })
                          }

                        </table>

                      </div>
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

export default RoomDashboard;