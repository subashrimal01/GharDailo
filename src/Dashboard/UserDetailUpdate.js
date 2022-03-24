import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useParams } from "react-router-dom";

function UserDetailUpdate() {

    const { idd } = useParams()
    console.log(idd)

    const [user, setUser] = useState([])
    const [fullname, setFullname] = useState(user.full_name)
    const [age, setAge] = useState(user.age)
    const [email, setEmail] = useState(user.email)

    useEffect(() => {
        const fetchUser = async () => {
            axios.get("https://ghardailo.herokuapp.com/user/" + idd)
                .then(res => {
                    setUser(res.data)

                })
                .catch(err => {
                    console.log(err)
                })
        }

        fetchUser();

    }, []);



    const update = (e) => {
        e.preventDefault()

        const data = {
            id: user._id,
            full_Name: fullname,
            age: age,
            email: email
        }


        axios.put("https://ghardailo.herokuapp.com/updateuser", data)
            .then((result) => {
                console.log(result)
                toast.success("User has been updated!", {
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
                        <h1>Update User Detail</h1>
                        <input className="input100 mb-4" type="text" name="fullname" placeholder={user.full_name} value={fullname} onChange={e => { setFullname(e.target.value) }} />
                        <input className="input100 mb-4" type="number" name="age" placeholder={user.age} value={age} onChange={e => { setAge(e.target.value) }} />
                        <input className="input100 mb-4" type="email" name="email" placeholder={user.email} value={email} onChange={e => { setEmail(e.target.value) }} />
                        <button className="login100-form-btn" onClick={update}>Update</button>
                    </form>
                </div>
            </div>
        </div>


    )

}

export default UserDetailUpdate;