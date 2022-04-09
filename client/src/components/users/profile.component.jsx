import React, { useEffect } from "react";
import { useNavigate } from "react-router";

const Profile = () => {
   const navigate = useNavigate()
    useEffect(() => {
        let token = localStorage.getItem('user');
        if (token) {
            navigate('/profile')
        } else {
            navigate('/login')
        }
    }, [])


    return (
        <h1>Profile Page</h1>
    )
}

export default Profile;