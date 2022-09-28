import React from 'react';
import './ActivityItem.css';
const ActivityItem = ({activity}) => {
   const {name, image, time, dsc} = activity;
  return (
    <div>
      <div className="card relative card-compact w-72 h-[400px] bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Shoes" className="w-[288px] h-[198px]" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p className="flex-grow-0">{dsc}</p>
          <p className="text-base">
            Spend Time: <span className="font-bold">{time}</span>
          </p>
          <div className="card-actions">
            <button className="btn btn-secondary btn-sm w-full absolute bottom-0 left-0 h-12">
              Count Activity
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityItem;