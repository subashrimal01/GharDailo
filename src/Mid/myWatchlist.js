
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function MyWatchList() {


  const [rooms, setrooms] = useState([]);
  const [myWatchlist, setMyWatchlist] = useState([]);
  const navigate = useNavigate()


  useEffect(() => {
    const fetchrooms = async () => {
      axios.get("https://ghardailo.herokuapp.com/room/showall")
        .then(res => {
          setrooms(res.data.data)
        })
        .catch(err => {
          console.log(err)
        })
    }

    fetchrooms();

    const fetchUser = async () => {

      const id = localStorage.getItem("userID")
      axios.get("https://ghardailo.herokuapp.com/user/" + id)
        .then((res) => {
          console.log(res.data)
          setMyWatchlist(res.data.watchlist)
        })
        .catch(err => {
          console.log(err)
        })
    }

    fetchUser();
  }, []);

  console.log(myWatchlist)


  const redirect = (room_id) => {
    navigate(`/room/${room_id}`)
  }
  return (
    <section id="new-arrivals" className="new-arrivals mt-4">
      <div className="container mt-4">
        <div className="section-header">
          <h2>My Watchlist</h2>
        </div>
        <div className="new-arrivals-content">
          <div className="row">

            {rooms.filter((room) => {
              if (myWatchlist.includes(room._id)) {
                return room
              }
            }).map((room) => {
              return (
                <div className="product-card">
                  <div className="container-fliud">
                    <div className="wrapper row">
                      <div className="preview col-md-6">
                        <div className="preview-pic tab-content">
                          <div className="tab-pane active" id="pic-1"><img src={"https://ghardailo.herokuapp.com/" + room.roomImage} /></div>
                          <div className="tab-pane" id="pic-2"><img src="http://placekitten.com/400/252" /></div>
                          <div className="tab-pane" id="pic-3"><img src="http://placekitten.com/400/252" /></div>
                          <div className="tab-pane" id="pic-4"><img src="http://placekitten.com/400/252" /></div>
                          <div className="tab-pane" id="pic-5"><img src="http://placekitten.com/400/252" /></div>
                        </div>

                      </div>
                      <div className="details col-md-6">
                        <h2 className="room-title">{room.roomName}</h2>
                        <h4>Location: {room.roomLocation}</h4>
                        <div className="rating">
                          <div className="stars">
                            <span className="fa fa-star checked" />
                            <span className="fa fa-star checked" />
                            <span className="fa fa-star checked" />
                            <span className="fa fa-star" />
                            <span className="fa fa-star" />
                          </div>
                          <span className="review-no">41 reviews</span>
                        </div>
                        <h3 className="room-description">{room.roomDescription}.</h3>
                        <h3 className="price">current price: <span>Rs.{room.roomPrice} /month</span></h3>
                        <div className="action">
                          <button className="add-to-cart btn btn-default" onClick={(e) => redirect(room._id)} type="button">View Details</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
            }

          </div>
        </div>
      </div>
    </section>

  )
}


export default MyWatchList;