import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

function RoomDetail(props) {
  const { id } = useParams()

  const [room, setroom] = useState([]);



  useEffect(() => {
    const fetchroom = async () => {
      axios.get("https://ghardailo.herokuapp.com/room/" + id)
        .then(res => {
          setroom(res.data)
        })
        .catch(err => {
          console.log(err)
        })
    }

    fetchroom();

  }, []);

  const latitude = room.latitude
  console.log(typeof latitude)
  const longitude = room.longitude

  const containerStyle = {
    position: 'relative',
    width: '100%',
    height: '100%'
  }


  const addtoWatchlist = () => {

    if (localStorage.getItem("token") === null) {
      toast.error("Please login to add the room to watchlist!", {
        position: toast.POSITION.TOP_CENTER
      })
      setTimeout(() => {
        window.location.href = "/login"
      }, 2000);

    }
    else {
      const cartData = {
        userID: localStorage.getItem("userID"),
        watchlist: id
      }

      axios.put("https://ghardailo.herokuapp.com/addtowatchlist", cartData)
        .then((result) => {

          toast.success("Room added to WatchList successfully!", {
            position: toast.POSITION.TOP_CENTER
          })
        })
        .catch()
    }
  }

  return (
    <section id="new-arrivals" className="new-arrivals">
      <div className="container mt-4">
        <div className="pd-wrap">
          <div className="container">
            <div className="heading-section">
              <h2>Room Details</h2>
            </div>
            <div className="row" style={{
              marginTop: 50
            }}>
              <div className="col-md-6">
                <div className="item">
                  <img src={"https://ghardailo.herokuapp.com/" + room.roomImage} />
                </div>
              </div>
              <div className="col-md-6">
                <div className="product-dtl">
                  <div className="product-info">
                    <div className="product-name">{room.roomName}</div>
                    <div className="reviews-counter">
                      <div className="rate">
                        <input type="radio" id="star5" name="rate" defaultValue={5} defaultChecked />
                        <label htmlFor="star5" title="text">5 stars</label>
                        <input type="radio" id="star4" name="rate" defaultValue={4} defaultChecked />
                        <label htmlFor="star4" title="text">4 stars</label>
                        <input type="radio" id="star3" name="rate" defaultValue={3} defaultChecked />
                        <label htmlFor="star3" title="text">3 stars</label>
                        <input type="radio" id="star2" name="rate" defaultValue={2} />
                        <label htmlFor="star2" title="text">2 stars</label>
                        <input type="radio" id="star1" name="rate" defaultValue={1} />
                        <label htmlFor="star1" title="text">1 star</label>
                      </div>
                      <span>3 Reviews</span>
                    </div>
                    <div className="product-price-discount"><span>Rs.{room.roomPrice}</span></div>
                  </div>
                  <h2>Facilities: <p>{room.facility}</p></h2>
                  <a href="#" id="black-btn">Book Now</a>&nbsp;&nbsp;&nbsp;
                  <a href="#" id="black-btn" onClick={addtoWatchlist}>Add to Watchlist</a>
                </div>
              </div>
            </div>
            <div className="product-info-tabs">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item">
                  <a className="nav-link active" id="description-tab" data-toggle="tab" href="#description" role="tab" aria-controls="description" aria-selected="true">Description</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" id="review-tab" data-toggle="tab" href="#review" role="tab" aria-controls="review" aria-selected="false">view on map</a>
                </li>
              </ul>
              <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="description" role="tabpanel" aria-labelledby="description-tab">
                  {room.roomDescription}
                </div>
                <div className="tab-pane fade" id="review" style={{ height: "600px" }} role="tabpanel" aria-labelledby="review-tab">
                  <Map google={props.google}
                    containerStyle={containerStyle}
                    zoom={14}
                    center={
                      {
                        lat: latitude,
                        lng: longitude
                      }
                    }
                  >
                    <Marker
                      position={{ lat: latitude, lng: longitude }} />
                    <Marker />
                  </Map>

                </div>

              </div>
            </div>
          </div></div>

      </div>
    </section>


  )
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyAgCpVu6vm54zUzcB1bVXRli2AIUozsXMM")
})(RoomDetail)