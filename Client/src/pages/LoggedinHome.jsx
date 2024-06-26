import React, { useContext, useEffect, useState } from 'react';
import { Video, MessagesSquare, LogOut, LogOutIcon } from "lucide-react";
import { useAuth } from "../userContext";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

function LoggedinHome() {
    const navigate = useNavigate();
    const { user,setUser } = useAuth();

    const handleLogout = async () => {
        const { data } = await axios.post("/api/v1/auth/sign-out", {});
        setUser(null);
        if (data.success) navigate("/signin");
      };
    

  return (
    <div
        className="bg-black h-screen text-white flex justify-center items-center"
        style={{
          background:
            "rgb(2,0,36) linear-gradient(45deg, rgba(2,0,36,1) 0%, rgba(0,0,0,1) 50%, rgba(160,202,210,1) 100%)",
        }}
      >
        <div className="lg:w-1/2 lg:h-4/5 bg-gray-900 lg:rounded-3xl w-full h-full md:w-1/2">
          <div
            className="w-fit text-center p-8 transition-colors duration-300 hover:bg-gray-50 hover:text-gray-700 cursor-pointer rounded-full"
            onClick={handleLogout}
          >
            <Link>
              <LogOut />
            </Link>
          </div>
          <div className="w-full h-1/2 flex justify-center">
            <img
              src={user.profileImage}
              alt="User Image"
              className="rounded-full mt-2"
            />
          </div>
          <div className="text-4xl text-center font-serif">
            <h1>{user.fullName}</h1>
          </div>
          <div className="text-white p-4 m-9 flex justify-between">
            <Link to="/#" className="lg:w-1/3 h-1/2 w-1/2 sm:p-2 sm:ml-4">
              <Video className="w-1/2 h-1/2" />
            </Link>
            <Link to="/chat" className="lg:w-1/3 h-1/2 lg:p-4 w-1/2 sm:p-2 sm:ml-4">
              <MessagesSquare className="w-1/2 h-1/2" />
            </Link>
          </div>
        </div>
      </div>
  )
}

export default LoggedinHome