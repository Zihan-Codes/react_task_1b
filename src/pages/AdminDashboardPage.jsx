import React from "react";

const AdminDashboardPage = () => {
  return (
    <>
      <div className="w-full flex justify-center items-center text-7xl h-screen text-gray-700 ">
      <ul className ="nav">
         <li className ="nav-item">
           <a className ="nav-link active" aria-current="page" href="#">App</a>
         </li>
         
         <li className ="nav-item">
           <a className ="nav-link"><button className="btn btn-success">Logout</button></a>
         </li>
      </ul>

      <div>
      <ul className ="nav">
         <li className ="nav-item">
           <a className ="nav-link active" aria-current="page" href="#">Today's leaderboard</a>
         </li>
         
         <li className ="nav-item">
           <a className ="nav-link"><button className="btn btn-success"></button></a>
         </li>
      </ul>
      </div>

      <div>
        Fetching Api
      </div>
      </div>
    </>
  );
};

export default AdminDashboardPage;
