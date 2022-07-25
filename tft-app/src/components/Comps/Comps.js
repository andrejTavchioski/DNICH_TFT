import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import comps from "../../data/comps";
import Comp from "./Comp/Comp";
import "./Comps.css";
const Comps = () => {
  comps.sort((a, b) => {
    let fa = a.name.toLowerCase(),
      fb = b.name.toLowerCase();
    if (fa < fb) {
      return -1;
    }
    if (fa > fb) {
      return 1;
    }
    return 0;
  });
  const [currentComps, setComps] = useState(comps);

  const filterComps = (event) => {
    const text = event.target?.value;
    if (text === null || text === "" || text === undefined) {
      setComps(comps);
    } else {
      const filteredComps = comps.filter((comp) => {
        return comp.name.toLowerCase().includes(text.toLowerCase());
      });
      setComps(filteredComps);
    }
  };
  return (
    <div className="main_container">
      <div className="content_container">
        <div>
          <div className="search">
            <input
              type="text"
              onChange={filterComps}
              placeholder=" Search..."
            ></input>
            <FaSearch
              style={{
                color: "white",
                marginTop: "30px",
                position: "relative",
                top: "5px",
                height: "20px",
                width: "20px",
              }}
            />
          </div>
          <div className="comps_container">
            {currentComps.map((comp) => (
              <Comp comp={comp} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comps;
