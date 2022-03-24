import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useParams } from "react-router-dom";

function RoomDetailUpdate() {

    const { iddd } = useParams()
    console.log(iddd)

    const [room, setroom] = useState([])
    const [pname, setPname] = useState(room.roomName)
    const [pdesc, setPdesc] = useState(room.roomDescription)
    const [pprice, setPprice] = useState(room.roomPrice)
    const [facility, setFacility] = useState(room.facility)


    useEffect(() => {
        const fetchroom = async () => {
            axios.get("https://ghardailo.herokuapp.com/room/" + iddd)
                .then(res => {
                    setroom(res.data)

                })
                .catch(err => {
                    console.log(err)
                })
        }

        fetchroom();

    }, []);



    const update = (e) => {
        e.preventDefault()

        const data = {
            id: room._id,
            Pname: pname,
            Pprice: pprice,
            Pdesc: pdesc,
            facility: facility
        }


        axios.put("https://ghardailo.herokuapp.com/updateroom", data)
            .then((result) => {
                console.log(result)
                toast.success("room has been updated!", {
                    position: toast.POSITION.TOP_CENTER
                })
            })
            .catch()

    }

    if (!localStorage.getItem("admin")) {
        localStorage.clear()
        window.location.href = "/login"
    }
    return (
        <div className="limiter mt-4">
            <div className="container-login100 mt-4">
                <div className="wrap-login100 p-l-50 p-r-50 p-t-77 p-b-30 mt-4">
                    <form action="put">
                        <h1>Update room</h1>
                        <input className="input100 mb-4" type="text" name="pname" placeholder={room.roomName} value={pname} onChange={e => { setPname(e.target.value) }} />
                        <input className="input100 mb-4" type="text" name="Pdescription" placeholder={room.roomDescription} value={pdesc} onChange={e => { setPdesc(e.target.value) }} />
                        <input className="input100 mb-4" type="number" name="Pprice" placeholder={room.roomPrice} value={pprice} onChange={e => { setPprice(e.target.value) }} />
                        <input className="input100 mb-4" type="text" name="category" placeholder={room.facility} value={facility} onChange={e => { setFacility(e.target.value) }} />
                        <button className="login100-form-btn" onClick={update}>Update</button>
                    </form>
                </div>
            </div>
        </div>


    )

}

export default RoomDetailUpdate;