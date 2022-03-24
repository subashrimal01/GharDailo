import axios from "axios"
import { useEffect, useState } from "react"

function UserProfile() {
  const [listcourses, setListcourses] = useState([]);

  useEffect(() => {
    axios.get("https://ghardailo.herokuapp.com/course/showall")
      .then(res => {
        setListcourses(res.data.data)
        console.log(res.data.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, []);

  // const user = listcourses.find((course) => {
  //   return course.enrolledBy.some((item) => {
  //   return item.userID === localStorage.getItem("userID")
  //   })

  // }  );

  return (
    <section id="new-arrivals" className="new-arrivals mt-4">
    <div className="container">
      <div className="main-body mb-4 mt-4">
        <div className="row gutters-sm">
          <div className="col-md-4 mb-3">
            <div className="card">
              <div className="card-body">
                <div className="d-flex flex-column align-items-center text-center">
                  <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" width={150} />
                  <div className="mt-3">
                    <h4>{localStorage.getItem('username')}</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="card mb-3">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Full Name</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    {localStorage.getItem('username')}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Email</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    {localStorage.getItem('email')}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-12">
                    <a className="btn btn-info " href="#">Edit</a>
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

export default UserProfile;