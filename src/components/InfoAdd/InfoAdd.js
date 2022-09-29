
import { faHouseUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './InfoAdd.css';
const InfoAdd = ({ setBreakTime, breaktime }) => {
  const handalBreak = (e) => {
    const newbreakTime = e.currentTarget.childNodes[0].childNodes[0].innerText;
    localStorage.setItem("break-time", JSON.stringify(newbreakTime));
    setBreakTime(newbreakTime);
  };
  return (
    <>
      <div className="p-5">
        <div className="flex justify-center items-center py-4">
          <div className="avatar placeholder px-3">
            <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
              <img
                src="https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=581&q=80"
                alt=""
              />
            </div>
          </div>
          <div>
            <p className="text-lg font-bold">Md Ismail Hossen</p>
            <p className="text-base">
              <FontAwesomeIcon
                icon={faHouseUser}
                className="text-accent mr-2"
              ></FontAwesomeIcon>
              Chittagong, Bangladesh
            </p>
          </div>
        </div>
        <div className="flex justify-around text-center items-center mt-4 text-lg  border rounded-md bg-slate-100 p-3">
          <div>
            <p>
              <span className="font-bold">75</span>kg
            </p>
            <p>Weight</p>
          </div>
          <div>
            <p className="font-bold">6.2</p>
            <p>Height</p>
          </div>
          <div>
            <p>
              <span className="font-bold">20</span>Years
            </p>
            <p>Age</p>
          </div>
        </div>
        <div className="py-6">
          <p className="text-xl font-bold">Take A Break</p>
          <div className="mt-4 text-lg flex justify-around border rounded-md bg-slate-100 p-3">
            <div onClick={handalBreak}>
              <p className="rounded-2xl p-1 border-4 cursor-pointer">
                <button>10</button>s
              </p>
            </div>
            <div onClick={handalBreak}>
              <p className="rounded-2xl p-1 border-4 cursor-pointer">
                <button>20</button>s
              </p>
            </div>
            <div onClick={handalBreak}>
              <p className="rounded-2xl p-1 border-4 cursor-pointer">
                <button>30</button>s
              </p>
            </div>
            <div onClick={handalBreak}>
              <p className="rounded-2xl p-1 border-4 cursor-pointer">
                <button>40</button>s
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoAdd;