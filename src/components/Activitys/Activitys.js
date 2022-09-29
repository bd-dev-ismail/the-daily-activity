import React, { useEffect, useState } from 'react';
import ActivityItem from '../ActivityItem/ActivityItem';
import InfoAdd from '../InfoAdd/InfoAdd';
import './Activitys.css';
const Activitys = () => {
    const [breaktime, setBreakTime] = useState('0');
    const [activitys, setActivitys] = useState([]);
    const [cart, setCart] = useState([]);
    
    useEffect(()=>{
        fetch("activity.json")
          .then((res) => res.json())
          .then((data) => setActivitys(data));
          const old = JSON.parse(localStorage.getItem("break-time"));
          if(old){
            setBreakTime(old);
            return;
          }
          else{
            setBreakTime(breaktime);
            return;
          }
    },[breaktime]);
    return (
      <div>
        <div className="parent">
          <div className="activity-container mt-20">
            <h1 className="text-3xl font-bold text-secondary">
              The Daily Activity
            </h1>
            <p className="text-lg font-bold py-2">Start Your Morning</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-8 ">
              {activitys.map((activity) => (
                <ActivityItem
                  activity={activity}
                  key={activity.id}
                  cart={cart}
                  setCart={setCart}
                ></ActivityItem>
              ))}
            </div>
          </div>
          <div className="info-container bg-white border-4 shadow-xl">
            <InfoAdd
              setBreakTime={setBreakTime}
              breaktime={breaktime}
            ></InfoAdd>
            <div className="p-6">
              <p className="text-xl font-bold">Activity Details</p>
              <div className="flex justify-around border rounded-md my-4 bg-slate-100 p-3">
                <p className="font-bold">Activity Counter</p>
                <p>
                  <span>
                    {cart.reduce(
                      (prev, current) =>
                        parseInt(prev) + parseInt(current.time),
                      0
                    )}
                  </span>{" "}
                  seconds
                </p>
              </div>
              <div className="flex justify-around border rounded-md my-4 bg-slate-100 p-3">
                <p className="font-bold">Break Counter</p>
                <p>
                  <span>{breaktime}</span> seconds
                </p>
              </div>
              <div>
                <button className="btn btn-outline btn-success w-full">
                  Activity Completed
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Activitys;