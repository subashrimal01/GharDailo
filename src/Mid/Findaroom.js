
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Findroom() {

    const [listrooms, setlistrooms] = useState([])
    const [searchdata, setSearchdata] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchroom = async () => {
            setLoading(true);
            axios.get("https://ghardailo.herokuapp.com/room/showall")
                .then(res => {
                    setlistrooms(res.data.data)
                })
                .catch(err => {
                    console.log(err)
                })
            setLoading(false);
        }

        fetchroom();
    }, []);

    const redirect = (room_id) => {
        navigate(`/room/${room_id}`)
    }

    return (
        <section id="new-arrivals" className="new-arrivals">

            <div className="container mt-4">
                <div class="d-flex justify-content-center h-100">
                    <div class="roomsearch"> <input type="text" class="search-input" placeholder="Search room by location..." name="searchdata" value={searchdata} onChange={e => { setSearchdata(e.target.value) }} /> <a href="#" id="roomSearch" class="search-icon"> <i class="fa fa-search"></i> </a> </div>
                </div>
                <div className="row">

                    {listrooms.filter((room) => {
                        if (searchdata == "") {
                            return room
                        } else if (room.roomLocation.toLowerCase().includes(searchdata.toLowerCase())) {
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
        </section>


    )
}


export default Findroom;