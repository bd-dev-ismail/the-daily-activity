import React, { useEffect, useState } from 'react';
import ActivityItem from '../ActivityItem/ActivityItem';
import InfoAdd from '../InfoAdd/InfoAdd';
import './Activitys.css';
const Activitys = () => {
    const [activitys, setActivitys] = useState([]);
    useEffect(()=>{
        fetch("activity.json")
          .then((res) => res.json())
          .then((data) => setActivitys(data));
    },[])
    return (
      <div>
        <div className="parent">
          <div className="activity-container mt-20">
            <h1 className="text-3xl font-bold text-primary">
              The Daily Activity
            </h1>
            <p className="text-lg font-bold py-2">Start Your Morning</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-8'>
              {activitys.map((activity) => (
                <ActivityItem
                  activity={activity}
                  key={activity.id}
                ></ActivityItem>
              ))}
            </div>
          </div>
          <div className="info-container bg-secondary">
            <InfoAdd></InfoAdd>
          </div>
        </div>
      </div>
    );
};

export default Activitys;